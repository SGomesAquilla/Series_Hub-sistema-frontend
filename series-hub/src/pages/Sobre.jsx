function Sobre() {
    return (
        <div className="py-5 row justify-content-center">
            <div className="col-lg-8">

                <h1 className="fw-bold mb-4">Sobre o Projeto</h1>

                <div className="card border-0 shadow-sm mb-4">
                    <div className="card-body p-4">
                        <h5 className="fw-bold">📌 O que é o SerieJournal?</h5>
                        <p className="text-muted">
                            SerieJournal é uma aplicação web de gerenciamento de séries
                            desenvolvida como projeto acadêmico da PUCRS. Permite cadastrar,
                            visualizar, editar e excluir registros de séries assistidas.

                            Ela funciona consumindo uma API externa chamada serieJournal-api em:
                            https://github.com/adsPucrsOnline/DesenvolvimentoFrontend/ (branch main).

                        </p>
                    </div>
                </div>

                <div className="card border-0 shadow-sm mb-4">
                    <div className="card-body p-4">
                        <h5 className="fw-bold">🛠️ Tecnologias utilizadas</h5>
                        <ul className="list-group list-group-flush mt-2">
                            {[
                                'React 19 + Vite',
                                'React Router DOM v6',
                                'Bootstrap 5',
                                'Axios',
                                'Jest + React Testing Library',
                            ].map((tech) => (
                                <li key={tech} className="list-group-item px-0 text-muted">
                                ✅ {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                        <h5 className="fw-bold">👨‍💻 Desenvolvido por</h5>
                        <p className="text-muted mb-0">
                            Aquilla Gomes — PUCRS
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Sobre;