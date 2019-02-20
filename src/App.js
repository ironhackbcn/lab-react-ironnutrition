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
    foodForTheDay: [],
  }

  defaultValue = 1;

  addFood = (name, calories, url) => {
    let foodItem = {
      name: name,
      calories: calories,
      image: url,
    };
    let foodsCopy = [...foods];
    foodsCopy.push(foodItem);

    this.setState({
      foods: foodsCopy,
    })
  }

  searchFood = (searchInput) => {
    let foodsCopy = [...foods];
    let filteredFood = foodsCopy.filter((food) => {
      return food.name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1;
    });

    this.setState({
      foods: filteredFood,
    });
  };

  addDailyFood = (name, quantity) => {
    let CopyFoodForTheDay = [...this.state.foodForTheDay];
    let selectedFood = [...this.state.foods].filter(food => food.name === name);
    selectedFood[0].quantity = quantity;
    this.setState(
      {foodForTheDay: CopyFoodForTheDay.concat(selectedFood)}
      )
  };



  listFood = () => {
    const { foods } = this.state;
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
