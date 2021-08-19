import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Search from './Components/Search';
import './App.css';
import Breweries from './Components/Breweries';

//search by city and name
//make Links and Route
//Make beweries clickable - onCLick

function App() {
const [ data, setData ] = useState([])

const handleSubmit = () => {
console.log('hello handleSubmit')
}

const handleChange = () => {
  console.log('world handleChange')
}

  useEffect(() => {
    const url = 'https://api.openbrewerydb.org/breweries?by_state=michigan'
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
        <header>
          <Search handleSubmit={handleSubmit} handleChange={handleChange} />       
          <Nav />
        </header>
        <main>
            {/* what you have to set data thru a route, you have to write it as a function to pass the data in. */}
          <Route exact path="/" component={() => <Home data={data} /> } />
          <Route exact path="/details/:id" component={routerProps => <Breweries match={routerProps.match.params} data={data} {...console.log(routerProps)}/>}  />
        </main>
    </div>
  );
}

export default App;
