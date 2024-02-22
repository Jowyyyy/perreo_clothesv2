import { useRef } from 'react'; 
import '../styles/Styles.css';

const ProductosPage: React.FC = () => {
    const contentRef1 = useRef<HTMLDivElement>(null);
    const contentRef2 = useRef<HTMLDivElement>(null);
    const contentRef3 = useRef<HTMLDivElement>(null);
  
    const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
      if (ref.current) {
        ref.current.scrollTo({
          left: ref.current.scrollLeft + 150,
          behavior: 'smooth',
        });
      }
    };
  
    const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
      if (ref.current) {
        ref.current.scrollTo({
          left: ref.current.scrollLeft - 150,
          behavior: 'smooth',
        });
      }
    };

  return (
    <>
    <>
    <div>
          <h1>NOVEDADES</h1>
          <div className="slider-container">
              <div className="productos-container" ref={contentRef1}>
                  <button className="arrow left-arrow" onClick={() => scrollLeft(contentRef1)}>&#9664;</button>
                  {/* Contenido de los productos */}
                  {/* ... (tus productos) ... */}
                  <div className="producto">
                      <div className="img-prod">
                          <img src="src\assets\prod11.jpg" alt="prod1" />
                      </div>
                      <p className="textproducto">Polo Ralph Lauren</p>
                      <div className="precio">
                          <p> $90.00 <small style={{ color: "red" }}>65.00</small></p>
                      </div>
                      <button className="add-to-cart">Añadir a la cesta</button>
                  </div>
                  <div className="producto">
                      <div className="img-prod">
                          <img src="src\assets\prod12.jpg" alt="prod2" />
                      </div>
                      <p className="textproducto">Chaqueta North Face</p>
                      <div className="precio">
                          <p> $200.00 <small style={{ color: "red" }}>130.00</small></p>
                      </div>
                      <button className="add-to-cart">Añadir a la cesta</button>
                  </div>
                  <div className="producto">
                      <div className="img-prod">
                          <img src="src\assets\prod13.jpg" alt="prod3" />
                      </div>
                      <p className="textproducto">Sudadera OVO</p>
                      <div className="precio">
                          <p> $120.00 <small style={{ color: "red" }}>80.00</small></p>
                      </div>
                      <button className="add-to-cart">Añadir a la cesta</button>
                  </div>
                  {/* Agrega más productos similares */}
                  <div className="producto">
                      <div className="img-prod">
                          <img src="src\assets\prod14.jpg" alt="prod1" />
                      </div>
                      <p className="textproducto">Camiseta Fendi</p>
                      <div className="precio">
                          <p> $220.00 <small style={{ color: "red" }}>140.00</small></p>
                      </div>
                      <button className="add-to-cart">Añadir a la cesta</button>
                  </div>
                  <div className="producto">
                      <div className="img-prod">
                          <img src="src\assets\prod15.jpg" alt="prod1" />
                      </div>
                      <p className="textproducto">Pantalones Cortos Jordan</p>
                      <div className="precio">
                          <p> $40.00 <small style={{ color: "red" }}>25.00</small></p>
                      </div>
                      <button className="add-to-cart">Añadir a la cesta</button>
                  </div>
                  <div className="producto">
                      <div className="img-prod">
                          <img src="src\assets\prod16.jpg" alt="prod1" />
                      </div>
                      <p className="textproducto">Sudadera Anuel RHLM</p>
                      <div className="precio">
                          <p> $55.00 <small style={{ color: "red" }}>30.00</small></p>
                      </div>
                      <button className="add-to-cart">Añadir a la cesta</button>
                  </div>
                  <div className="producto">
                      <div className="img-prod">
                          <img src="src\assets\prod17.jpg" alt="prod1" />
                      </div>
                      <p className="textproducto">Air Force 1</p>
                      <div className="precio">
                          <p> $120.00 <small style={{ color: "red" }}>86.00</small></p>
                      </div>
                      <button className="add-to-cart">Añadir a la cesta</button>
                  </div>
                  <div className="producto">
                      <div className="img-prod">
                          <img src="src\assets\prod18.jpg" alt="prod1" />
                      </div>
                      <p className="textproducto">Air force 1 x Louis Vuitton</p>
                      <div className="precio">
                          <p> $550.00 <small style={{ color: "red" }}>440.00</small></p>
                      </div>
                      <button className="add-to-cart">Añadir a la cesta</button>
                  </div>
                  <div className="producto">
                      <div className="img-prod">
                          <img src="src\assets\prod19jpg.jpg" alt="prod1" />
                      </div>
                      <p className="textproducto">Cazadora plumifero</p>
                      <div className="precio">
                          <p> $90.00 <small style={{ color: "red" }}>73.00</small></p>
                      </div>
                      <button className="add-to-cart">Añadir a la cesta</button>
                  </div>
              </div>
              <button className="arrow right-arrow" onClick={() => scrollRight(contentRef1)}>&#9654;</button>
          </div>
      </div><div>
              <h1>MEN</h1>
              <div className="slider-container">
                  <div className="productos-container" ref={contentRef2}>
                  <button className="arrow left-arrow" onClick={() => scrollLeft(contentRef2)}>&#9664;</button>
                      {/* Contenido de los productos */}
                      {/* ... (tus productos) ... */}
                      <div className="producto">
                          <div className="img-prod">
                              <img src="src\assets\prod20.jpg" alt="prod1" />
                          </div>
                          <p className="textproducto">Camisa manga corta</p>
                          <div className="precio">
                              <p> $40.00 <small style={{ color: "red" }}>27.00</small></p>
                          </div>
                          <button className="add-to-cart">Añadir a la cesta</button>
                      </div>
                      <div className="producto">
                          <div className="img-prod">
                              <img src="src\assets\prod21.jpg" alt="prod2" />
                          </div>
                          <p className="textproducto">Zapatos de piel</p>
                          <div className="precio">
                              <p> $80.00 <small style={{ color: "red" }}>65.00</small></p>
                          </div>
                          <button className="add-to-cart">Añadir a la cesta</button>
                      </div>
                      <div className="producto">
                          <div className="img-prod">
                              <img src="src\assets\prod22.jpg" alt="prod3" />
                          </div>
                          <p className="textproducto">Pantalones de traje</p>
                          <div className="precio">
                              <p> $35.00 <small style={{ color: "red" }}>26.00</small></p>
                          </div>
                          <button className="add-to-cart">Añadir a la cesta</button>
                      </div>
                      {/* Agrega más productos similares */}
                      <div className="producto">
                          <div className="img-prod">
                              <img src="src\assets\prod23.jpg" alt="prod1" />
                          </div>
                          <p className="textproducto">Jersey cuello vuelto</p>
                          <div className="precio">
                              <p> $40.00 <small style={{ color: "red" }}>27.00</small></p>
                          </div>
                          <button className="add-to-cart">Añadir a la cesta</button>
                      </div>
                      <div className="producto">
                          <div className="img-prod">
                              <img src="src\assets\prod24.jpg" alt="prod1" />
                          </div>
                          <p className="textproducto">Vaqueros slim fit</p>
                          <div className="precio">
                              <p> $33.00 <small style={{ color: "red" }}>26.00</small></p>
                          </div>
                          <button className="add-to-cart">Añadir a la cesta</button>
                      </div>
                      <div className="producto">
                          <div className="img-prod">
                              <img src="src\assets\prod25.jpg" alt="prod1" />
                          </div>
                          <p className="textproducto">Sudadera logo K </p>
                          <div className="precio">
                              <p> $30.00 <small style={{ color: "red" }}>16.00</small></p>
                          </div>
                          <button className="add-to-cart">Añadir a la cesta</button>
                      </div>
                      <div className="producto">
                          <div className="img-prod">
                              <img src="src\assets\prod26.jpg" alt="prod1" />
                          </div>
                          <p className="textproducto">Camisa blanca de lino</p>
                          <div className="precio">
                              <p> $32.00 <small style={{ color: "red" }}>22.00</small></p>
                          </div>
                          <button className="add-to-cart">Añadir a la cesta</button>
                      </div>
                      <div className="producto">
                          <div className="img-prod">
                              <img src="src\assets\prod27.jpg" alt="prod1" />
                          </div>
                          <p className="textproducto">Pantalones cargo</p>
                          <div className="precio">
                              <p> $45.00 <small style={{ color: "red" }}>26.00</small></p>
                          </div>
                          <button className="add-to-cart">Añadir a la cesta</button>
                      </div>
                      <div className="producto">
                          <div className="img-prod">
                              <img src="src\assets\prod28.jpg" alt="prod1" />
                          </div>
                          <p className="textproducto">Chaqueta de borrego</p>
                          <div className="precio">
                              <p> $70.00 <small style={{ color: "red" }}>52.00</small></p>
                          </div>
                          <button className="add-to-cart">Añadir a la cesta</button>
                      </div>
                  </div>
                  <button className="arrow right-arrow" onClick={() => scrollRight(contentRef2)}>&#9654;</button>
              </div>
          </div>
          </>
          <div>

              <h1>WOMEN</h1>
              <div className="slider-container">
                  <div className="productos-container" ref={contentRef3}>
                  <button className="arrow left-arrow" onClick={() => scrollLeft(contentRef3)}>&#9664;</button>
                      {/* Contenido de los productos */}
                      {/* ... (tus productos) ... */}
                      <div className="producto">
                          <div className="img-prod">
                              <img src="src\assets\prod29.jpg" alt="prod1" />
                          </div>
                          <p className="textproducto">Falda vaquera</p>
                          <div className="precio">
                              <p> $25.00 <small style={{ color: "red" }}>13.00</small></p>
                          </div>
                          <button className="add-to-cart">Añadir a la cesta</button>
                      </div>
                      <div className="producto">
                          <div className="img-prod">
                              <img src="src\assets\prod30.jpg" alt="prod2" />
                          </div>
                          <p className="textproducto">Blusa blanca</p>
                          <div className="precio">
                              <p> $20.00 <small style={{ color: "red" }}>12.00</small></p>
                          </div>
                          <button className="add-to-cart">Añadir a la cesta</button>
                      </div>
                      <div className="producto">
                          <div className="img-prod">
                              <img src="src\assets\prod31.jpg" alt="prod3" />
                          </div>
                          <p className="textproducto">Pantalon plateado</p>
                          <div className="precio">
                              <p> $25.00 <small style={{ color: "red" }}>14.00</small></p>
                          </div>
                          <button className="add-to-cart">Añadir a la cesta</button>
                      </div>
                      {/* Agrega más productos similares */}
                      <div className="producto">
                          <div className="img-prod">
                              <img src="src\assets\prod32.jpg" alt="prod1" />
                          </div>
                          <p className="textproducto">Vestido ajustado rosa</p>
                          <div className="precio">
                              <p> $18.00 <small style={{ color: "red" }}>10.00</small></p>
                          </div>
                          <button className="add-to-cart">Añadir a la cesta</button>
                      </div>
                      <div className="producto">
                          <div className="img-prod">
                              <img src="src\assets\prod33.jpg" alt="prod1" />
                          </div>
                          <p className="textproducto">Pantalon vaquero corto</p>
                          <div className="precio">
                              <p> $20.00 <small style={{ color: "red" }}>12.00</small></p>
                          </div>
                          <button className="add-to-cart">Añadir a la cesta</button>
                      </div>
                      <div className="producto">
                          <div className="img-prod">
                              <img src="src\assets\prod34.jpg" alt="prod1" />
                          </div>
                          <p className="textproducto">Camiseta Palm Angels</p>
                          <div className="precio">
                              <p> $540.00 <small style={{ color: "red" }}>600.00</small></p>
                          </div>
                          <button className="add-to-cart">Añadir a la cesta</button>
                      </div>
                      <div className="producto">
                          <div className="img-prod">
                              <img src="src\assets\prod35jpg.jpg" alt="prod1" />
                          </div>
                          <p className="textproducto">Suudadera EverLast</p>
                          <div className="precio">
                              <p> $35.00 <small style={{ color: "red" }}>23.00</small></p>
                          </div>
                          <button className="add-to-cart">Añadir a la cesta</button>
                      </div>
                      <div className="producto">
                          <div className="img-prod">
                              <img src="src\assets\prod36jpg.jpg" alt="prod1" />
                          </div>
                          <p className="textproducto">Chaqueta de borrego negra</p>
                          <div className="precio">
                              <p> $60.00 <small style={{ color: "red" }}>42.00</small></p>
                          </div>
                          <button className="add-to-cart">Añadir a la cesta</button>
                      </div>
                      <div className="producto">
                          <div className="img-prod">
                              <img src="src\assets\prod37jpg.jpg" alt="prod1" />
                          </div>
                          <p className="textproducto">Rebook classic leather</p>
                          <div className="precio">
                              <p> $110.00 <small style={{ color: "red" }}>55.00</small></p>
                          </div>
                          <button className="add-to-cart">Añadir a la cesta</button>
                      </div>
                  </div>
                  <button className="arrow right-arrow" onClick={() => scrollRight(contentRef3)}>&#9654;</button>
              </div>
          </div>
        </>



      
  );
};
export default ProductosPage