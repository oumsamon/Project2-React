import React from 'react';

function Search({ handleSubmit, handleChange }) {
    return (
        <div className='searchBar'>
            <form id="item-review" onSubmit={handleSubmit}>

  <label For="searchState"><h4>Select State:</h4></label>

  <select onChange={handleChange} id="searchState">
  <option  value="michigan">Michigan</option>
    <option value="ohio">Ohio</option>
    <option value="indiana">Indiana</option>
    </select>
  <button onClick={handleSubmit} type="submit">Send</button>

  <label For="cityName"><h4>Search by City</h4></label>
  <input type="text" id="cityName" onChange={handleChange} />

  <button onClick={handleSubmit} type="submit">Send</button>

</form>
        </div>
    );
}

export default Search;