import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { Link as RouterLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navigation">
      <ul className="nav-items">
        <li className="monogram">
          <RouterLink exact="true" to="/">
            GW
          </RouterLink>
        </li>
        <li>
          <RouterLink exact="true" to="/work">
            Work
          </RouterLink>
        </li>
        <li>
          <Link to="/#about" smooth="true" duration={500}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
