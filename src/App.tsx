import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './assets/components/footer/Footer';
import Navbar from './assets/components/navbar/NavBar';
import Home from './assets/pages/home/Home';
import ListaCategorias from './assets/components/categorias/listacategoria/ListaCategorias';
import FormCategoria from './assets/components/formcategoria/FormCategoria';
import DeletarCategoria from './assets/components/categorias/deletarcategoria/DeletarCategoria';

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/categorias' element={<ListaCategorias />}/>
          <Route path='/editarcategoria/:id' element={<FormCategoria />}/>
          <Route path='/criarcategoria' element={<FormCategoria />}/>
          <Route path='/deletarcategoria/:id' element={<DeletarCategoria />}/>
        </Routes>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;