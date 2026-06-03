import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/cadastro">Cadastrar Série</Link>
            <Link to="/series">Listagem</Link>
        </nav>
    );
}