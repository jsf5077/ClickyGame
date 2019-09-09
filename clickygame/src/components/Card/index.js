import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card"
      onClick={() => {
        props.shuffle(props.id);
        props.pokePic(props.name);
      }}
    >
      <div className="img-container pt-4">
        <img src={props.image} alt={props.name} />
      </div>
    </div>
  );
}

export default Card;
