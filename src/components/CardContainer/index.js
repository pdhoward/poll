import React from "react";
import Card from "../Card";
import "./style.css";

function CardContainer({ title, image, profileUrl, handleBtnClick, handleRandom }) {
  return (
    <div className="jumbotron card-container">
      <Card
        title={title}
        image={image}
        profileUrl={profileUrl}
        handleBtnClick={handleBtnClick}
      />
      <button type="button" class="btn btn-primary" onClick={handleRandom} >Random Dev</button>
    </div>
  );
}

export default CardContainer;
