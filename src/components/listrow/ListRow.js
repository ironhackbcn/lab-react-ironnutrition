import React, { Component } from 'react'

class ListRow extends Component {

  getCalories = () => this.props.calories * this.props.quantity;

  render() {
    return (
      <li>
        <span>{this.props.quantity} </span>
        <span>{this.props.name} = </span>
        <span>{this.getCalories()} cal</span>
      </li>
    )
  }
}

export default ListRow;
