import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/Styles.css'
import Searchbar from './Searchbar';
import NavBar from './Navbar';
import ProductEncab from './ProductEncab';
import Login from './Login';
import Productos from './Productos';
import Footer from './Footer';
import ProductosPage from './ProductosPage';
import GeneradorOutfits from './GeneradorOutfits';
import Signup from './Signup';
const HomePage = () => {
  
  return (
    <Router>

        <Searchbar />
        <NavBar />

        {/* ProductEncab siempre visible */}
        <ProductEncab />
        <Productos />
        <Routes>
          {/* Ruta para el componente Login */}
          <Route path="Login" element={<Login />} />
          <Route path="SIGNUP" element={<Signup />} />
          <Route path="ProductosPage/" element={<ProductosPage />} />
          <Route path="GeneradorOutfits" element={<GeneradorOutfits />} />
        </Routes>

          {/* Ruta para el componente Login */}
          


        {/* Productos siempre visible */}

        {/* Footer siempre visible */}
        <Footer />
      
    </Router>
  );
};

export default HomePage;
