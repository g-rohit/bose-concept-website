/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./app.css";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer>
      <div>Copyright 2021 </div>
      <div>
        Powered by{" "}
        <a href="https://grohit.com" target="_blank">
          G Rohit
        </a>
      </div>
    </footer>
  );
}

export default Footer;
