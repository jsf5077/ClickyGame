import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card"
      onClick={() => {
        props.shuffle(props.id);
      }}
    >
      <div className="img-container">
        <img src={props.image} alt={props.name} />
      </div>
    </div>
  );
}

export default Card;
