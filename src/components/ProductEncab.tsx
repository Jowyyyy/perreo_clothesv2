import React from 'react';
import '../styles/Styles.css'; // Asegúrate de importar tu archivo de estilos

const ProductEncab: React.FC = () => {

        return (
          <section className="carousel-container">
            <div className="slider-frame">
              <ul>
                <li><img src="src\assets\slider1.jpg" alt="" /></li>
                <li><img src="src\assets\slider2.jpg" alt="" /></li>
                <li><img src="src\assets\slider3.jpg" alt="" /></li>
                <li><img src="src\assets\slider4.jpg" alt="" /></li>
              </ul>
            </div>
          </section>
        );
      };      


export default ProductEncab;