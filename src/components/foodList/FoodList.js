import React, { Component } from 'react'
import ListRow from '../listrow/ListRow';

class FoodList extends Component {
  
  listFood = () => {
    const foodsForTheDay = this.props.foodForTheDay;
    return foodsForTheDay.map((food, index) => {
      return <ListRow 
        key={`${food.name}-${index}`}
        index={index}
        quantity={food.quantity}
        name={food.name}
        calories={food.calories}
        referenceDeleteDailyFood={this.props.referenceDeleteDailyFood}
        />
    })
  }

  getTotalCalories = () => {
    const foodsForTheDay = this.props.foodForTheDay;
    if (foodsForTheDay.length > 0){
      return foodsForTheDay
        .reduce((acc, curr) => {
          return acc + (curr.calories * curr.quantity);
        }, 0);
    }
    return 0;
  }

  render() {
    return (
      <div className="dailyFood">
        <h1 className="title">Today's foods</h1>
        <ul>
          {this.listFood()}
        </ul>
        <p className="title is-4">Total: <span>{this.getTotalCalories()}</span> cal</p>
      </div>
    )
  }
}

export default FoodList;
