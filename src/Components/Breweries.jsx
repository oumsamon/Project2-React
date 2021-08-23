import React from "react";
import Search from "./Search";

function Breweries({ match, data }) {
  const breweryState = data.filter((breweryName) => {
    return breweryName.id === parseInt(match.id);
  });

  if (breweryState) {
    return (
      <section className="details-container">
        <div className="card">
          <div className="beerco">
            <h2>{breweryState[0].name} </h2>
            <h3>Type of Brewery: {breweryState[0].brewery_type}</h3>
          </div>
          <div className="card-title">
            <h3>{breweryState[0].street}</h3>
            <h3>
              {" "}
              {breweryState[0].city}, {breweryState[0].state} {breweryState[0].postal_code}
            </h3>
            <h3>{breweryState[0].country}</h3>
            <h2>{breweryState[0].website_url} </h2>
            <a href={breweryState[0].website_url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        </div>
      </section>
    );
  } else {
    return <h1>Locating Brewery....</h1>;
  }
}
export default Breweries;
