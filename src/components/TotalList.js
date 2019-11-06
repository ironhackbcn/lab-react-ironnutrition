import React from 'react'
import FoodItem from './FoodItem.js';


const TotalList = (props) => {
  const {food,totalCalories} = props
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

export default TotalList;