import { model, set } from "mongoose";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Menu.css"


const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(true);

  
  const toggleMenu = () => {
    if(!isOpen){
      setShowMenuButton(false);
      setIsOpen(true);
    }else{
      setIsOpen(false);
      setTimeout(()=> setShowMenuButton(true),500);
    }
};

  return (
    <div>
      {showMenuButton && (
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
            )}
      
      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <button className="menu-toggle" onClick={toggleMenu}>
            X
        </button>
        <h1>Menu</h1>
          <ul className="menu-list">
          <li><Link to="/dashboard/academics">Academics</Link></li>
          <li><Link to="/dashboard/web-development">Web Development</Link></li>
          <li><Link to="/dashboard/pro-lang">Programming Languages</Link></li>
          <li><Link to="/dashboard/other-tech">Other Technologies</Link></li>
        </ul>
      </nav>  
      <Outlet/>
    </div>
  );
};

export default Menu;