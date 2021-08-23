import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Search from './Components/Search';
import Breweries from './Components/Breweries';
import BeerHomePage from './Components/Images/beer-homepage.jpg';

//make Links and Route

function App() {
const [ data, setData ] = useState([])
const initialState = ''
const [searchState, setSearchState] = useState(initialState);
const [searchCity, setSearchCity ] = useState(initialState)
const urlState = `https://api.openbrewerydb.org/breweries?by_state=${searchState}`
const urlCity = `https://api.openbrewerydb.org/breweries?by_city=${searchCity}`

function getUrl() {
  fetch(urlState)
  .then(res => res.json())
  .then(res => {
    setData(res)
  })
}

function getCity() {
  fetch(urlCity)
  .then(res => res.json())
  .then(res => {
    setData(res)
  })
}

const handleSubmit = (event) => {
  event.preventDefault()
  getUrl(searchState)
  setSearchState(initialState)
}

const handleChange = (event) => {
  setSearchState(event.target.value)
}

const handleSubmitCity = (event) => {
  event.preventDefault()
  getCity(searchCity)
  setSearchCity(initialState)
}

const handleChangeCity = (event) => {
  setSearchCity(event.target.value)
}

useEffect(() => {
  getUrl(searchState)
  getCity(searchCity)
},[])

  return (
    <div className="App" style={{ backgroundImage: `url(${BeerHomePage})` }}>
      <div>
        <header>
         
          <Search handleSubmit={handleSubmit} handleChange={handleChange} handleChangeCity={handleChangeCity} handleSubmitCity={handleSubmitCity} />       
      
        </header>
        
        <main>
       
          <Route exact path="/" component={() => <Home data={data} /> } />
         

          <Route exact path="/details/:id" component={routerProps => <Breweries match={routerProps.match.params} data={data} />}  />
        </main>
        </div>

    </div>
  );
}

export default App;
