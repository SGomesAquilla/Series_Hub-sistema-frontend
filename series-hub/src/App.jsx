import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Listagem from './pages/Listagem';
import Formulario from './pages/Formulario';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main classname="container mt-4">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/series' element={<Listagem />} />
          <Route path='/series/novo' element={<Formulario />} />
          <Route path='/series/editar/:id' element={<Formulario />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;