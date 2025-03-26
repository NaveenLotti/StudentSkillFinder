import React from "react";
import "./Footer.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
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
  );
};

export default Footer;
