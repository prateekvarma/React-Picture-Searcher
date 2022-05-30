import React from "react";

//Used Class based component, because we need states, & Class based components are easier with States.
class SearchBar extends React.Component {
  state = { term: "" };

  //Below, if you use a normal function declaration to access the state value, you will get the following error :
  //** Uncaught TypeError: Cannot read properties of undefined (reading 'state') **
  //Solution 1 : Simply use an arrow function, Solution 2 : Use a binder inside a constructor like, this.drive = this.drive.bind(this)
  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
