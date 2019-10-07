import React, { Component } from 'react';
import '../css/App.css';
import foods from '../data/foods.json';
import FoodBox from '../components/FoodBox';
import TodayFoods from '../components/TodayFoods';

class App extends Component {
  state = {
    myFoods: foods,
    myTodayFoods: [],
  };

  handleSearch = (event) => {
    const MyNewFoods = [...foods].filter((food) => {
      return food.name
        .toLowerCase()
        .startsWith(event.target.value.toLowerCase());
    });

    this.setState({ myFoods: MyNewFoods });
  };

  addFood = (food) => {
    const { index, quantity, name } = food;
    const myNewTodayFoods = [...this.state.myTodayFoods];

    const foodIndex = myNewTodayFoods.findIndex(
      (foodToSearch) => foodToSearch.name === name,
    );

    if (foodIndex > -1) {
      myNewTodayFoods[foodIndex].quantity += quantity;
    } else {
      const newFood = this.state.myFoods[index];
      newFood.quantity = quantity;
      myNewTodayFoods.push(newFood);
    }

    this.setState({ myTodayFoods: myNewTodayFoods });
  };

  deleteFood = (index) => {
    const myNewTodayFoods = [...this.state.myTodayFoods];
    myNewTodayFoods.splice(index, 1);

    this.setState({ myTodayFoods: myNewTodayFoods });
  };

  render() {
    const { myFoods, myTodayFoods } = this.state;

    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <div>
          <input
            className="input search-bar"
            onChange={this.handleSearch}
            placeholder="Search"
          />
        </div>
        <div className="columns">
          <div className="column">
            {myFoods.map((food, index) => {
              return (
                <FoodBox
                  key={`food ${index}`}
                  name={food.name}
                  calories={food.calories}
                  image={food.image}
                  quantity={1}
                  search={this.handleSearch}
                  addFood={this.addFood}
                  index={index}
                />
              );
            })}
          </div>
          <TodayFoods foods={myTodayFoods} handleDelete={this.deleteFood} />
        </div>
      </div>
    );
  }
}

export default App;
