import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <ul className="nav sticky-top nav-pills nav-fill">
      <li className="nav-item">
        <h3 className="nav-link" href="#">
          PokeCatch
        </h3>
      </li>
      <li className="nav-item">
        <h3 className="nav-link" href="#">
          Click a Pokemon to catch it
        </h3>
      </li>
      <li className="nav-item">
        <h3 className="nav-link" href="#">
          Score: {props.score} | Top Score: {props.topScore}
        </h3>
      </li>
    </ul>
  );
}

export default Navbar;
