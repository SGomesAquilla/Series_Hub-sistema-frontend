import { NavLink } from 'react-router-dom';
import { useRef } from 'react';

function Navbar() {
    const navRef = useRef(null);

    function fecharMenu() {
        const toggler = document.querySelector('.navbar-toggler');
        const menu = document.getElementById('navbarNav');
        if (menu && menu.classList.contains('show')) {
            toggler.click();
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand fw-bold" to="/">
                    📺 Series Hub
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
                    <ul className="navbar-nav ms-auto text-end">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                isActive ? 'nav-link active fw-semibold' : 'nav-link'
                                }
                                to="/"
                                onClick={fecharMenu}
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
                                onClick={fecharMenu}
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
                                onClick={fecharMenu}
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