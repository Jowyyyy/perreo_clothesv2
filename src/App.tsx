import React from 'react';
import './styles/Styles.css';
import NavBar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Productos from './components/Productos';
import ProductEncab from './components/ProductEncab';

const App: React.FC = () => {
  return (
    <>
      <h1 className='titulo'>Perreo CLothes</h1>
      <Searchbar />
      <NavBar totalQuantity={0} cartItems={[]} />
      <ProductEncab />
       <Productos />

    </>
  );
};
export default App;