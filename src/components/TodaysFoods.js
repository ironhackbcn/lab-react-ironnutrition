import React, { Component } from 'react';
import TodaysItem from './TodaysItem';

class TodaysFoods extends Component {
  calcTotalCalories = foods => {
    return foods.reduce((sum, food) => {
      return sum + food.calories;
    }, 0);
  };

  render() {
    const { todaysFoods, removeItem } = this.props;
    return (
      <div>
        <h2>Today's foods</h2>
        <ul>
          {todaysFoods.map((food, index) => (
            <TodaysItem
              key={`f-${index}`}
              food={food}
              index={index}
              totalCalories={this.calcTotalCalories}
              removeItem={removeItem}
            ></TodaysItem>
          ))}
        </ul>
        <p>
          <strong>Total: {this.calcTotalCalories(todaysFoods)} cal</strong>
        </p>
      </div>
    );
  }
}

export default TodaysFoods;
