import React, { Component } from 'react';
import foods from './data/foods.json';
import FoodBox from './Components/FoodBox.js';
import AddFood from './Components/AddFood';
import Search from './Components/Search';
import './App.css';

class App extends Component {
  state = {
    foods: foods,
    filteredFoods: foods,
    showForm: false,
    totalCalories: 0,
    chosenFoods: []
  }

  showForm = ()=> {
    this.setState({
      showForm: true,
    });
  }

  hideForm = () => {
    this.setState({
      showForm: false,
    });
  }

  addFood = (foodAdded) => {
    this.setState({
      foods: [...this.state.foods, foodAdded],
    });
    this.hideForm();
  }

  findFood = (query) => {
    const regex = new RegExp(query, 'i');
    this.setState((state) => (
      { filteredFoods: state.foods.filter(v => regex.test(v.name)) }
    ))
  }

  addToCart = (quantity, name, calories) => {
    this.setState((state) => {
      let chosenFoods = state.chosenFoods
      const existingChosenFood = state.chosenFoods.find(food => food.name === name)
      if (existingChosenFood) {
        existingChosenFood.quantity += quantity
      } else {
        chosenFoods = [...state.chosenFoods, {quantity, name, calories} ];
      }
      const totalCalories = state.totalCalories + quantity * calories
      return { chosenFoods, totalCalories };
    })
  }

  render() {
    return (
      
      <div className="App">
        <div>
          <Search searched={this.findFood}/><br/>
          <button onClick={this.showForm}>Add food</button>
          {this.state.showForm && <AddFood addedFood={this.addFood}/>
          }
          {this.state.filteredFoods.map( (food, index) => {
            return <FoodBox 
            key={index}
            name={food.name}
            calories={food.calories}
            image={food.image}
            addToCart={this.addToCart}/>
          })}
        </div>
        <div>
          <h2>Today's foods</h2>
          <ul>
            {this.state.chosenFoods.map( (food, index) => {
              return <li>{food.quantity} {food.name} = {food.quantity*food.calories} cal</li>
            })}
          </ul>
          <p>Total {this.state.totalCalories} cal</p>  
        </div> 
      </div>
    );
  }
}

export default App;
