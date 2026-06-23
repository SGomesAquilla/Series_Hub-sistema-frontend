import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../api/api';

function Home() {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        api.get('/series')
        .then(({ data }) => setSeries(data.filter((s) => s.imagemUrl)))
        .catch(() => {});
    }, []);

    return (
        <div className="py-5 ms-3">
            <div className="row align-items-center g-5">

                <div className="col-lg-6">
                    <h1 className="display-4 fw-bold">
                        📺 Series Hub
                    </h1>
                    <p className="lead text-muted mt-3">
                        Seu diário pessoal de séries. Registre, organize e acompanhe
                        tudo o que você já assistiu em um só lugar.
                    </p>
                    <div className="d-flex gap-3 mt-5">
                        <Link to="/series" className="btn btn-dark btn-lg">
                            Ver Séries
                        </Link>
                        <Link to="/series/novo" className="btn btn-outline-dark btn-lg">
                            + Adicionar Série
                        </Link>
                    </div>
                </div>

                <div className="col-lg-6 text-center">
                    <div
                        className="bg-dark text-white rounded-4 p-5 shadow"
                        style={{ fontSize: '6rem' }}
                    >
                        🎬
                    </div>
                </div>

            </div>

            {/* Carrossel de Séries */}
            {series.length > 0 && (
                <>
                <hr className="my-5" />
                <h4 className="fw-bold mb-4">🎞️ Séries Cadastradas</h4>
                <div
                    id="carrosselSeries"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner rounded-4 shadow">
                    {series.map((serie, index) => (
                        <div
                        key={serie.id}
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        >
                        <img
                            src={serie.imagemUrl}
                            className="d-block w-100"
                            alt={serie.titulo}
                            style={{ height: '500px', objectFit: 'cover' }}
                            onError={(e) => (e.target.style.display = 'none')}
                        />
                        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-3">
                            <h5 className="fw-bold">{serie.titulo}</h5>
                            <p className="mb-0 small">{serie.categoria} · {serie.numeroTemporadas} temporada(s)</p>
                        </div>
                        </div>
                    ))}
                    </div>

                    {series.length > 1 && (
                    <>
                        <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carrosselSeries"
                        data-bs-slide="prev"
                        >
                        <span className="carousel-control-prev-icon" />
                        <span className="visually-hidden">Anterior</span>
                        </button>
                        <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carrosselSeries"
                        data-bs-slide="next"
                        >
                        <span className="carousel-control-next-icon" />
                        <span className="visually-hidden">Próximo</span>
                        </button>
                    </>
                    )}
                </div>
                </>
            )}

            <hr className="my-5" />

            <div className="row g-4 text-center">
                <div className="col-md-4">
                    <div className="p-4 border rounded-3 h-100">
                        <div style={{ fontSize: '2rem' }}>📋</div>
                        <h5 className="mt-2 fw-bold">Cadastre</h5>
                        <p className="text-muted small">
                            Adicione séries com título, diretor, produtora, categoria e mais.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-4 border rounded-3 h-100">
                        <div style={{ fontSize: '2rem' }}>✏️</div>
                        <h5 className="mt-2 fw-bold">Edite</h5>
                        <p className="text-muted small">
                            Atualize as informações sempre que precisar.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-4 border rounded-3 h-100">
                        <div style={{ fontSize: '2rem' }}>🗑️</div>
                        <h5 className="mt-2 fw-bold">Remova</h5>
                        <p className="text-muted small">
                            Exclua séries que não quer mais acompanhar.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;