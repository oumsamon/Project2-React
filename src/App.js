import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Search from './Components/Search';
import './App.css';
import Breweries from './Components/Breweries';
import BeerHomePage from './Components/Images/beer-homepage.jpg';

//make Links and Route

function App() {
const [ data, setData ] = useState([])
const initialState = ''
const [searchState, setSearchState] = useState(initialState);
const url = `https://api.openbrewerydb.org/breweries?by_state=${searchState}`

const handleSubmit = (event) => {
  event.preventDefault()
  getUrl(searchState)
  setSearchState(initialState)
console.log('hello handleSubmit', searchState)
}

const handleChange = (event) => {
  setSearchState(event.target.value)
  console.log('handleChange', searchState)
}
console.log(searchState, 'outside the function')

console.log(url, "url")

function getUrl() {
  fetch(url)
  .then(res => res.json())
  .then(res => {
    console.log('what is happen?', res)
    setData(res)
    console.log('data info here', data)
  })
}

useEffect(() => {
  getUrl(searchState)
},[])

//  console.log(data, 'data in useEffect')

  return (
    <div className="App">
      {/* <img className='beerHomepage' src={BeerHomePage} alt='Welcome to Beer N Brewery'/> */}
      <div className='backgroundImage' style={{ backgroundImage: `url(${BeerHomePage})` }}>
        <header>
          <Search handleSubmit={handleSubmit} handleChange={handleChange} />       
      
        </header>
        <main>
            {/* what you have to set data thru a route, you have to write it as a function to pass the data in. */}
          <Route exact path="/" component={() => <Home data={data} /> } />

          <Route exact path="/details/:id" component={routerProps => <Breweries match={routerProps.match.params} data={data} />}  />
        </main>
        </div>
    </div>
  );
}

export default App;
