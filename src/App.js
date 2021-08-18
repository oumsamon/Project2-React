import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Search from './Components/Search';
import './App.css';
import Breweries from './Components/Breweries';

//make search bar
//connect to API call to the search bar
//Render data on screen - task completed with {}
//search by city and name
//make Links and Route
//Make beweries clickable - onCLick


function App() {
//empty array
const [ data, setData ] = useState({})

const handleSubmit = () => {
console.log('hello handleSubmit')
}

const handleChange = () => {
  console.log('world handleChange')
}


  useEffect(() => {
    const url = 'https://api.openbrewerydb.org/breweries?by_state=ohio'
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

<Search handleSubmit={handleSubmit} handleChange={handleChange} />

<Home data={data} />

<Nav />

<Breweries />

    </div>
  );
}

export default App;
