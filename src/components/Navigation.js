import React from "react";
import Logo from "../images/logo.png";
import "../css/App.scss";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div>
      <nav>
        <div className="left">
          <Link to="/">
            <img src={Logo} alt="logo img"></img>
          </Link>
        </div>
        <div className="right">
          <Link to="/about">About</Link>
        </div>
      </nav>
    </div>
  );
}
