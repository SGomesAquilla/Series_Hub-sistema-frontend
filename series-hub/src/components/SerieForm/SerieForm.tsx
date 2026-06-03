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
}

export default function SerieForm({
  onAdicionarSerie,
}: SerieFormProps) {
  const [titulo, setTitulo] = useState('');
  const [temporadas, setTemporadas] = useState(1);
  const [dataLancamento, setDataLancamento] = useState('');
  const [diretor, setDiretor] = useState('');
  const [produtora, setProdutora] = useState('');
  const [categoria, setCategoria] = useState('');
  const [dataAssistida, setDataAssistida] = useState('');

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    onAdicionarSerie({
      id: Date.now(),
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