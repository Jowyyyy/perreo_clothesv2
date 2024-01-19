import { useRef } from 'react';
import '../styles/Styles.css';

const Productos: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        left: contentRef.current.scrollLeft + 150,
        behavior: 'smooth',
      });
    }
  };

  const scrollLeft = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        left: contentRef.current.scrollLeft - 150,
        behavior: 'smooth',
      });
    }
  };


  return (
    <div>
      <h1>PRODUCTOS</h1>
      <div className="slider-container">
  <div className="productos-container" ref={contentRef}>
  <button className="arrow left-arrow" onClick={scrollLeft}>&#9664;</button>
    {/* Contenido de los productos */}
    {/* ... (tus productos) ... */}
    <div className="producto">
            <div className="img-prod">
            <img src="src\assets\prod1.jpg" alt="prod1"/>
            </div>
            <p className="textproducto">Camiseta Palm Angels</p>
          <div className="precio">
            <p> $540.00 <small style={{ color: "red" }}>600.00</small></p>
          </div>
          <button className="add-to-cart">Añadir a la cesta</button>
        </div>
        <div className="producto">
          <div className="img-prod">
          <img src="src\assets\prod2.jpg" alt="prod2"/>
          </div>
            <p className="textproducto">Nike dunk low</p>
          <div className="precio">
            <p> $150.00 <small style={{ color: "red" }}>210.00</small></p>
          </div>
          <button className="add-to-cart">Añadir a la cesta</button>
        </div>
        <div className="producto">
          <div className="img-prod">
            <img src="src\assets\prod3.jpg" alt="prod3"/>
          </div>
            <p className="textproducto">Jordan retro 4</p>
          <div className="precio">
            <p> $660.00 <small style={{ color: "red" }}>750.00</small></p>
          </div>
          <button className="add-to-cart">Añadir a la cesta</button>
        </div>
        {/* Agrega más productos similares */}
        <div className="producto">
            <div className="img-prod">
            <img src="src\assets\prod1.jpg" alt="prod1"/>
            </div>
            <p className="textproducto">Camiseta Palm Angels</p>
          <div className="precio">
            <p> $540.00 <small style={{ color: "red" }}>600.00</small></p>
          </div>
          <button className="add-to-cart">Añadir a la cesta</button>
        </div>
        <div className="producto">
            <div className="img-prod">
            <img src="src\assets\prod1.jpg" alt="prod1"/>
            </div>
            <p className="textproducto">Camiseta Palm Angels</p>
          <div className="precio">
            <p> $540.00 <small style={{ color: "red" }}>600.00</small></p>
          </div>
          <button className="add-to-cart">Añadir a la cesta</button>
        </div>
        <div className="producto">
            <div className="img-prod">
            <img src="src\assets\prod2.jpg" alt="prod1"/>
            </div>
            <p className="textproducto">Camiseta Palm Angels</p>
          <div className="precio">
            <p> $540.00 <small style={{ color: "red" }}>600.00</small></p>
          </div>
          <button className="add-to-cart">Añadir a la cesta</button>
        </div>
        <div className="producto">
            <div className="img-prod">
            <img src="src\assets\prod2.jpg" alt="prod1"/>
            </div>
            <p className="textproducto">Camiseta Palm Angels</p>
          <div className="precio">
            <p> $540.00 <small style={{ color: "red" }}>600.00</small></p>
          </div>
          <button className="add-to-cart">Añadir a la cesta</button>
        </div>
        <div className="producto">
            <div className="img-prod">
            <img src="src\assets\prod3.jpg" alt="prod1"/>
            </div>
            <p className="textproducto">Camiseta Palm Angels</p>
          <div className="precio">
            <p> $540.00 <small style={{ color: "red" }}>600.00</small></p>
          </div>
          <button className="add-to-cart">Añadir a la cesta</button>
        </div>
        <div className="producto">
            <div className="img-prod">
            <img src="src\assets\prod2.jpg" alt="prod1"/>
            </div>
            <p className="textproducto">Camiseta Palm Angels</p>
          <div className="precio">
            <p> $540.00 <small style={{ color: "red" }}>600.00</small></p>
          </div>
          <button className="add-to-cart">Añadir a la cesta</button>
        </div>
  </div>
  <button className="arrow right-arrow" onClick={scrollRight}>&#9654;</button>
</div>
      </div>
  );
};
export default Productos
