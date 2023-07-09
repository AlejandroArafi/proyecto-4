import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'




export const NavBar = ({nombre='Home'}) => {
  return (
    

    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">{nombre}</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/menu" >
            Menu
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/reservas" >
            Reservas
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
