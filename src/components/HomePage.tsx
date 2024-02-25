import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/Styles.css'
import Searchbar from './Searchbar';
import NavBar from './Navbar';
import ProductEncab from './ProductEncab';
import Login from './login'
import Productos from './Productos';
import Footer from './Footer';
import ProductosPage from './ProductosPage';
import GeneradorOutfits from './GeneradorOutfits';
import Signup from './Signup';
const HomePage = () => {
  
  return (
    <Router>
       <Routes>
          {/* Ruta para el componente Login */}
          <Route path="Login" element={<Login />} />
          <Route path="SIGNUP" element={<Signup />} />
        </Routes>
        <Searchbar />
        <NavBar />

        {/* ProductEncab siempre visible */}
        <ProductEncab />
        <Productos />
        <Routes>
          <Route path="ProductosPage" element={<ProductosPage />} />
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
