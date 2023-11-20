import React from 'react';
import './styles/HomePage.styles.css'

class HomePage extends React.Component {

  render() {
    return (
        
      <div>
        <header>
    {/* <!-- Barra de navegación --> */}
    <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Hombre</a></li>
        <li><a href="#">Mujer</a></li>
        <li><a href="#">Niños</a></li>
        <li><a href="#">Ofertas</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <main>
    {/* <!-- Contenido principal de la página --> */}
    <section className="featured-products">
      <h2>Productos Destacados</h2>
      {/* <!-- Aquí van los productos destacados --> */}
      <div className="product-card">
        {/* <!-- Información del producto --> */}
      </div>
      <div className="product-card">
        {/* <!-- Información del producto --> */}
      </div>
      {/* <!-- Agregar más productos destacados según sea necesario --> */}
    </section>

    <section className="new-arrivals">
      <h2>Nuevas Llegadas</h2>
      {/* <!-- Aquí van las nuevas llegadas --> */}
      <div className="product-card">
        {/* <!-- Información del producto --> */}
      </div>
      <div className="product-card">
        {/* <!-- Información del producto --> */}
      </div>
      {/* <!-- Agregar más productos nuevos según sea necesario --> */}
    </section>
  </main>

  <footer>
    {/* <!-- Pie de página --> */}
    <p>Derechos reservados &copy; 2023 Tienda de Ropa</p>
  </footer>

      </div>
    );
  }
}

export default HomePage;