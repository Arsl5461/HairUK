import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../images/logo.png"
import "./Navbar.css"
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light fs-4" style={{backgroundColor:"#AC8A50"}}>
  <div class="container-fluid">
    <Link to="/"><img src={Logo} height={"100px"} width={"100px"} /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link className="nav-link text-light active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/calculator">Transparent Calculator</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/gallery">Gallery</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/about">About us</Link>
        </li>
       
      </ul>
      <button>
          <Link class="nav-link" className="btn"  to="/contact">Contact us</Link>
        </button>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
