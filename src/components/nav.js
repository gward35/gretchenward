import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as RouterLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navigation">
      <ul className="nav-items">
        <li className="monogram"><RouterLink to="/">GW</RouterLink></li>
        <li><RouterLink to="/web">Web</RouterLink></li>
        <li><Link to="/#about" smooth={true} duration={500} activeClass="active">About</Link></li>
        <li><Link to="/#contact" smooth={true} duration={500} activeClass="active">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;
