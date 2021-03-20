/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import '../css/style.min.css';
// import "./pages/app.css";

export function Footer() {
  return (
    <footer>
      <div>Copyright 2021 </div>
      <div>
        Powered by{" "}
        <a href="https://grohit.com" target="_blank" className="link">
          G Rohit
        </a>
      </div>
    </footer>
  );
}

export default Footer;
