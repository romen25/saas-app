import React from 'react';
    import { Link } from 'react-router-dom';

    function Navbar() {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/">CSC SaaS App</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item dropdown">
                  <button
                    className="nav-link dropdown-toggle btn btn-link"
                    id="servicesDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                    <li><Link className="dropdown-item" to="/services/pan">PAN</Link></li>
                    <li><Link className="dropdown-item" to="/services/voter-id">Voter ID</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <button
                    className="nav-link dropdown-toggle btn btn-link"
                    id="productsDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                    <li><Link className="dropdown-item" to="/products/pvc-print">PVC Print</Link></li>
                    <li><Link className="dropdown-item" to="/products/business-card">Business Card Print</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/join-now">Join Now</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }

    export default Navbar;