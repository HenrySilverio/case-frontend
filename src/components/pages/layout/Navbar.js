import { Link } from 'react-router-dom'
import React from 'react'

import './style.css'

/* hooks */

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <h2>Login</h2>
      </div>
      <ul>
          <>
            <li>
              <Link to="/login">Entrar</Link>
            </li>
            <li>
              <Link to="/register">Registar</Link>
            </li>
          </>
      </ul>
    </nav>
  )
}

export default Navbar