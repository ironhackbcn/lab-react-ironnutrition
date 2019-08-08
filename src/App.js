import React, { Component } from 'react';
import FoodBox from './components/FoodBox.js';
import foods from './data/foods.json'
import Form from './components/Form.js';
import Search from './components/Search.js';
import './App.css';

class App extends Component {
  state = {
    foods: foods,
    showForm: false,
  } 

  handleNewFood = (event) => {
    const {showForm} = this.state;
    this.setState({
      showForm: !showForm
    })
  }

  handleAddNewFood = (newFood) => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(newFood);
    this.setState({
      foods: foodsCopy,
    })
  }

  handleSearch = (event) => {
    let newFoodList = []
    if (event.target.value !=="") {
      newFoodList = foods.filter(food => {
        const list = food.name.toLowerCase()
        const filter = event.target.value.toLowerCase()
        return list.includes(filter);
      })
    } else {
      newFoodList = foods
    }
    this.setState({
      foods: newFoodList
    })
    }
  
  render() {
    return (
      <div className="App">
        <Search handleSearch={this.handleSearch}/>
        <button onClick={()=> {this.handleNewFood()}}>Add New Food</button>
        { this.state.showForm && <Form handleShowForm={this.handleNewFood} handlePropsNewFood={this.handleAddNewFood}/>}
        {
          this.state.foods.map((food, index) => {
            return (
       <FoodBox foods={this.state.foods} 
           key= {index}
           name= {food.name}
           calories= {food.calories}
           image= {food.image}
           />
         )
        })
       }
      </div>
    )  
}
}

export default App;
