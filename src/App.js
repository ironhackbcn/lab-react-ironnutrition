import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './data/foods.json'
// import logo from './logo.svg';
import './App.css';
import FoodBoox from './components/foodBox/FoodBoox.js';
import Search from './components/searchbar/Search.js';
import Form from './components/form/Form';

class App extends Component {

  state = {
    foods: [...foods],
  }

  defaultValue = 1;

  addFood = (name, calories, url) => {
    let foodItem = {
      name: name,
      calories: calories,
      image: url,
    };

    let foodsCopy = [...foods]
    foodsCopy.push(foodItem);

    this.setState({
      foods: foodsCopy,
    })
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
        quantity = {this.defaultValue}
        />
    });
  }

  render() {
    return (
      <div className="App">
        <Search />
        <Form referenceAddFood={this.addFood} />
        {this.listFood()}
      </div>
    );
  }
}

export default App;
