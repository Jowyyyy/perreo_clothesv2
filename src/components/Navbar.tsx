import React from "react";
import { Link } from "react-router-dom";


const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="row">
        <ul>
          <li><Link to="/login">LOG IN</Link></li>
          <li><Link to="/signup">SIGN UP</Link></li>
          <li><Link to="/ProductosPage">PRODUCTOS</Link></li>
          <li><Link to="/GeneradorOutfits">TUS OUTFITS</Link></li>
          <li><Link to="/box">MISTERY BOX</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;