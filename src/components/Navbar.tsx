import React from "react";
interface NavBarProps {
    totalQuantity: number;
    cartItems: any[]; // O ajusta el tipo de cartItems según la estructura real de tus datos
  }
  
  const NavBar: React.FC<NavBarProps> = ({  }) => {
    return (
      <div className="navbar">
        {/* <Searchbar /> */}
        <div className="row">
          <ul>
            <li>
              <a href="/home">HOME</a>
            </li>
            <li>
              <a href="/ofertas">OFERTAS</a>
            </li>
            <li>
              <a href="/productos">PRODUCTOS</a>
            </li>
            <li>
              <a href="/outfit">TUS OUTFITS</a>
            </li>
            <li>
              <a href="/box">MISTERY BOX</a>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default NavBar;