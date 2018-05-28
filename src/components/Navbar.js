import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'
// import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <b>SchattenSkulptura</b>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/home">
          Home
        </Link>
        <Link className="navbar-item" to="/hintergrund">
          Hintergrund
        </Link>
        <Link className="navbar-item" to="/impressum">
          Impressum
        </Link>
        <Link className="navbar-item" to="/anb">
          ANB
        </Link>
        <Link className="navbar-item" to="/dsgvo">
          DSGVO
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
