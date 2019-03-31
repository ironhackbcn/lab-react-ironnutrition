import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './data/foods.json'
import './App.css';
import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood'
import SearchFood from './components/SearchFood'

class App extends Component {
  
  state = {
    myFood: foods,
    showAddFoodForm: false,
    todayFood: [],
    totalCalories: 0,
  }

  AddFoodHandler = (food) => {
    const foodCopy = [...this.state.myFood];
    foodCopy.push(food);
    this.setState({
      myFood: foodCopy,
    })
    this.showForm();
  }

  showForm = () => {
    const { showAddFoodForm } = this.state;
    if (!showAddFoodForm) {
      this.setState({
       showAddFoodForm: true,
      })
    } else {
      this.setState({
        showAddFoodForm: false,
       })
    }
  }

  SearchFood = (searchWords) => {
    console.log(searchWords);
    const filteredFoods = foods.filter((food) => {
      return food.name.toLowerCase().indexOf(searchWords.toLowerCase()) > -1;
      })
      this.setState({
        myFood: [...filteredFoods],
      });
  }

  addTodayFood = (name, calories, quantity) => {
    this.setState(() => {
      let todayFood = this.state.todayFood;
      const searchFood = this.state.todayFood.find(food => name === food.name);
      console.log('Found!', searchFood);
      if (searchFood === undefined) {
          todayFood = [...this.state.todayFood, {name, calories, quantity}];
        } else {
          searchFood.quantity += quantity;   
        }
      const totalCalories = this.state.totalCalories + quantity * calories;
      return { todayFood, totalCalories };
    })
  }

  render() {
    const { myFood, showAddFoodForm, todayFood } = this.state;

    return (
      <div className="App">
        <h1>ironNutrition</h1>
        { !showAddFoodForm ? <button onClick={this.showForm}>Add Food</button> : 
        <AddFood addFoodHandler={this.AddFoodHandler} showForm={this.state.showAddFoodForm}/>}
        <SearchFood search={this.SearchFood}/>
        <div className="columns">
          <div className="column">
            <ul>
              {myFood.map((meals, index) => {
              return (
                <FoodBox 
                key={index} 
                index={index} 
                name={meals.name}
                calories={meals.calories}
                image={meals.image}
                quantity={meals.quantity}
                addTodayFood={this.addTodayFood}
                />
              );
              })}
            </ul>
          </div>
          <div className="column">
            <h1>Today's Food</h1>
              {todayFood.map((meals, index) => {
                return (
                <ul key={index}>
                {meals.quantity} {meals.name} = {meals.calories * meals.quantity} cal
                </ul>
                );
              })}
              <h2>Total: {this.state.totalCalories}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
