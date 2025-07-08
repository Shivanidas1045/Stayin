import React from 'react';
import "./style.css";

const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-transparent fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><span className="badge fst-italic fs-4 text-dark">Stay</span> <span className="badge fst-italic fs-4 bg-black text-light">Inn</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto gap-5 fs-5 mb-2">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/hotels">HOTELS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contactus">CONTACT US</a>
        </li>
      </ul>
      <div>
          <a href="/register" className="btn me-2 fs-7 text-dark"  style={{backgroundColor:"#9FE2BF"}}>REGISTER</a>
          <a href="/login" className="btn fs-6 bg-black text-light">LOG IN</a>
        </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar