import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './assets/components/footer/Footer';
import Navbar from './assets/components/navbar/NavBar';
import Home from './assets/pages/home/Home';

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Home />
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;