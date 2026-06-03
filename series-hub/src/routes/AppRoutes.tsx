import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Cadastro from '../pages/Cadastro/Cadastro';
import Series from '../pages/Series/Series';
import Editar from '../pages/Editar/Editar';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/series" element={<Series />} />
            <Route path="/editar/:id" element={<Editar />} />
        </Routes>
    );
}