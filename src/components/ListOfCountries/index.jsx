import React from "react";
import CountryCard from "../CountryCard";

const ListOfCountries = ({ list }) => {
  return (
    <div className="list-of-countries">
      {list.map((card) => (
        <CountryCard card={card} key={card.name} />
      ))}
    </div>
  );
};

export default ListOfCountries;
