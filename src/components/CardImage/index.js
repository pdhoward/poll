import React from "react";

function CardImg({ image }) {
  return (
    <div>
      <img className="card-img" src={image} width="200" height="400" alt="user thumbnail" />
      {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
  );
}

export default CardImg;