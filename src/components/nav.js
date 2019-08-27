import React from 'react';
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="navigation">
      <ul className="nav-items">
        <li className="monogram"><a href="http://gretchenward.com/">GW</a></li>
        <li><a href="http://gretchenward.com/web.html">Web</a></li>
        <li><Link to="about" smooth={true} duration={500} activeClass="active">About</Link></li>
        <li><Link to="contact" smooth={true} duration={500} activeClass="active">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;
