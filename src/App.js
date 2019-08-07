import React, { Component } from 'react';
import './App.css';
import foods from './data/foods.json'
import FoodBox from './components/FoodBox';
import Form from './components/Form';

class App extends Component {
  state = {
    foods:foods,
    showForm: false
  }
  handleFood = (event) =>{
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

  render () {
    return (
      <div className="App">
        <button onClick={() =>{this.handleFood()}}>New food</button>
        { this.state.showForm && <Form handleShowForm={this.handleFood} handlePropsFood={this.handleAddNewFood }/>}
        {this.state.foods.map((food, index)=> {
          return(
            <FoodBox foods={this.state.foods}
            key={index}
            name={food.name}
            calories={food.calories}
            image={food.image}
            />
          )
        })
      }
      </div>
    )
    }
  }



export default App;
