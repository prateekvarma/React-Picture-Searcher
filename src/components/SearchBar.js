import React from "react";

//Used Class based component, because we need states, & Class based components are easier with States.
class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* Below, we do not add () to onInputChange function, because we do not need to call the function by ourselves. By not using (), we are simply refering to it's instance which will be called by the input field as and when needed. */}
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
