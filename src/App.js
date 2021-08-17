import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import Nav from './Components/Nav';
import './App.css';

//make search bar
//connect to API call to the search bar
//Render data on screen
//search by city and name
//make Links and Route
//Make beweries clickable - onCLick


function App() {
//empty array
const [ data, setData ] = useState({})

  useEffect(() => {
    const url = 'https://api.openbrewerydb.org/breweries?by_state=ohio'
  fetch(url)
  .then(res => res.json())
  .then(res => {
    // console.log('what is happen?', res)
    setData(res)
    console.log('data info here', data)
  })

},[])

  return (
    <div className="App">
Hello
{data[0].name}
<Home />
<Nav />
    </div>
  );
}

export default App;
