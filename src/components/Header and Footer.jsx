import React from "react";
import logo from "../assests/text.png";
import "./Header and Footer.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";


const HeaderandFooter = () => {
    return (
        <div>
            <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="nav-right">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Help</a>
        </div>
      </div>
      <footer id="footer">
      <div className="footer-content">
          <div className="logo">
             <img src="src/assests/logo.png" alt="logo" />
          </div>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Help</a>
          
        </div>
      <div className="social-links">
        <a href="#" className="twitter"><FaTwitter /></a>
        <a href="#" className="facebook"><FaFacebookF /></a>
        <a href="#" className="instagram"><FaInstagram /></a>
        <a href="#" className="linkedin"><FaLinkedinIn /></a>
        <a href="#" className="whatsapp"><FaWhatsapp /></a>
      </div>
      </div>

    </footer>
        </div>
    );
};

export default HeaderandFooter;