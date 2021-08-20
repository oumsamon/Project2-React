import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Search from './Components/Search';
import './App.css';
import Breweries from './Components/Breweries';
import BeerHomePage from './Components/Images/beer-homepage.jpg';

//search by city and name
//make Links and Route
//Make beweries clickable - onCLick

function App() {
const [ data, setData ] = useState([])
const searchByState = {
  api: 'https://api.openbrewerydb.org/breweries?by_state=',
  state: 'michigan'
}

const url = `${searchByState.api}${searchByState.state}`
const initialState = searchByState

const [searchState, setSearchState] = useState(initialState);

const changeStateSearch = (index, changeStateTo) => {
  const newState = [...searchState];
  if (changeStateTo === 'michigan') {
    // searchByState.state ==="index";
  } else {
    searchByState.state = 'michigan'
  }
} 

const handleSubmit = () => {
console.log('hello handleSubmit')
}

const handleChange = () => {
  console.log('world handleChange')
}

  useEffect(() => {
  fetch(url)
  .then(res => res.json())
  .then(res => {
    // console.log('what is happen?', res)
    setData(res)
    // console.log('data info here', data)
  })
},[])

  return (
    <div className="App">
      {/* <img className='beerHomepage' src={BeerHomePage} alt='Welcome to Beer N Brewery'/> */}
      <div className='backgroundImage' style={{ backgroundImage: `url(${BeerHomePage})` }}>
        <header>
          <Search handleSubmit={handleSubmit} handleChange={handleChange} changeStateSearch={changeStateSearch} />       
          <Nav />
        </header>
        <main>
            {/* what you have to set data thru a route, you have to write it as a function to pass the data in. */}
          <Route exact path="/" component={() => <Home data={data} /> } />
          <Route exact path="/details/:id" component={routerProps => <Breweries match={routerProps.match.params} data={data} {...console.log(routerProps)}/>}  />
        </main>
        </div>
    </div>
  );
}

export default App;
