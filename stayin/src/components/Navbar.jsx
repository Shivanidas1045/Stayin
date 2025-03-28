import React from 'react';
import "./style.css";

const Navbar = () => {
  return (
    <div>
<nav class="navbar navbar-expand-lg bg-transparent fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><span class="badge fst-italic fs-4 text-dark">Stay</span> <span class="badge fst-italic fs-4 bg-black text-light">Inn</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto gap-5 fs-5 mb-2">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/hotels">HOTELS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contactus">CONTACT US</a>
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