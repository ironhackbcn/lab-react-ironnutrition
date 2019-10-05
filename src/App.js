import React, { Component } from 'react';
import foods from './data/foods.json'
import './App.css';
import FoodBox from './FoodBox';

class App extends Component {
  state = {
    food: foods,
  }
  render() {
    return (
      <div className="container">
        <h1>IronNutrition</h1>
        {this.state.food.map((food, index) => {
          return (
            <FoodBox name={food.name} image={food.image} calories={food.calories} quantity={food.quantity} />
          )
        })}
      </div>
    );
  }
}

export default App;
