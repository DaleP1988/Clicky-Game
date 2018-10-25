import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    {props.children}
    <Link className="navbar-brand" to="/">
      Building Memory Card Game
    </Link>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">Click an Image to Begin</li>
        <li className="nav-item">{props.______}</li>
      </ul>
    </div>
  </nav>
);

export default Title;

// need to add the js for the scoreboard
