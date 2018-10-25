import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
  <div
    className="jumbotron"
    style={{ backgroundColor: "whitesmoke important!" }}
  >
    {props.children}
  </div>

  // <h1 className="jumbotronTitle">{props.children}</h1>
  //                             <h4 className="jumbotronIns"> Welcome to the Building Memory Game! </h4>
  // <h5 className ="jumbotronP"> Click a building memory card image below. See if you can click through the entire collection without clicking on a card more than once. If you click on one card more than once you lose points!</h5>
);

export default Jumbotron;

// <div class="jumbotron">
//   <h1 class="display-4">The Building Memory Game!</h1>
//   <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
//   <hr class="my-4">
//   <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
//   <p class="lead">
//     <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
//   </p>
// </div>
