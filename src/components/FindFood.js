import React, { Component } from "react";

class FindFood extends Component {
  /* This function search a food  */
  state = {
    visible: true
  };

  hanleOnOffJumbotron= () =>  {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  }
  
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

export default FindFood;
