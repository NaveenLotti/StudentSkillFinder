import React from "react";
import "./Contact.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <footer id="footer">
      <div className="social-links">
        <a href="#" className="twitter"><FaTwitter /></a>
        <a href="#" className="facebook"><FaFacebookF /></a>
        <a href="#" className="instagram"><FaInstagram /></a>
        <a href="#" className="linkedin"><FaLinkedinIn /></a>
        <a href="#" className="whatsapp"><FaWhatsapp /></a>
      </div>
    </footer>
  );
};

export default Contact;
