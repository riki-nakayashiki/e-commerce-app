import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faInfo } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Cart from "./Cart.jsx";
import '../style/Header.css';

const Header = () => {
  const [isCart, setCart] = useState(false);
  const cartStatus = ()=> {
    setCart(!isCart)
  }

  return (
    <header className="header">
      <nav className="navbar">
        <a href="/" className="logo">ReadyWear</a>
        <ul className="nav-links">
          <li><a href="#" onClick={cartStatus}><span><FontAwesomeIcon icon={faCartShopping}/></span> Cart</a></li>
          <li><a href="#"><span><FontAwesomeIcon icon={faInfo} /></span> Info</a></li>
        </ul>
      </nav>
      {isCart 
      && <Cart />
      }
    </header>
  );
};

export default Header;

