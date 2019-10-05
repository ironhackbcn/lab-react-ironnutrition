import React, { Component } from 'react';
import foods from './data/foods.json'
import './App.css';
import FoodBox from './FoodBox';
import Form from './Form';

class App extends Component {
  state = {
    food: foods,
    displayAddForm: false,
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

  render() {
    return (
      <div className="container">
        <h1>IronNutrition</h1>

        <form onSubmit={this.handleSearchSubmit}>
          <input className="search-bar" type="text" name="searchBar" value="" placeholder="Search for a food..." onChange={(e) => this.handleFoodSearch(e)} />
        </form>

        <div className="main-section">
          <div className="left-side">
            {this.state.food.map((food, index) => {
              return (
                <FoodBox name={food.name} image={food.image} calories={food.calories} quantity={food.quantity} key={index} />
              )
            })}
          </div>
          <div className="right-side">
            <button className="btn" onClick={this.displayForm}>Add your food</button>
            {this.state.displayAddForm ? <Form submit={this.addFood} /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
