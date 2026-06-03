import { type Serie } from '../SerieForm/SerieForm';

interface SerieListProps {
  series: Serie[];
  onExcluir: (id: number) => void;
  onEditar: (serie: Serie) => void;
}

export default function SerieList({
  series,
  onEditar,
  onExcluir,
}: SerieListProps) {
  return (
    <div>
      <h2>Lista de Séries</h2>

      <ul>
        {series.map((serie) => (
          <li key={serie.id}>
            {serie.titulo} - {serie.temporadas} temporadas -
            {serie.diretor}

            <button
              onClick={() => onEditar(serie)}
            >
              Editar
            </button>

            <button
              onClick={() => onExcluir(serie.id)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}