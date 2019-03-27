import React, { Component } from 'react';
import foods from './data/foods.json';
import FoodBox from './Components/FoodBox.js';
import AddFood from './Components/AddFood';
import Search from './Components/Search';
import './App.css';

class App extends Component {
  state= {
    foods: foods,
    filteredFoods: foods,
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

  findFood = (query) => {
    const regex = new RegExp(query, 'i');
    this.setState((state) => (
      { filteredFoods: state.foods.filter(v => regex.test(v.name)) }
    ))
  }

  render() {
    return (
      
      <div className="App">
        <Search renameMe={this.findFood}/><br/>
        <button onClick={this.showForm}>Add food</button>
        {this.state.showForm && <AddFood addedFood={this.addFood}/>
        }
        {this.state.filteredFoods.map( (food, index) => {
          return <FoodBox 
          key={index}
          name={food.name}
          calories={food.calories}
          image={food.image}
          />
        })} 
      </div>
    );
  }
}

export default App;
