import React from "react";
import "./Footer.css";

const Footer = props => (
  <div className="footer" style={{ backgroundColor: "gray ! important" }}>
    {props.children}
  </div>

  // <h1 className="jumbotronTitle">{props.children}</h1>
  //                             <h4 className="jumbotronIns"> Welcome to the Building Memory Game! </h4>
  // <h5 className ="jumbotronP"> Click a building memory card image below. See if you can click through the entire collection without clicking on a card more than once. If you click on one card more than once you lose points!</h5>
);

export default Footer;
