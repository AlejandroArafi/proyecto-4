import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'




export const NavBar = () => {
  return (
    
    // <nav className='navbar'>
    // <NavLink to="/">Home</NavLink>
    // <NavLink to="/about">About</NavLink>
    // <NavLink to="/menu">Menu</NavLink>
    // <NavLink to="/reservas">Reservas</NavLink>
    // </nav>

    <>
    <img src="{mesa}" alt="" />
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* <NavLink className="navbar-brand" to="/" ><img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"/></NavLink> */}
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/menu" >
            Menu
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/reservas" >
            reservas
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}