import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand fw-bold" to="/">
                    📺 SerieJournal
                </NavLink>

                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Abrir navegação"
                >
                <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                isActive ? 'nav-link active fw-semibold' : 'nav-link'
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                isActive ? 'nav-link active fw-semibold' : 'nav-link'
                                }
                                to="/series"
                            >
                                Séries
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                isActive ? 'nav-link active fw-semibold' : 'nav-link'
                                }
                                to="/sobre"
                            >
                                Sobre
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;