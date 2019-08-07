import React, { Component } from 'react';
import './App.css';
import foods from './data/foods.json'
import FoodBox from './components/FoodBox';
import Form from './components/Form';

class App extends Component {
  state = {
    foods:foods,
    showform: false
  }
  handleFood = (event) =>{
    const {showForm} = this.state;
    this.setState({
    showForm: !showForm
    })
  }

  render () {
    return (
      <div className="App">
        <button onClick={() =>{this.handleFood()}}>New food</button>
        { this.state.showForm && <Form />}
        {this.state.foods.map((food, index)=> {
          return(
            <FoodBox 
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
