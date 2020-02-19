import React from 'react'

const FoodItem = (props) => {
  const {food, index} = props;
  return (
    <li key={index}>
      <p>{food.name}</p>
      <p>{food.calories}</p>
      <p>{food.newQuantity}</p>
    </li>
  )
}

export default FoodItem;
