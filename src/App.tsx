import React from 'react';
import './styles/Styles.css';
import NavBar from './components/Navbar';
import SearchBar from './components/Searchbar';

const App: React.FC = () => {
  return (
    
    <>
      <h1 className='titulo'>Perreo CLothes</h1>
      <NavBar totalQuantity={0} cartItems={[]} />
      <SearchBar/>

    </>
  );
};

export default App;