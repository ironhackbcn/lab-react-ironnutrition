import React, { Component } from 'react';
import './App.css';
import foods from './data/foods.json';
import FoodBox from './components/FoodBox';
import Search from './components/Search';

class App extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
    quantity: '0',
    foods,
    display: 'none',
    valueGuai: '',
    foodsToday: [],
    totalCalories: '0'
  }

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value 
    })
  }

  addFood = (event) => {
    const {display} = this.state;
    // event.preventDefault();
    const newDisplay = (display === 'block') ? 'none' : 'block';
    this.setState({
      display: newDisplay
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {name, calories, image, quantity, foods} = this.state;
    const newFoods = [...foods];
    const newFood = {name, calories, image, quantity}; 
    newFoods.push(newFood);
    
    this.setState({
      foods: newFoods,
      name:'',
      calories: '',
      image:''
    })
    this.addFood();    
  }

  compareValue = (newValue) => {
    this.setState({
      valueGuai: newValue
    })
  }

  addTodaysFood = (newTodayFood) => {
    const {foodsToday} = this.state;
    const newFoodsToday = [...foodsToday];
    newFoodsToday.push(newTodayFood);
    const newTotalCalories = newTodayFood.newValue * newTodayFood.calories;
    this.setState({
      name: newTodayFood.name,
      calories: newTodayFood.calories,
      quantity: newTodayFood.newValue,
      foodsToday: newFoodsToday,
      totalCalories: newTotalCalories
    })
  }


  render() {
    const {name, calories, image, foods, display, valueGuai, totalCalories} = this.state;
    return (
      <div className="App">
        <button onClick={this.addFood}>Add food</button>
        <Search getvalue={this.compareValue}/>
        <form onSubmit={this.handleSubmit} style={{display}}>
          <label htmlFor="name">Name</label>
          <input 
            type="text"
            name="name"
            id="name"
            placeholder="name"
            value={name}
            onChange={this.handleInputChange}
          />

          <label htmlFor="calories">Calories</label>
          <input type="number"
            name="calories"
            id="calories"
            placeholder="0"
            value={calories}
            onChange={this.handleInputChange}
          />

          <label htmlFor="image">image</label>
          <input
            type="text"
            name="image"
            id="image"
            value={image}
            onChange={this.handleInputChange}
          />
          <button type="submit">add new food</button>
        </form>

        <div className="columns">
          <div className="column">
            { foods.map((food, index) => {
              if(food.name.toLowerCase().includes(valueGuai)){
                return(
                  <FoodBox data={food} key={index} index={index} addParentTodayFood={this.addTodaysFood}/>
                )
              } else {
                return null;
              }
            })}
          </div>
          <div className="column">
            <h3>Today's food</h3>
            <ul>
              {this.state.foodsToday.map((foodToday, index)=>{
                return(
                  <li key={index}>{foodToday.newValue} {foodToday.name} = {totalCalories}</li>
                )
              })
              }
            </ul>

            <p>Total calories: {totalCalories}</p>
          </div>
          
        </div>



        
      </div>
    );
  }
}

export default App;
