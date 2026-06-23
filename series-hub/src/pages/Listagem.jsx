import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/api';
import SerieCard from '../components/SerieCard';

function Listagem() {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        buscarSeries();
    }, []);

    async function buscarSeries() {
        try {
        setLoading(true);
        setErro(null);
        const { data } = await api.get('/series');
        setSeries(data);
        } catch (err) {
        setErro('Não foi possível carregar as séries. Verifique se a API está rodando.');
        } finally {
        setLoading(false);
        }
    }

    async function handleDelete(id) {
        if (!window.confirm('Tem certeza que deseja excluir esta série?')) return;
        try {
        await api.delete(`/series/${id}`);
        setSeries((prev) => prev.filter((s) => s.id !== id));
        } catch (err) {
        alert('Erro ao excluir a série. Tente novamente.');
        }
    }

    if (loading) {
        return (
        <div className="text-center py-5">
            <div className="spinner-border text-dark" role="status" />
            <p className="mt-3 text-muted">Carregando séries...</p>
        </div>
        );
    }

    if (erro) {
        return (
        <div className="alert alert-danger d-flex align-items-center gap-2" role="alert">
            ⚠️ {erro}
        </div>
        );
    }

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold mb-0">📋 Séries Cadastradas</h2>
                <Link to="/series/novo" className="btn btn-dark">
                    + Nova Série
                </Link>
            </div>

            {series.length === 0 ? (
                <div className="text-center py-5 text-muted">
                    <p className="fs-5">Nenhuma série cadastrada ainda.</p>
                    <Link to="/series/novo" className="btn btn-outline-dark mt-2">
                        Cadastrar primeira série
                    </Link>
                </div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-hover table-bordered align-middle">
                        <thead className="table-dark">
                            <tr>
                                <th>Título</th>
                                <th>Temporadas</th>
                                <th>Lançamento</th>
                                <th>Diretor</th>
                                <th>Produtora</th>
                                <th>Categoria</th>
                                <th>Data que Assistiu</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {series.map((serie) => (
                                <SerieCard
                                key={serie.id}
                                serie={serie}
                                onDelete={handleDelete}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Listagem;