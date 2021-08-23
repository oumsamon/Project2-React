import React from 'react';

function Search({ handleSubmit, handleChange, handleChangeCity, handleSubmitCity }) {
    return (
        <div className='searchBar'>
            <form id="item-review" onSubmit={handleSubmit}>

  <label For="searchState"><h4>Select State:</h4></label>

  <select onChange={handleChange} id="searchState">
    <option value="">Select a State</option>
    <option value="alabama">Alabama</option>
    <option value="alaska">Alaska</option>
    <option value="arizona">Arizona</option>
    <option value="arkansas">Arkansas</option>
    <option value="california">California</option>
    <option value="colorado">Colorado</option>
    <option value="connecticut">Connecticut</option>
    <option value="delaware">Delaware</option>
    <option value="florida">Florida</option>
    <option value="georgia">Georgia</option>
    <option value="hawaii">Hawaii</option>
    <option value="idaho">Idaho</option>
    <option value="illinois">Illinois</option>
    <option value="indiana">Indiana</option>
    <option value="iowa">Iowa</option>
    <option value="kansas">Kansas</option>
    <option value="kentucky">Kentucky</option>
    <option value="louisiana">Louisiana</option>
    <option value="maine">Maine</option>
    <option value="maryland">Maryland</option>
    <option value="michigan">Michigan</option>
    <option value="massachusetts">Massachusetts</option>
    <option value="minnesota">Minnesota</option>
    <option value="mississippi">Mississippi</option>
    <option value="missouri">Missouri</option>
    <option value="montana">Montana</option>
    <option value="nebraska">Nebraska</option>
    <option value="nevada">Nevada</option>
    <option value="new_hampshire">New Hampshire</option>
    <option value="new_jersey">New Jersey</option>
    <option value="new_mexico">New Mexico</option>
    <option value="new_york">New York</option>
    <option value="north_carolina">North Carolina</option>
    <option value="north_dakota">North Dakota</option>
    <option value="ohio">Ohio</option>
    <option value="oklahoma">Oklahoma</option>
    <option value="oregon">Oregon</option>
    <option value="pennsylvania">Pennsylvania</option>
    <option value="rhode_island">Rhode Island</option>
    <option value="south_carolina">South Carolina</option>
    <option value="south_dakota">South Dakota</option>
    <option value="tennessee">Tennessee</option>
    <option value="texas">Texas</option>
    <option value="utah">Utah</option>
    <option value="vermont">Vermont</option>
    <option value="virginia">Virginia</option>
    <option value="washington">Washington</option>
    <option value="west_virginia">West Virginia</option>
    <option value="wisconsin">Wisconsin</option>
    <option value="wyoming">Wyoming</option>
    </select>
  <input onClick={handleSubmit} type="submit" value="Search by State" />
</form>

<form onSubmit={handleSubmitCity}>
  <label For="cityName"><h4>Search by City</h4></label>
  <input type="text" id="cityName" onSubmit={handleSubmitCity} onChange={handleChangeCity} />

  <input onSubmit={handleSubmitCity} type="submit" value="Search by City" />

</form>
        </div>
    );
}

export default Search;