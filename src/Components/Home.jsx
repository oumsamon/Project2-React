import React from "react";

function Home({ data }) {
  console.log("data in home", data);
  console.log(data.length);
  //guard operator
  //render on screen
  if (data.length) {
    return(
        <div>
    <div>
      <div>{data[3].name}</div>
    </div>

{data[3].street}, {data[3].city}, {data[3].state}
<div>
    {data[3].website_url}
</div>

    </div>
    )
  } else {
    return (
      <div>
        <h4>Loading.....</h4>
      </div>
    );
  }
}

export default Home;
