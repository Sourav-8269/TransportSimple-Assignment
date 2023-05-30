import React, { useState } from "react";
import "../Styles/navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import {GrFormClose} from "react-icons/gr"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://www.transportsimple.com/redesign/images/logo.png"
          alt="Transport Simple Logo"
          srcset=""
        />
      </div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>Feature</li>
        <li>Industry</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleNavbar}
      >
        {!isOpen?<RxHamburgerMenu size="45px" />:<GrFormClose size="45px" />}
      </div>
      <div className="demo">
        <button className="demo_btn">Get Demo</button>
      </div>
    </nav>
  );
};

export default Navbar;
