import React from "react";
import { Link } from "react-router-dom";

function Home({ data }) {
  if (data.length) {
    return (
      <section className="container">
        {data.map((brewery) => {
          return (
            <div>
              <div className="card" key={brewery.obdb_id}>
                <Link to={`/details/${brewery.id}`}>
                  <div className="beerco">
                    <h2>{brewery.name} </h2>
                    <h3>Type: {brewery.brewery_type}</h3>
                  </div>
                  <div className="card-title">
                    <h3>
                      {" "}
                      {brewery.city}, {brewery.state}
                    </h3>
                    <h3>{brewery.country}</h3>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    );
  } else {
    return (
      <div>
        <h4 style= {
          {color: "white"}
        }>No City Found...please go back and try again.</h4>
      </div>
    );
  }
}

export default Home;
