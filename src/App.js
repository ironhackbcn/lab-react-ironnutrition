import React, { Component } from 'react';
import foods from './data/foods.json';
import FoodBox from './Components/FoodBox.js';
import AddFood from './Components/AddFood';
import './App.css';

class App extends Component {
  state= {
    foods: foods,
    foodAdded: '',
    showForm: false,
  }
  showForm = ()=> {
    this.setState({
      showForm: true,
    });
  }

  hideForm = () => {
    this.setState({
      showForm: false,
    });
  }

  addFood = (foodAdded) => {
    this.setState({
      foods: [...this.state.foods, foodAdded],
    });
    this.hideForm();
  }

  render() {
    return (
      
      <div className="App">
        <button onClick={this.showForm}>Add food</button>
        {this.state.showForm && <AddFood addedFood={this.addFood}/>
        }
        {this.state.foods.map( (food, index) => {
          return <FoodBox 
          key={index}
          name={food.name}
          calories={food.calories}
          image={food.image}
          addFood={this.addFood}
          />
        })} 
      </div>
    );
  }
}

export default App;
