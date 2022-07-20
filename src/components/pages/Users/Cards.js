import React from "react";
import "./cards.css";

const Cards = ({ name, email, id }) => {
  return (
    <div className="cardProfile">
      <img alt="" src={`https://robohash.org/${id}?set=set4`} />
      <div className="cardDetails">
        <h2> {name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Cards;
