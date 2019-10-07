import React, { Component } from "react";

class Button extends Component {

  render() {
    const { children, myFunction } = this.props;
    return (
        <button onClick={myFunction}> {children}</button>
    );
  }
}

export default Button;