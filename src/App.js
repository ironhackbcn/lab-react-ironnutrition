import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './data/foods.json';
import FoodBox from './components/FoodBox';
import AddNewFood from './components/AddNewFood';
import Search from './components/Search';

class App extends Component {
  state = {
    foods: [...foods],
    todaysFood: []
  }

  handleClick = (newFoodArray) => {
    const { foods } = this.state;
    const newFood = [...foods, newFoodArray];
    console.log(newFood);
    this.setState({
      foods: newFood,
    })
  }

  searchFunction = (text) => {
    const filteredArray = [];
    this.state.foods.forEach((food) => {
      if (food.name.includes(text) == true) {
        filteredArray.push(food);
      }
    });
    this.setState({
      foods: filteredArray,
    })
  };

  findFoodByName = (name) => {
    const selectedProducts = [];
    this.state.foods.forEach((food) => {
      if (food.name.includes(name) == true) {
        selectedProducts.push(food);
      }
    });
    this.setState({
      todaysFood: selectedProducts,
    })
  }


  render() {
    return (
      <div className="App">
        <Search searchProp={this.searchFunction} />
        <div className="columns">
          <div className="column">
            {this.state.foods.map((food, index) => {
              return <FoodBox key={index} food={food.name} calories={food.calories} image={food.image} findByName={this.findFoodByName} />
            })}
          </div>
          <div className="column">
            <h1>Today's food</h1>
            <ul>
              <li>
                {this.state.todaysFood.map((food) => {
                  return food.name
                })}
              </li>
            </ul>
          </div>
        </div>

        <AddNewFood addToList={this.handleClick} />


      </div>

    )
  }
}

export default App;
