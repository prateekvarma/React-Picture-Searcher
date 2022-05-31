import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID TT6QADtj2aTdPG6vXCJVqn3imK9bA6SQPOrpWi4kd6g",
      },
    });
    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmitData={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
