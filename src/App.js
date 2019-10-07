import React, { Component } from 'react';
// import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './data/foods.json'
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Todays from './components/Todays';



class App extends Component {
  state = {
    myFood: [...foods],
    showAddFoodForm: false,
    search: '',
    foodToday: []
  }

  showForm = (event) => {
    const { showAddFoodForm } = this.state;
    if (!showAddFoodForm) {
      console.log('Adding New Food')
      this.setState({
       showAddFoodForm: true
      })
    } else {
      console.log('Press button again')
      this.setState({
        showAddFoodForm: false
       })
    }
  }

  onNewFood = (object) => {
    console.log('Adding food')
    this.setState({
      myFood: [object, ...this.state.myFood],
    })
    this.showForm();
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
    })
  }


  addTodayMenu = (food) => {
    console.log(food);
    this.setState({
      foodToday: [food, ...this.state.foodToday],
    })
  }

  render() {
    const filteredFood = this.state.myFood.filter(e => e.name.toLowerCase().includes(this.state.search.toLowerCase()));
    const {showAddFoodForm} = this.state;
    return (
      <div className="App">
        <div>
          <label>Search Dish </label>
          <input placeholder='Food search' onChange={this.handleSearch}></input>
        </div>
        { showAddFoodForm ? <AddFood addFood={this.onNewFood} /> : <button onClick={this.showForm}>Add Food</button> }
        <div className="columns">
          <div className="column">
            <ul>
              { filteredFood.map((food, index) => {
                return < FoodBox  
                  name= {food.name}
                  calories = {food.calories}
                  img= {food.image} 
                  quantity = {food.quantity} 
                  key= {index}
                  addToday={this.addTodayMenu}
                />
              }) }
            </ul>
          </div>
          <div className="column">
          <h2>Today's foods</h2>
            <ul>
              { this.state.foodToday.length===0 ? <p>Pick something to eat </p> : <Todays foodToday={this.state.foodToday} />}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
