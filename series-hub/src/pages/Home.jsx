import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="py-5 ms-3">
            <div className="row align-items-center g-5">

                <div className="col-lg-6">
                    <h1 className="display-4 fw-bold">
                        📺 SerieJournal
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