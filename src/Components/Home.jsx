import React from "react";
import { Route, BrowersRouter as Router, Link } from 'react-router-dom';
import Breweries from "./Breweries";


function Home({ data }) {
  console.log("data in home", data);
  console.log(data.length);
  //guard operator
  //render on screen
  if (data.length) {
    return(
      <section className="container">
      { 
          data.map((brewery) => {
              return (           
              <div>
              
                  <div className="card" key={brewery.obdb_id}>
                  <Link to={`/details/${brewery.id}`}>
                      <div className="beerco"  >
                      
              <h2>{brewery.name} </h2>
                          <h3>Type of Brewery: {brewery.brewery_type}</h3>
                      </div>
                      <div className="card-title">
                          <h3> {brewery.city}, {brewery.state}</h3>
                          <h3>{brewery.country}</h3>
                          
                      </div>    
                      </Link>
                  </div>
              </div>
              )
          }
      )
      }
      </section>
    )
  } else {
    return (
      <div>
        <h4>Loading.....</h4>
      </div>
    );
  }
}

export default Home;
