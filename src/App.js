import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './data/foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import SearchFood from './components/searchFood';

class App extends Component {
  state = {
    foods: foods,
    showForm: false,
    totalCalories: 0,
    foodList: []
  }

  handdleToogleClick = () => {
    const { showForm } = this.state;
    if (!showForm) {
      this.setState({
       showForm: true,
      })
    } else {
      this.setState({
        showForm: false,
       })
    }
}

handleClick = (newItem) => {
  const { foods } = this.state;
  const newFood = [...foods, newItem];
  this.setState({
    foods: newFood
  });
};

  handleFood = (food) => {
    this.setState({
      foods: [...this.state.contacts, food],
      food: '',
    })
  }

  handleSearch = (words) => {

    const wordsFiltered = foods.filter((food) => {
        return food.name.toLowerCase().indexOf(words.toLowerCase()) > -1;
    })
      this.setState({
        foods: [...wordsFiltered],
      })
  }

  addTodayFood = (name, calories, quantity) => {
    this.setState(() => {
      let foodList = this.state.foodList;
      const searchFood = this.state.foodList.find(food => name === food.name);
     
      if (searchFood === undefined) {
        foodList = [...this.state.foodList, {name, calories, quantity}];
        } else {
          searchFood.quantity += quantity;   
        }
      const totalCalories = this.state.totalCalories + quantity * calories;
      return { foodList, totalCalories };
    })
  }



  render() {
   const {showForm, foodList } = this.state;
    return (
      <div className="App">
     <h1>Iron Nutrition</h1>
        {!showForm ? <button onClick={this.handdleToogleClick}>Add New Food</button>: 
        <AddFood 
          handdletoogleClick={this.state.showForm}
          showForm={this.handdleToogleClick} 
          addToList={this.handleClick} />
          }
      <SearchFood search={this.handleSearch} />
        <div className="columns">
        <div className="column is-three-fifths">
    
     {this.state.foods.map((food, index) => {
      return <FoodBox  
      key={index}
      id={index}
      food={food}
      addTodayFood={this.addTodayFood}
      />
    })}
      </div>
      <div className="column">
        <h1>Today's Food</h1>
        <ul>
          {foodList.map((item, index) => {
            return <li>
              {item.quantity} {item.name} = {item.calories * item.quantity}
            </li>
          })}
        </ul>
          <h2>Total calories: {this.state.totalCalories}</h2>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
