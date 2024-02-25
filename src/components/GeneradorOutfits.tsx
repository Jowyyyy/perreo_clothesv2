import React, { useState } from 'react';

interface OutfitImageWithDescription {
  src: string;
  descripcion: string;
}

interface OutfitImages {
  pantalon: OutfitImageWithDescription;
  parteSuperior: OutfitImageWithDescription;
  zapatos: OutfitImageWithDescription;
}

interface OutfitsData {
  [estilo: string]: {
    [estacion: string]: OutfitImages;
  };
}


  const outfitsData: OutfitsData = {
    elegante: {
      verano: {
        pantalon: {
          src: 'src/assets/pantalonelegverano.jpg',
          descripcion: 'Pantalon de traje corto blanco 30$',
        },
        parteSuperior: {
          src: 'src/assets/camisaelegverano.jpg',
          descripcion: 'Camisa blanca rayada 25$',
        },
        zapatos: {
          src: 'src/assets/zapatoselegverano.jpg',
          descripcion: 'Zapatillas blancas 40$',
        },
      },
      invierno: {
        pantalon: {
          src: 'src/assets/pantaloneleginvierno.png',
          descripcion: 'Pantalón de traje azul marino 35$',
        },
        parteSuperior: {
          src: 'src/assets/camisaeleginvierno.jpg',
          descripcion: 'Camisa negra ajustada 27$',
        },
        zapatos: {
          src: 'src/assets/zapatoseleginvierno.png',
          descripcion: 'Zapatos de piel Armani negros 150$',
        },
      },
      otoño: {
        pantalon: {
          src: 'src/assets/pantalonelegotoño.jpg',
          descripcion: 'Pantalones de traje negros 30$',
        },
        parteSuperior: {
          src: 'src/assets/jerseyelegotoño.jpg',
          descripcion: 'Polo de manga larga negro 23$',
        },
        zapatos: {
          src: 'src/assets/zapatoselegotoño.jpg',
          descripcion: 'Air force 1 blancas 120$',
        },
      },
      primavera: {
        pantalon: {
          src: 'src/assets/pantalonelegprimavera.jpg',
          descripcion: 'Pantalon de traje gris 30$',
        },
        parteSuperior: {
          src: 'src/assets/poloelegprimavera.jpg',
          descripcion: 'Polo negro con tonos rojos 25$',
        },
        zapatos: {
          src: 'src/assets/zapatoselegprimavera.jpg',
          descripcion: 'Mocasines negros 45$',
        },
      },
    },
    casual: {
      verano: {
        pantalon: {
          src: 'src/assets/pantaloncasverano.jpg',
          descripcion: 'Vermudas color beige 32$',
        },
        parteSuperior: {
          src: 'src/assets/camisetacasverano.jpg',
          descripcion: 'Camiseta oversize Fake Gods 60$',
        },
        zapatos: {
          src: 'src/assets/zapatoscasverano.jpg',
          descripcion: 'Zapatillas blancas 35$',
        },
      },
      invierno: {
        pantalon: {
          src: 'src/assets/pantaloncasinvierno.jpg',
          descripcion: 'Vaqueros anchos 27$',
        },
        parteSuperior: {
          src: 'src/assets/sudaderacasinvierno.jpg',
          descripcion: 'Sudadera Fake Gods 70>$',
        },
        zapatos: {
          src: 'src/assets/zapatoscasinvierno.jpg',
          descripcion: 'Nike dunk low gris 125$',
        },
      },
      otoño: {
        pantalon: {
          src: 'src/assets/pantaloncasotoño.jpg',
          descripcion: 'Paantalon corto negro 25$',
        },
        parteSuperior: {
          src: 'src/assets/sudaderacasotoño.jpg',
          descripcion: 'Sudadera beige 30$',
        },
        zapatos: {
          src: 'src/assets/zapatoscasotoño.jpg',
          descripcion: 'Balenciaga track negras 720$',
        },
      },
      primavera: {
        pantalon: {
          src: 'src/assets/pantaloncasprimavera.jpg',
          descripcion: 'Vaqueros anchos 25$',
        },
        parteSuperior: {
          src: 'src/assets/camisetacasprimavera.jpg',
          descripcion: 'Camiseta blanca fake Gods 55$',
        },
        zapatos: {
          src: 'src/assets/zapatoscasprimavera.jpg',
          descripcion: 'New Balance 550 blancas 135$',
        },
      },
    }
  }
  const GeneradorOutfits: React.FC = () => {
    const [talla, setTalla] = useState<string>("");
    const [estilo, setEstilo] = useState<string>("");
    const [estacion, setEstacion] = useState<string>("");
    const [outfitGenerado, setOutfitGenerado] = useState<OutfitImages | null>(null);
    const [mostrarDescripcion, setMostrarDescripcion] = useState(false);
    const [descripcionActual, setDescripcionActual] = useState<string>('');
  
    const handleMouseEnter = (descripcion: string) => {
      setMostrarDescripcion(true);
      setDescripcionActual(descripcion);
    };
  
    const handleMouseLeave = () => {
      setMostrarDescripcion(false);
      setDescripcionActual('');
    };
  
    const handleClickGenerar = () => {
      if (outfitsData[estilo] && outfitsData[estilo][estacion]) {
        const outfit = outfitsData[estilo][estacion];
        setOutfitGenerado(outfit);
      } else {
        setOutfitGenerado(null);
      }
    };
  
    return (
      <div className='generador-outfits-container'>
        <label className='etiqueta1'>Talla:</label>
        <select value={talla} onChange={(e) => setTalla(e.target.value)}>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
        </select>
  
        <label className='etiqueta2'>Estilo:</label>
        <select value={estilo} onChange={(e) => setEstilo(e.target.value)}>
          <option value="casual">Casual</option>
          <option value="elegante">Elegante</option>
        </select>
  
        <label className='etiqueta3'>Estación del año:</label>
        <select value={estacion} onChange={(e) => setEstacion(e.target.value)}>
          <option value="verano">Verano</option>
          <option value="otoño">Otoño</option>
          <option value="primavera">Primavera</option>
          <option value="invierno">Invierno</option>
        </select>
  
        <button className='boton-generador' onClick={handleClickGenerar}>Generar Outfit</button>
  
        {outfitGenerado && (
        <div>
          <div className="outfit-item">
            <div
              className="outfit-image-container"
              onMouseEnter={() => handleMouseEnter(outfitGenerado.pantalon.descripcion)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={outfitGenerado.pantalon.src} alt="Pantalón" />
              {mostrarDescripcion && <p className="outfit-description">{descripcionActual}</p>}
            </div>
          </div>
          <div className="outfit-item">
            <div
              className="outfit-image-container"
              onMouseEnter={() => handleMouseEnter(outfitGenerado.parteSuperior.descripcion)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={outfitGenerado.parteSuperior.src} alt="Parte Superior" />
              {mostrarDescripcion && <p className="outfit-description">{descripcionActual}</p>}
            </div>
          </div>
          <div className="outfit-item">
            <div
              className="outfit-image-container"
              onMouseEnter={() => handleMouseEnter(outfitGenerado.zapatos.descripcion)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={outfitGenerado.zapatos.src} alt="Zapatos" />
              {mostrarDescripcion && <p className="outfit-description">{descripcionActual}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneradorOutfits;