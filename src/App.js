import React, { Component } from 'react';
// import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './data/foods.json'
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import TodaysFood from './components/TodaysFood';

class App extends Component {
  state = {
    myFood: [...foods],
    showAddFoodForm: false,
    search:'',
    todaysFood: [],
  }

  addNewFood = (event) =>{
    this.setState({
     showAddFoodForm: !this.state.showAddFoodForm
    })
  }

  todaysFoodHandler = (food) => {
    const foodToday = [...this.state.todaysFood]
    foodToday.push(food)
    this.setState({
      todaysFood: foodToday
    })
  }

  addFoodHandler = (newFood) =>{
    const foodCopy =[...this.state.myFood];
    foodCopy.push(newFood);
    this.setState({
     myFood: foodCopy
    })
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
    })
  }

  handleDelete = (index) => {
    const todaysFoodDelete = [...this.state.todaysFood];
    todaysFoodDelete.splice(index, 1);
    this.setState({
      todaysFood: todaysFoodDelete,
    })
  }

  render() {
    const filteredFood = this.state.myFood.filter( item => { 
      const list = item.name.toLowerCase();
      const filter = this.state.search.toLowerCase();
      return list.includes(filter);
    });
    const todaysFood = this.state.todaysFood;

    const {showAddFoodForm} = this.state;
    return (
      <div className="App">
      <div>
        <input type="text" className="input" onChange={this.handleSearch}  placeholder="Search..." />
      </div>
      <AddFood showForm={this.state.showAddFoodForm} addFoodHandler={this.addFoodHandler} />
      <button onClick={this.addNewFood}>
        { !showAddFoodForm ? 'Show add food form' : 'Hide add food form'}
      </button>
      <div className="sections">
        <ul>
          { filteredFood.map((food, index) => {
            return < FoodBox  
              img= { food.image} 
              name={food.name}
              quantity = {food.quantity} 
              key= {index}
              index= {index}
              calories = {food.calories}
              todaysFoodHandler={this.todaysFoodHandler}
            />
          }) }
        </ul>
        <ul>
          <h2>Today's foods</h2>
          { todaysFood.map((food, index) => {
            return < TodaysFood 
              name={food[0]}
              quantity = {food[2]} 
              key= {index}
              index= {index}
              calories = {food[1]}
              handleDelete={this.handleDelete}
            />
          }) }
        </ul>
      </div>
      </div>
    );
  }
}

export default App;
