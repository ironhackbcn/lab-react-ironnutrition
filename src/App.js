import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './data/foods.json'
import logo from './logo.svg';
import './App.css';
import FoodBoox from './components/foodBox/FoodBoox.js';

class App extends Component {

  state = {
    foods: [...foods],
  }

  listFood = () => {
    const { foods } = this.state;
    return foods.map((foods, index) => {
      return <FoodBoox
        key = {`${foods.name}-${index}`}
        index = {index}
        name = {foods.name}
        calories = {foods.calories}
        image = {foods.image}
        />
    });
  }

  render() {
    return (
      <div className="App">
        {this.listFood()}
      </div>
    );
  }
}

export default App;
