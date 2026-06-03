import { useState } from 'react';

export interface Serie {
  id: number;
  titulo: string;
  temporadas: number;
  dataLancamento: string;
  diretor: string;
  produtora: string;
  categoria: string;
  dataAssistida: string;
}

interface SerieFormProps {
  onAdicionarSerie: (serie: Serie) => void;
  serieInicial?: Serie;
}

export default function SerieForm({
  onAdicionarSerie,
  serieInicial,
}: SerieFormProps) {
  const [titulo, setTitulo] = useState(serieInicial?.titulo ?? '');
  const [temporadas, setTemporadas] = useState(serieInicial?.temporadas ?? 1);
  const [dataLancamento, setDataLancamento] = useState(serieInicial?.dataAssistida ?? '');
  const [diretor, setDiretor] = useState(serieInicial?.diretor ?? '');
  const [produtora, setProdutora] = useState(serieInicial?.produtora ?? '');
  const [categoria, setCategoria] = useState(serieInicial?.categoria ?? '');
  const [dataAssistida, setDataAssistida] = useState(serieInicial?.dataAssistida ?? '');

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    onAdicionarSerie({
      id: serieInicial?.id ?? Date.now(),
      titulo,
      temporadas,
      dataLancamento,
      diretor,
      produtora,
      categoria,
      dataAssistida,
    });

    setTitulo('');
    setTemporadas(1);
    setDataLancamento('');
    setDiretor('');
    setProdutora('');
    setCategoria('');
    setDataAssistida('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título</label>
        <input
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>

      <div>
        <label>Número de Temporadas</label>
        <input
          type="number"
          value={temporadas}
          onChange={(e) =>
            setTemporadas(Number(e.target.value))
          }
        />
      </div>

      <div>
        <label>Data de Lançamento</label>
        <input
          type="date"
          value={dataLancamento}
          onChange={(e) =>
            setDataLancamento(e.target.value)
          }
        />
      </div>

      <div>
        <label>Diretor</label>
        <input
          value={diretor}
          onChange={(e) => setDiretor(e.target.value)}
        />
      </div>

      <div>
        <label>Produtora</label>
        <input
          value={produtora}
          onChange={(e) => setProdutora(e.target.value)}
        />
      </div>

      <div>
        <label>Categoria</label>
        <input
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
      </div>

      <div>
        <label>Data em que assistiu</label>
        <input
          type="date"
          value={dataAssistida}
          onChange={(e) =>
            setDataAssistida(e.target.value)
          }
        />
      </div>

      <button type="submit">
        Cadastrar Série
      </button>
    </form>
  );
}