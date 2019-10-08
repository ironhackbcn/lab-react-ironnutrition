import React, { Component } from "react";

class FindFood extends Component {
  /* This function search a food  */
  state = {
    visible: true
  };

  hanleOnOffJumbotron = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  };

  render() {
    const { valueForm, myFunction} = this.props;
    return (
      <div className="App-Input">
        
        <div className="App-Input">
        <label>Search</label>
          <input
            type="text"
            onChange={event => {
              myFunction(event.target.value);
            }}
            value={valueForm}
          ></input>
        </div>
      </div>
    );
  }
}

export default FindFood;
