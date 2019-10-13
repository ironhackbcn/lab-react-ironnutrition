import React, { Component } from 'react';

class Calculator extends Component {

  render() {
    return (
      <li>{this.props.quantity} {this.props.name} => ({parseInt(this.props.quantity) * parseInt(this.props.calories)} calories)</li>
    );
  }
}

export default Calculator;