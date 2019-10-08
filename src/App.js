import React, { Component } from 'react';
import foods from './data/foods.json'
import './App.css';
import FoodBox from './FoodBox';
import Form from './Form';
import Calculator from './Calculator';
import SearchBar from './SearchBar';

class App extends Component {
  state = {
    food: foods,
    eatenFood: [],
    // {
    //   "name": "Salad",
    //   "calories": 150,
    //   "image": "https://i.imgur.com/DupGBz5.jpg",
    //   "quantity": 2
    // }],
    displayAddForm: false,
    searchValue: "Pizza",
  }

  displayForm = () => {
    this.setState({
      displayAddForm: !this.state.displayAddForm,
    })
  }

  addFood = ({ name, image, calories }) => {
    const { food } = this.state;
    const newFood = {
      name: name,
      image: image,
      calories: calories,
    }
    this.setState({
      food: [newFood, ...food],
    });
  }

  handleSearch = e => {
    e.preventDefault()
    const { food } = this.state;
    const { searchValue } = e.target.value;
    const updatedFood = [...food];
    updatedFood.filter((food) => {
      return food.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    });
    this.setState({
      searchValue: e.target.value,
      food: [...updatedFood],
    });
    console.log(updatedFood);
  }

  render() {
    return (
      <div className="container">
        <h1>IronNutrition</h1>
        <SearchBar value={this.state.searchValue} />
        <div className="main-section">
          <div className="left-side">
            {this.state.food.map((food, index) => {
              return (
                <FoodBox name={food.name} image={food.image} calories={food.calories} quantity={food.quantity} key={index} action={this.addEatenFood} />
              )
            })}
          </div>
          <div className="right-side">
            <button className="btn" onClick={this.displayForm}>Add your food</button>
            {this.state.displayAddForm ? <Form submit={this.addFood} /> : null}
            <div className="calc">
              <h3>Today's food</h3>
              {this.state.eatenFood.map((food, index) => {
                return (
                  <Calculator name={food.name} calories={food.calories} quantity={food.quantity} key={index} />
                )
              })}
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
