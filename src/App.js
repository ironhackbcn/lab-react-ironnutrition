import React, { Component } from 'react';
// import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './data/foods.json'
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';


class App extends Component {
  state = {
    myFood: foods,
    showAddFoodForm: false,
  }

  addNewFood = (event) =>{
    this.setState({
     showAddFoodForm: !this.state.showAddFoodForm
    })
  }

  addFoodHandler = (newFood) =>{
    const foodCopy =[...this.state.myFood];
    foodCopy.push(newFood);
    this.setState({
     myFood: foodCopy
    })
  }

  render() {
    const {showAddFoodForm} = this.state;
    return (
      <div className="App">
      <AddFood showForm={this.state.showAddFoodForm} addFoodHandler={this.addFoodHandler}/>
      <button onClick={this.addNewFood}>
        { !showAddFoodForm ? 'Show add food form' : 'Hide add food form'}
      </button>
        <ul>
          { this.state.myFood.map((food, index) => {
            return < FoodBox  
              img= { food.image} 
              name={food.name}
              quantity = {food.quantity} 
              key= {index}
              index= {index}
              calories = {food.calories}
            />
          }) }
        </ul>
      </div>
    );
  }
}

export default App;
