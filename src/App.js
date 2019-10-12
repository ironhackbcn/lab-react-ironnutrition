import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './data/foods.json';
import SearchBar from './components/SearchBar';
import AddFood from './components/AddFood';
import TodayFood from './components/TodayFood';

class App extends Component {
  state = {
    foods
  };

  addFood = food => {
    const newFood = [...this.state.foods, food];
    console.log(newFood);
    this.setState({ foods: newFood });
  };

  filteredFood = food => {
    this.setState({ foods: food });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">Iron Nutrition</h1>
          <div className="columns">
            <div className="column">
              <SearchBar
                foods={this.state.foods}
                filteredFood={this.filteredFood}
              />
              <AddFood addFood={this.addFood} />
              {this.state.foods.map((food, index) => {
                return <FoodBox key={index} {...food} />;
              })}
              {/* <FoodBox filteredFood={this.filteredFood} /> */}
            </div>
            <TodayFood />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
