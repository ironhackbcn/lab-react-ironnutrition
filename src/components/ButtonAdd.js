import React, { Component } from "react";

class ButtonAdd extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <button className="button is-primary" onClick={this.props.action}>
        Add a food
      </button>
    );
  }
}

export default ButtonAdd;
