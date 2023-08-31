import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faInfo } from '@fortawesome/free-solid-svg-icons';
import '../style/Header.css';

const Header = () => { 
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#" className="logo">ReadyWear</a>
        <ul className="nav-links">
          <li><a href="#"><span><FontAwesomeIcon icon={faCartShopping} /></span> Cart</a></li>
          <li><a href="#"><span><FontAwesomeIcon icon={faInfo} /></span> Info</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

