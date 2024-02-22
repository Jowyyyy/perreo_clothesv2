import React from 'react';
import '../styles/Styles.css'
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import x from '../assets/x.png';
import tiktok from '../assets/tiktok.png';
import whatsapp from '../assets/whatsapp.png';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className='sb__footer-section_padding'>
        <div className='sb__footer-links'>
          <div className='sb__footer-links-div'>
              <h4>Para negocios</h4>
              <a href='/employer'>
                <p>Trabajador</p>
              </a>
              <a href='/healthplan'>
                <p>Plan de salud</p>
              </a>
              <a href='/individual'>
                <p>Individual</p>
              </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Recursos</h4>
              <a href='/recourse'>
                <p>Centro de recursos</p>
              </a>
              <a href='/recourse'>
                <p>Testimonios </p>
              </a>
              <a href='/recourse'>
                <p>STV</p>
              </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Muy pronto en</h4>
            <div className='socialname'>
              <p><img src={facebook}></img></p>
              <p><img src={whatsapp}></img></p>
              <p><a href="https://twitter.com/home"><img src={x} alt="X"></img></a></p>
              <p><img src={tiktok}></img></p>
              <p><img src={instagram}></img></p>
            </div>
            <a href='/about'> 
                <p>Acerca de</p>
              </a>
              <a href='/press'>
                <p>Press </p>
              </a>
              <a href='/career'>
                <p>Carrera</p>
              </a>
              <a href='/contact'>
                <p>Contacto</p>
              </a>
          </div>
        </div>
      </div>
      
        <hr></hr>
        <div className='sb__footer-below'>
          <div className='sb__footer-copyright'>
            <p>
              © 2024 Perreo Clothes, Inc. Todos los derechos reservados 
            </p>
          </div>
          <div className='sb__footer-belows-links'>
            <a href='/terms'><div><p>Terminos y condiciones</p></div></a>
            <a href='/privacy'><div><p>Privacidad</p></div></a>
            <a href='/security'><div><p>Seguridad</p></div></a>
            <a href='/cookie'><div><p>Cookie Declararion</p></div></a>
          </div>
        </div>
    </div>
  );
};

export default Footer;