import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/images/white-logo.png";

function NavBar(){

    const location = useLocation();

    return(
<nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "black"}}>
      <img 
      src={logo} 
      width="30" 
      height="30" 
      className="d-inline-block align-top" 
      alt="K logo"/>
      <a 
      id="nav" 
      className="navbar-brand" 
      href="index.html">Kelli Jarrell</a>
      <button 
      className="navbar-toggler" 
      type="button" 
      data-toggle="collapse" 
      data-target="#navbarNav"
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div 
      className="collapse navbar-collapse" 
      id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Portfolio |
                </Link>
        
                <Link to="/discover" className={location.pathname === "/discover" ? "nav-link active" : "nav-link"}>
            About / Contact |
                </Link>
            
        </ul>
      </div>
    </nav>
    )
}

export default NavBar;