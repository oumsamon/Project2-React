import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Breweries(props) {
    
    const [breweryState, setBreweryState] = useState([])

    useEffect(() => {
        const url = 'https://api.openbrewerydb.org/breweries?by_state=michigan'
      fetch(url)
      .then(res => res.json())
      .then(res => {
        // console.log('what is happen?', res)
        setBreweryState(res)
        console.log('Brewery responds here', res)
      })
      .catch(console.error);
    
    },[])

    return (
        <section className="container">
        { 
            breweryState.map((breweryInArry) => {
                return (           
                <Link to={`${breweryInArry.name}`}>
                    <div className="card" key={breweryInArry.obdb_id}>
                        <div className="beerco"  >
                            <h2>{breweryInArry.name} </h2>
                            <h3>Type of Brewery: {breweryInArry.brewery_type}</h3>
                        </div>
                        <div className="card-title">
                            <h3>{breweryInArry.street}</h3>
                            <h3> {breweryInArry.city}, {
                            breweryInArry.state}</h3>
                            <h3>{breweryInArry.country}</h3>
                           
                        </div>    
                    </div>
                    </Link>
                )
            }
        )
        }
        </section>
        );
}

export default Breweries;