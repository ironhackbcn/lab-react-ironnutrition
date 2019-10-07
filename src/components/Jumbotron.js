import React, { Component } from "react";

class Jumbotron extends Component {
  render() {
    const { valueForm, myFunction, visible } = this.props;
    return visible ? (
      <div className="App-Input">
        <label>Search</label>
        <div className="App-Input">
          <input
            type="text"
            onChange={event => {
              myFunction(event.target.value);
            }}
            value={valueForm}
          ></input>
        </div>
      </div>
    ) : null;
  }
}

export default Jumbotron;
