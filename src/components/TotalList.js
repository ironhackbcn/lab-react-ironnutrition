import React, { Component } from 'react'
import FoodItem from './FoodItem.js';

class TotalList extends Component {
  render() {
    const {food,totalCalories} = this.props
    return (
      <div className="food-list">
        <h1>Today's foods</h1>
        <ul>
          <li>
            <p>Food</p>
            <p>Calories</p>
            <p>Quantity</p>
          </li>
          {food.map( (food, index) => {
            return (
              <FoodItem food={food} key={index} index={index} />
            )
          })} 
        </ul>
        <p>Total calories: {totalCalories}</p>
      </div>
    )
  }
}

export default TotalList;