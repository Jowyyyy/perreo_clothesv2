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
              <h4>For Bussines</h4>
              <a href='/employer'>
                <p>Employer</p>
              </a>
              <a href='/healthplan'>
                <p>Healt plan</p>
              </a>
              <a href='/individual'>
                <p>Individual</p>
              </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Recourses</h4>
              <a href='/recourse'>
                <p>Recourse center</p>
              </a>
              <a href='/recourse'>
                <p>Testimonials </p>
              </a>
              <a href='/recourse'>
                <p>STV</p>
              </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Coming soon on</h4>
            <div className='socialname'>
              <p><img src={facebook}></img></p>
              <p><img src={whatsapp}></img></p>
              <p><img src={x}></img></p>
              <p><img src={tiktok}></img></p>
              <p><img src={instagram}></img></p>
            </div>
            <a href='/about'> 
                <p>About</p>
              </a>
              <a href='/press'>
                <p>Press </p>
              </a>
              <a href='/career'>
                <p>Career</p>
              </a>
              <a href='/contact'>
                <p>Contact</p>
              </a>
          </div>
        </div>
      </div>
      
        <hr></hr>
        <div className='sb__footer-below'>
          <div className='sb__footer-copyright'>
            <p>
              @(new Date().getFullYear()) CodeInn. All right reserved. 
            </p>
          </div>
          <div className='sb__footer-belows-links'>
            <a href='/terms'><div><p>Terms & Conditions</p></div></a>
            <a href='/privacy'><div><p>Privacy</p></div></a>
            <a href='/security'><div><p>Security</p></div></a>
            <a href='/cookie'><div><p>Cookie Declararion</p></div></a>
          </div>
        </div>
    </div>
  );
};

export default Footer;