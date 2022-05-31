import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID ACCESS_KEY",
        },
      })
      .then((response) => {
        console.log(response);
      });
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
