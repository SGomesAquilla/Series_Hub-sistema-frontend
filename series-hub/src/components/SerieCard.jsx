import { useNavigate } from 'react-router-dom';

function SerieCard({ serie, onDelete }) {
    const navigate = useNavigate();

    return (
        <tr>
            <td>{serie.titulo}</td>
            <td>{serie.numeroTemporadas}</td>
            <td>{serie.dataLancamentoTemporada}</td>
            <td>{serie.diretor}</td>
            <td>{serie.produtora}</td>
            <td>{serie.categoria}</td>
            <td>{serie.dataAssistiu}</td>
            <td>
                <div className="d-flex gap-2">
                    <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => navigate(`/series/editar/${serie.id}`)}
                    >
                        ✏️ Editar
                    </button>
                    <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => onDelete(serie.id)}
                    >
                        🗑️ Excluir
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default SerieCard;