import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    const { className, children, myProp } = this.props;
    return (
      <button onClick={myProp} className={className}>
        {children}
      </button>
    );
  }
}

export default Button;
