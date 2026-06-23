import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SerieCard from '../components/SerieCard';

const serieMock = {
  id: 1,
  titulo: 'Breaking Bad',
  numeroTemporadas: 5,
  dataLancamentoTemporada: '2008-01-20',
  diretor: 'Vince Gilligan',
  produtora: 'AMC',
  categoria: 'Drama',
  dataAssistiu: '2024-01-10',
};

describe('SerieCard', () => {
  const renderCard = (onDelete = jest.fn()) =>
    render(
      <MemoryRouter>
        <table>
          <tbody>
            <SerieCard serie={serieMock} onDelete={onDelete} />
          </tbody>
        </table>
      </MemoryRouter>
    );

  test('renderiza os dados da série corretamente', () => {
    renderCard();
    expect(screen.getByText('Breaking Bad')).toBeInTheDocument();
    expect(screen.getByText('Vince Gilligan')).toBeInTheDocument();
    expect(screen.getByText('AMC')).toBeInTheDocument();
    expect(screen.getByText('Drama')).toBeInTheDocument();
  });

  test('renderiza os botões de Editar e Excluir', () => {
    renderCard();
    expect(screen.getByText(/Editar/i)).toBeInTheDocument();
    expect(screen.getByText(/Excluir/i)).toBeInTheDocument();
  });

  test('chama onDelete com o id correto ao clicar em Excluir', () => {
    const onDelete = jest.fn();
    renderCard(onDelete);
    fireEvent.click(screen.getByText(/Excluir/i));
    expect(onDelete).toHaveBeenCalledWith(1);
  });
});