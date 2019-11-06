import React, { Component } from 'react'

class FoodItem extends Component {
  render() {
    const {food, index} = this.props;
    return (
      <li key={index}>
        <p>{food.name}</p>
        <p>{food.calories}</p>
        <p>{food.newQuantity}</p>
      </li>
    )
  }
}

export default FoodItem;
