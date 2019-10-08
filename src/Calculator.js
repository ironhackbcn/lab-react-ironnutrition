import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {

  render() {
    return (
      <li>{this.props.quantity} {this.props.name} => ({parseInt(this.props.quantity) * parseInt(this.props.calories)})</li>
    );
  }
}

export default Calculator;