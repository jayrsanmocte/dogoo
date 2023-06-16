import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [logoSrc, setLogoSrc] = useState('/Images/logoDog.png');

  const handleNavItemHover = () => {
    setLogoSrc('/Images/logoDog1.png');
  };

  const handleNavItemLeave = () => {
    setLogoSrc('/Images/logoDog.png');
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand me-5" href="#">
          <img
            src={logoSrc}
            alt="Logo Dog"
            style={{ width: '5rem', height: '4rem' }}
          />
          <img
            className="specialDog"
            src="/Images/special-dog.png"
            alt="Logo Dog"
            style={{ width: '6rem', height: '2rem' }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link me-5"
                aria-current="page"
                to="/home"
                onMouseEnter={handleNavItemHover}
                onMouseLeave={handleNavItemLeave}
              >
                <i className="fas fa-paw me-3"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link me-5"
                to="/about"
                onMouseEnter={handleNavItemHover}
                onMouseLeave={handleNavItemLeave}
              >
                <i className="fas fa-paw me-3 hvr-icon-buzz-out"></i>About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link me-5"
                to="/applicants"
                onMouseEnter={handleNavItemHover}
                onMouseLeave={handleNavItemLeave}
              >
                <i className="fas fa-paw me-3 hvr-icon-buzz-out"></i>Adopt a Dog
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link me-5"
                to="/searchDog"
                onMouseEnter={handleNavItemHover}
                onMouseLeave={handleNavItemLeave}
              >
                <i className="fas fa-paw me-3 hvr-icon-buzz-out"></i>Search a Dog
              </Link>
            </li>

            <li className="nav-item">
              <a
                className="nav-link me-5"
                href="#footer"
                onMouseEnter={handleNavItemHover}
                onMouseLeave={handleNavItemLeave}
              >
                <i className="fas fa-paw me-3 hvr-icon-buzz-out"></i>Contact
              </a>
            </li>
          </ul>
          <form className="d-flex me-5 align-items-center justify-content-between" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="nav-link me-3 hvr-icon-buzz-out" to="/login">
                LogIn
              </Link>
              <Link className="nav-link me-3 hvr-icon-buzz-out" to="/register">
                Register
              </Link>
            </ul>
           
          </form>
        </div>
      </div>
    </nav>
    <div><img src='/Images/school-divider1.png' alt="" id='imagelogo'/></div> </>
  );
}

export default Navbar;