import React from 'react';
import { Route, BrowserRouter as Router,} from 'react-router-dom';
import './styles/Styles.css';
import NavBar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Productos from './components/Productos';
import ProductEncab from './components/ProductEncab';
import Footer from './components/Footer';
import  Switch from 'mdb-react-ui-kit';
import login from './components/login';
// import Login from './pages/Login';

const App: React.FC = () => {
return (
  <Router>
  <h1 className='titulo'>Perreo CLothes</h1>
  <Searchbar />
  <NavBar totalQuantity={0} cartItems={[]} />
  <Switch>
    <Route path="/login" Component={login} />
    
      {/* Componentes de inicio aquí (ProductEncab, Productos, Footer, etc.) */}
      <ProductEncab />
      <Productos />
      <Footer />
  </Switch>
</Router>
  );
};

export default App;