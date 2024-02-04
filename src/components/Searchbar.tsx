import * as React from 'react';
import { useState } from 'react';
import '../styles/Styles.css'

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Aquí puedes manejar la lógica de búsqueda, por ejemplo, enviar el término de búsqueda a una API o realizar alguna acción con el término.
      console.log(`Search term entered: ${searchTerm}`);
    };
  
    return (
      <form onSubmit={handleSearch} className='searchbar-container'>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit"className='search-button'>Search</button>
      </form>
    );
  };
  
  export default SearchBar;