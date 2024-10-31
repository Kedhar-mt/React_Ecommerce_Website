import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand fs-1 fw-bold" to="/">
          <img src="./src/images/vector.png" alt="K-FASHION" className="nav-img align-text-top" />
          K-FASHION
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/men"
                className={({ isActive }) =>
                  isActive ? 'nav-link fs-4 fw-semibold active-link' : 'nav-link fs-4 fw-semibold'
                }
              >
                MEN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/women"
                className={({ isActive }) =>
                  isActive ? 'nav-link fs-4 fw-semibold active-link' : 'nav-link fs-4 fw-semibold'
                }
              >
                WOMEN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/kids"
                className={({ isActive }) =>
                  isActive ? 'nav-link fs-4 fw-semibold active-link' : 'nav-link fs-4 fw-semibold'
                }
              >
                KIDS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? 'nav-link fs-4 fw-semibold active-link' : 'nav-link fs-4 fw-semibold'
                }
              >
                CART
              </NavLink>
            </li>
          </ul>
          <button type="button" className="btn btn-dark ms-lg-3">SIGN-UP</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
