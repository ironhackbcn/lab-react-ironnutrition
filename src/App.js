import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './data/foods.json'
import './App.css';
import FoodBoox from './components/foodBox/FoodBoox.js';
import Search from './components/searchbar/Search.js';
import Form from './components/form/Form';
import FoodList from './components/foodList/FoodList';

class App extends Component {

  state = {
    foods: [...foods],
    searchInput: '',
    foodForTheDay: [],
  }

  addFood = (name, calories, url) => {
    let foodItem = {
      name: name,
      calories: calories,
      image: url,
    };
    let foodsCopy = [...this.state.foods];
    foodsCopy.push(foodItem);

    this.setState({
      foods: foodsCopy,
    })
  }

  searchFood = (searchInput) => {
    let foodsCopy = [...this.state.foods];
    let filteredFood = foodsCopy.map((food) => {
      if (
        food.name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
        && searchInput !== ''
        ){
        food.hidden = false;
      } else {
        food.hidden = true;
      }
      return food;
    });

    this.setState({
      foods: filteredFood,
      searchInput: searchInput,
    });
  };

  addDailyFood = (name, quantity) => {
    let copyFoodForTheDay = [...this.state.foodForTheDay];
    let selectedFood = [...this.state.foods].filter(food => food.name === name);
    selectedFood[0].quantity = quantity;
    if (copyFoodForTheDay.indexOf(selectedFood[0]) === -1){
      this.setState(
        {foodForTheDay: copyFoodForTheDay.concat(selectedFood)}
        );
    } else {
      const itemIndex = copyFoodForTheDay.indexOf(selectedFood[0]);
      copyFoodForTheDay[itemIndex].quantity += selectedFood[0].quantity;
      this.setState({
        foodForTheDay: copyFoodForTheDay,
      });
    }
  };

  deleteDailyFood = (name) => {
    const copyFoodForTheDay = [...this.state.foodForTheDay];
    const itemSelected = [...this.state.foodForTheDay].filter(food => food.name === name);
    const itemSelectedIndex = copyFoodForTheDay.map(function(food) {return food.name; }).indexOf(itemSelected[0].name);
    if (itemSelected[0].quantity > 1) {
      itemSelected[0].quantity -= 1;
      copyFoodForTheDay.splice(itemSelectedIndex, 1, itemSelected[0]);
      this.setState(
        {foodForTheDay: copyFoodForTheDay}
      );
    } else {
      this.setState(
        {foodForTheDay: [...this.state.foodForTheDay].filter(food => food.name !== name)}
      );
    }

  }

  listFood = () => {
    let { foods, searchInput } = this.state;

    if (searchInput !== ''){
      foods = foods.filter(food => food.hidden === false)
    };

    return foods.map((food, index) => {
      return <FoodBoox
        key={`${food.name}-${index}`}
        index={index}
        name={food.name}
        calories={food.calories}
        image={food.image}
        quantity={this.defaultValue}
        referenceDailyFood={this.addDailyFood}
        />
    });
  }

  render() {
    return (
      <div className="App container section">
        <h1 className="title is-1">IronNutrition</h1>
        <div className="columns is-gapless">
          <div className="column is-four-fifths">
            <Search
              referenceSearchFood={this.searchFood}
            />
          </div>
            <Form
              referenceAddFood={this.addFood}
            />
        </div>
        <div className="columns">
          <div className="column is-three-fifths">
            {this.listFood()}
          </div>
          <div className="column">
            <FoodList 
              foodForTheDay={this.state.foodForTheDay}
              referenceDeleteDailyFood={this.deleteDailyFood}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
