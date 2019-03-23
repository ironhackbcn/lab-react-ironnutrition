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
    console.log('wesdj')
    this.setState({
     showAddFoodForm: true
    })
    return <AddFood />
  }

  render() {
    const {showAddFoodForm} = this.state;
    return (
      <div className="App">
      <button onClick={this.addNewFood}>Add Food
        { showAddFoodForm ? 'Show' : 'Hide'}
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
