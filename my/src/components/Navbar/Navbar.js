import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav>
    <ul>
      <li className="brand animated lightSpeedIn">
        <h4 id="bldg" href="/clicky-game/">
          {props.title}
        </h4>
      </li>

      <li id="rw">{props.rightWrong}</li>

      <li id="cur-sco">Current Score: {props.score}</li>

      <li id="top-sco">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Navbar;
