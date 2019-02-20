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
      <div className="App">
        <Search referenceSearchFood={this.searchFood} />
        <Form referenceAddFood={this.addFood} />
        {this.listFood()}
        <FoodList foodForTheDay={this.state.foodForTheDay} />
      </div>
    );
  }
}

export default App;
