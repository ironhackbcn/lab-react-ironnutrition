import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './data/foods.json';
//mport logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm.js';
import Search from './components/Search';

class App extends Component {
  state = {
    food: foods,
    showForm: false,
    searched: '',
    foodList: []
  };

  renderForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  addFood = (newFood) => {
    const foodsCopy = [...this.state.food];
    foodsCopy.push(newFood);

    this.setState({ food: foodsCopy });
  };

  handleSearch = (searchedVal) => {
    this.setState({ searched: searchedVal });
  };

  renderFood = (foods, searchval) => {
    const filteredArray = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchval.toLowerCase());
    });
    return filteredArray.map((food, index) => (
      <FoodBox key={index} food={food} handleAddtoList={this.handleAddtoList} />
    ));
  };

  render() {
    const { food, showForm, searched } = this.state;

    return (
      <div className="App">
        <Search handleSearch={this.handleSearch} />
        <button onClick={this.renderForm}>Add new food</button>
        {showForm ? <FoodForm addTheFood={this.addFood} /> : null}
        {this.renderFood(food, searched)}
      </div>
    );
  }
}

export default App;
