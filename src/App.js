import React, { Component } from 'react';
import foods from './data/foods.json'
import './App.css';
import FoodBox from './FoodBox';
import Form from './Form';
import Calculator from './Calculator';

class App extends Component {
  state = {
    food: foods,
    eatenFoods: [],
    displayAddForm: false,
    searchValue: "",
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

  handleSearch = (e) => {
    e.preventDefault();
    this.setState({
      searchValue: e.target.value,
    });
  }

  addEatenFood = (i, quantity, name, calories) => {
    console.log(i, quantity, name, calories);
    const eatenFood = {
      name: name,
      calories: calories,
      quantity: quantity,
    }
    console.log(eatenFood);
    this.setState({
      eatenFoods: [...this.state.eatenFoods, eatenFood],
    });
  }

  render() {
    const { food, searchValue, displayAddForm } = this.state;

    const filteredItems = food.filter(searchedFood => {
      const { name } = searchedFood
      return name.toLowerCase().search(
        searchValue.toLowerCase()) !== -1;
    });

    return (
      <div className="container">
        <h1>IronNutrition</h1>

        <input className="search-bar" type="text" name="searchBar" value={searchValue} placeholder="Search for a food..." onChange={this.handleSearch} />

        <div className="main-section">
          <div className="left-side">
            {filteredItems.map((food, index) => {
              return (
                <FoodBox
                  name={food.name}
                  image={food.image}
                  calories={food.calories}
                  initialQuantity={food.quantity}
                  key={index}
                  index={index}
                  action={this.addEatenFood}
                />
              )
            })}
          </div>
          <div className="right-side">
            <button className="btn" onClick={this.displayForm}>Add your food</button>
            {displayAddForm ? <Form submit={this.addFood} /> : null}
            <div className="calc">
              <h3>Today's food</h3>
              {this.state.eatenFoods.map((food, index) => {
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
