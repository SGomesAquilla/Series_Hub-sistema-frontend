// Listagem.integration.test.jsx
//
// Teste gerado por IA para estudar testes integrados
//
// Teste de INTEGRAÇÃO: renderiza Listagem + SerieCard juntos, com seus
// componentes reais interagindo entre si (sem mockar nada entre eles).
// A única fronteira mockada é a API externa — exatamente o que normalmente
// não controlamos em um teste (rede), e exatamente o que normalmente
// controlamos sim (nossos próprios componentes).
//
// Diferença em relação aos testes de componente isolado que já temos:
// - SerieCard.test.jsx testa o SerieCard sozinho, com onDelete mockado.
// - Aqui, é a Listagem real que fornece o onDelete real para o SerieCard
//   real. Se a integração entre eles quebrar (ex: handleDelete não filtra
//   o array corretamente, ou passa o id errado), é este teste que pega.

import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Listagem from '../pages/Listagem';
import api from '../api/api';

jest.mock('../api/api');

const seriesMock = [
  {
    id: 1,
    titulo: 'Breaking Bad',
    numeroTemporadas: 5,
    dataLancamentoTemporada: '2008-01-20',
    diretor: 'Vince Gilligan',
    produtora: 'AMC',
    categoria: 'Drama',
    dataAssistiu: '2024-01-10',
  },
  {
    id: 2,
    titulo: 'Friends',
    numeroTemporadas: 10,
    dataLancamentoTemporada: '1994-09-22',
    diretor: 'Kevin S. Bright',
    produtora: 'Warner Bros',
    categoria: 'Comédia',
    dataAssistiu: '2019-06-01',
  },
];

describe('Listagem (integração com SerieCard)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderListagem() {
    return render(
      <MemoryRouter>
        <Listagem />
      </MemoryRouter>
    );
  }

  test('exibe o spinner de carregamento e depois renderiza as séries vindas da API', async () => {
    api.get.mockResolvedValueOnce({ data: seriesMock });

    renderListagem();

    // Estado de loading aparece primeiro
    expect(screen.getByText(/Carregando séries/i)).toBeInTheDocument();

    // Depois que a "API" responde, a tabela com os dados reais aparece
    expect(await screen.findByText('Breaking Bad')).toBeInTheDocument();
    expect(screen.getByText('Friends')).toBeInTheDocument();
    expect(screen.getByText('Vince Gilligan')).toBeInTheDocument();
    expect(screen.getByText('Kevin S. Bright')).toBeInTheDocument();

    expect(api.get).toHaveBeenCalledWith('/series');
  });

  test('exibe mensagem de erro quando a API falha ao carregar', async () => {
    api.get.mockRejectedValueOnce(new Error('Falha de rede'));

    renderListagem();

    expect(
      await screen.findByText(/Não foi possível carregar as séries/i)
    ).toBeInTheDocument();
  });

  test('exibe estado vazio quando a API retorna lista sem séries', async () => {
    api.get.mockResolvedValueOnce({ data: [] });

    renderListagem();

    expect(
      await screen.findByText(/Nenhuma série cadastrada ainda/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Cadastrar primeira série/i)).toBeInTheDocument();
  });

  test('clicar em "Excluir" em um card real remove a série correta da lista renderizada', async () => {
    api.get.mockResolvedValueOnce({ data: seriesMock });
    api.delete.mockResolvedValueOnce({});

    // window.confirm é chamado pelo handleDelete real da Listagem;
    // mockamos para simular o usuário confirmando a exclusão.
    window.confirm = jest.fn(() => true);

    renderListagem();

    await screen.findByText('Breaking Bad');
    expect(screen.getByText('Friends')).toBeInTheDocument();

    // Pega o botão Excluir dentro da linha (tr) do Breaking Bad especificamente —
    // valida que o SerieCard certo está associado ao id certo.
    const linhaBreakingBad = screen.getByText('Breaking Bad').closest('tr');
    const botaoExcluir = within(linhaBreakingBad).getByRole('button', {
      name: /excluir/i,
    });

    fireEvent.click(botaoExcluir);

    await waitFor(() => {
      expect(api.delete).toHaveBeenCalledWith('/series/1');
    });

    // Integração real: a Listagem atualizou seu próprio estado e
    // re-renderizou sem o item excluído, mantendo o outro intacto.
    await waitFor(() => {
      expect(screen.queryByText('Breaking Bad')).not.toBeInTheDocument();
    });
    expect(screen.getByText('Friends')).toBeInTheDocument();
  });

  test('cancelar a confirmação de exclusão mantém a série na lista', async () => {
    api.get.mockResolvedValueOnce({ data: seriesMock });
    window.confirm = jest.fn(() => false);

    renderListagem();

    await screen.findByText('Breaking Bad');

    const linhaBreakingBad = screen.getByText('Breaking Bad').closest('tr');
    const botaoExcluir = within(linhaBreakingBad).getByRole('button', {
      name: /excluir/i,
    });

    fireEvent.click(botaoExcluir);

    // Nenhuma chamada de delete deve ter sido feita, e a série permanece
    expect(api.delete).not.toHaveBeenCalled();
    expect(screen.getByText('Breaking Bad')).toBeInTheDocument();
  });
});