import React, { Component } from "react";

class Button extends Component {
  render() {
    const { children, onClick } = this.props;
    return (
      <div>
        <button onClick={onClick}> {children}</button>
      </div>
    );
  }
}

export default Button;
