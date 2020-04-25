import React from "react";
import "./styles.scss";

const CountryCard = ({ card }) => {
  return <div className="country-card">{JSON.stringify(card)}</div>;
};

export default CountryCard;
