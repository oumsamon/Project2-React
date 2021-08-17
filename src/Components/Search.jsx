import React from 'react';

function Search({ handleSubmit, handleChange}) {
    return (
        <div>
            <form id="item-review" 
onSubmit={handleSubmit}>

  <label For="searchState">Select State:</label>
  <select id="searchState">
    <option value="ohio">Ohio</option>
    <option value="indiana">Indiana</option>
    <option value="michigan">Michigan</option>
  </select>

  <label For="breweryName">Search by Brewery</label>
  <input type="text" id="breweryName" />

  <label For="cityName">Search by City</label>
  <input type="text" id="cityName" />

  <button type="submit">Send</button>

</form>
        </div>
    );
}

export default Search;