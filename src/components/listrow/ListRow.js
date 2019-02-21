import React, { Component } from 'react'

class ListRow extends Component {

  getCalories = () => this.props.calories * this.props.quantity;

  handleDelete = () => {
    this.props.referenceDeleteDailyFood(this.props.name);
  };

  render() {
    return (
      <li className="subtitle">
        <span>{this.props.quantity} </span>
        <span>{this.props.name} = </span>
        <span>{this.getCalories()} cal</span>
        <button onClick={this.handleDelete} className="delete"></button>
      </li>
    )
  }
}

export default ListRow;
