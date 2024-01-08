import React from "react";

function Navbar() {
  return (
    <div className="App"> 
    <nav className="navbar navbar-expand-lg">

  <div class="container-fluid">
    <a class="navbar-brand" href="#"> <img src="https://www.thomascook.in/images/logo.jpg" alt="Logo"style={{ width: '81%', height: '70px' }}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Holiday</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Forex</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Hotels</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link disabled">Flights</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Offers And Other services" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar ;
