import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './data/foods.json'
import './App.css';
import FoodBox from './components/FoodBox'

class App extends Component {
  state = {
    myFood: foods,
  }
  render() {
    const { myFood } = this.state;

    return (
      <div className="App">
        <h1>ironNutrition</h1>
        <button>Add new foods</button>
        <ul>
          {myFood.map((meals, index) => {
          return (
            <FoodBox 
            key={index} 
            index={index} 
            name={meals.name}
            calories={meals.calories}
            image={meals.image}
            quantity={meals.quantity}
            />
          );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
