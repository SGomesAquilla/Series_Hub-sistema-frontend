import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  const renderNavbar = () =>
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

  test('renderiza o logo SerieJournal', () => {
    renderNavbar();
    expect(screen.getByText(/SerieJournal/i)).toBeInTheDocument();
  });

  test('renderiza os links de navegação', () => {
    renderNavbar();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Séries')).toBeInTheDocument();
    expect(screen.getByText('Sobre')).toBeInTheDocument();
  });

  test('links apontam para as rotas corretas', () => {
    renderNavbar();
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Séries').closest('a')).toHaveAttribute('href', '/series');
    expect(screen.getByText('Sobre').closest('a')).toHaveAttribute('href', '/sobre');
  });
});