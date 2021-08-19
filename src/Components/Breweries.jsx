import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


    const breweryURL = 'https://api.openbrewerydb.org/breweries/'
    
    function Breweries ({match, data}) {

        // const [ breweryState, setBreweryState ] = useState()
    // console.log("breweryState in breweries.jsx", breweryState)
    // seEffect(() => {
    //     const url = `https://api.openbrewerydb.org/breweries/${match.params.id}`
    //   fetch(url)
    //   .then(res => res.json())
    //   .then(res => {
    //     // console.log('what is happen?', res)
    //     setBreweryState(res)u
    //     console.log('Brewery by ID res here', res)
    //     console.log('brewwryState', )
    //   })
      
    //   .catch(console.error);
    
    // },[match.params.id]);

     const breweryState = data.filter(breweryName => {
         return(breweryName.id === parseInt(match.id)) 
        })
//const breweryState = data.filter(breweryNAme => breweryName.id === parseInt(match.id))
//it remove the RETURN and the extra bracket - since its returning only a true and false value which give it an ability for only 1 line.

     console.log(data[4].id, match.id, parseInt(match.id))



    if (breweryState) {
        console.log('brewwryState', breweryState)

    return (
        <section className="details-container">
                               
                    <div className="card" >
                        <div className="beerco"  >
                            <h2>{breweryState[0].name} </h2>
                            <h3>Type of Brewery: {breweryState[0].brewery_type}</h3>
                        </div>
                        <div className="card-title">
                            <h3>{breweryState[0].street}</h3>
                            <h3> {breweryState[0].city}, {
                            breweryState[0].state}</h3>
                            <h3>{breweryState[0].country}</h3>
                            <a 
                    href={breweryState[0].webpage_url}
                    target="_blank"
                    rel="noopener noreferrer">
                        Read More
                    </a>
                        </div>    
                    </div>
                    </section>
                )
        } else {
    return (<h1>Locating Brewery....</h1>)
    }
}
export default Breweries;