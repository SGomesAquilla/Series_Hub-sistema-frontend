import { render, screen } from '@testing-library/react';
import Sobre from '../pages/Sobre';

describe('Sobre', () => {
  test('renderiza o título principal da página', () => {
    render(<Sobre />);
    expect(
      screen.getByRole('heading', { level: 1, name: /Sobre o Projeto/i })
    ).toBeInTheDocument();
  });

  test('renderiza a seção "O que é o SerieJournal?"', () => {
    render(<Sobre />);
    expect(screen.getByText(/O que é o SerieJournal/i)).toBeInTheDocument();
    expect(screen.getByText(/projeto acadêmico da PUCRS/i)).toBeInTheDocument();
  });

  test('renderiza a lista de tecnologias utilizadas', () => {
    render(<Sobre />);
    expect(screen.getByText(/React 19 \+ Vite/i)).toBeInTheDocument();
    expect(screen.getByText(/React Router DOM v6/i)).toBeInTheDocument();
    expect(screen.getByText(/Bootstrap 5/i)).toBeInTheDocument();
    expect(screen.getByText(/Axios/i)).toBeInTheDocument();
    expect(screen.getByText(/Jest \+ React Testing Library/i)).toBeInTheDocument();
  });

  test('renderiza o nome do desenvolvedor', () => {
    render(<Sobre />);
    expect(screen.getByText(/Aquilla Gomes/i)).toBeInTheDocument();
  });
});