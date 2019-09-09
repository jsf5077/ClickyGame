import React from "react";
import "./style.css"

function Jumbotron() {
  return (
    <div className="wrap">
      <div className="jumbotron text-center">
        <h1><strong>PokeCatch!</strong></h1>
        <p className="lead" id="subtitle">
         Try to catch all pokemon in one shot! Don't catch the same pokemon twice or you lose!
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
