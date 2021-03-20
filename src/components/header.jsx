/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from "../images/bose_logo_white.png";
// import '../css/style.min.css';
// import "./pages/app.css";
import {  Link } from "react-router-dom";

export function Header() {
  return (
 
      <header>
        <nav>
          <Link to={"/"}>
            <div className="logoContainer">
              <img src={logo} alt="bose-logo" className="logo" />
            </div>
          </Link>

          <ul className="nav-items">
            <li className="each-nav-item">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="each-nav-item">
          
              <Link to={"/products"}>Products</Link>
            </li>
            
            <li className="each-nav-item">
            <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
  );
}

export default Header;
