import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Formulario from '../pages/Formulario';
import api from '../api/api';

// Mocka o módulo de API inteiro — assim nenhuma chamada real é feita
jest.mock('../api/api');

describe('Formulario', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  function renderEmModoCriacao() {
    return render(
      <MemoryRouter initialEntries={['/series/novo']}>
        <Routes>
          <Route path="/series/novo" element={<Formulario />} />
          <Route path="/series" element={<div>Página de Listagem</div>} />
        </Routes>
      </MemoryRouter>
    );
  }

  function renderEmModoEdicao(id = '1') {
    return render(
      <MemoryRouter initialEntries={[`/series/${id}/editar`]}>
        <Routes>
          <Route path="/series/:id/editar" element={<Formulario />} />
          <Route path="/series" element={<div>Página de Listagem</div>} />
        </Routes>
      </MemoryRouter>
    );
  }

  test('renderiza todos os campos obrigatórios em modo de criação', () => {
    renderEmModoCriacao();

    expect(screen.getByLabelText(/^Título/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Número de Temporadas/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Data de Lançamento da Temporada/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Diretor/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Produtora/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Categoria/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Data em que Assistiu/i)).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Nova Série/i })
    ).toBeInTheDocument();
  });

  test('envia o formulário em modo de criação chamando api.post com os dados corretos', async () => {
    api.post.mockResolvedValueOnce({ data: { id: 99 } });

    renderEmModoCriacao();

    fireEvent.change(screen.getByLabelText(/^Título/i), {
      target: { value: 'Breaking Bad' },
    });
    fireEvent.change(screen.getByLabelText(/Número de Temporadas/i), {
      target: { value: '5' },
    });
    fireEvent.change(screen.getByLabelText(/Data de Lançamento da Temporada/i), {
      target: { value: '2008-01-20' },
    });
    fireEvent.change(screen.getByLabelText(/^Diretor/i), {
      target: { value: 'Vince Gilligan' },
    });
    fireEvent.change(screen.getByLabelText(/^Produtora/i), {
      target: { value: 'AMC' },
    });
    fireEvent.change(screen.getByLabelText(/^Categoria/i), {
      target: { value: 'Drama' },
    });
    fireEvent.change(screen.getByLabelText(/Data em que Assistiu/i), {
      target: { value: '2024-01-10' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Cadastrar Série/i }));

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledTimes(1);
    });

    expect(api.post).toHaveBeenCalledWith(
      '/series',
      expect.objectContaining({
        titulo: 'Breaking Bad',
        numeroTemporadas: '5',
        diretor: 'Vince Gilligan',
        produtora: 'AMC',
        categoria: 'Drama',
      })
    );

    // Após salvar com sucesso, o componente navega para /series
    await waitFor(() => {
      expect(screen.getByText('Página de Listagem')).toBeInTheDocument();
    });
  });

  test('carrega os dados existentes via api.get em modo de edição', async () => {
    api.get.mockResolvedValueOnce({
      data: {
        titulo: 'Friends',
        numeroTemporadas: '10',
        dataLancamentoTemporada: '1994-09-22',
        diretor: 'Kevin S. Bright',
        produtora: 'Warner Bros',
        categoria: 'Comédia',
        dataAssistiu: '2019-06-01',
      },
    });

    renderEmModoEdicao('1');

    await waitFor(() => {
      expect(api.get).toHaveBeenCalledWith('/series/1');
    });

    expect(await screen.findByDisplayValue('Friends')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Editar Série/i })
    ).toBeInTheDocument();
  });

  test('exibe mensagem de erro quando a API falha ao salvar', async () => {
    api.post.mockRejectedValueOnce(new Error('Falha na rede'));

    renderEmModoCriacao();

    fireEvent.change(screen.getByLabelText(/^Título/i), {
      target: { value: 'Breaking Bad' },
    });
    fireEvent.change(screen.getByLabelText(/Número de Temporadas/i), {
      target: { value: '5' },
    });
    fireEvent.change(screen.getByLabelText(/Data de Lançamento da Temporada/i), {
      target: { value: '2008-01-20' },
    });
    fireEvent.change(screen.getByLabelText(/^Diretor/i), {
      target: { value: 'Vince Gilligan' },
    });
    fireEvent.change(screen.getByLabelText(/^Produtora/i), {
      target: { value: 'AMC' },
    });
    fireEvent.change(screen.getByLabelText(/^Categoria/i), {
      target: { value: 'Drama' },
    });
    fireEvent.change(screen.getByLabelText(/Data em que Assistiu/i), {
      target: { value: '2024-01-10' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Cadastrar Série/i }));

    expect(
      await screen.findByText(/Erro ao salvar a série/i)
    ).toBeInTheDocument();
  });
});