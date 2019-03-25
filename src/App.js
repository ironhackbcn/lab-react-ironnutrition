import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './data/foods.json'
import './App.css';
import FoodBox from './components/FoodBox'
import AddFoodHandler from './components/AddFood'

class App extends Component {
  
  state = {
    myFood: foods,
    showAddFoodForm: false,
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
      console.log('Adding New Food')
      this.setState({
       showAddFoodForm: true,
      })
    } else {
      console.log('Press button again')
      this.setState({
        showAddFoodForm: false,
       })
    }
  }

  render() {
    const { myFood, showAddFoodForm } = this.state;

    return (
      <div className="App">
        <h1>ironNutrition</h1>
        { !showAddFoodForm ? <button onClick={this.showForm}>Add Food</button> : 
        <AddFoodHandler addFoodHandler={this.AddFoodHandler} showForm={this.state.showAddFoodForm}/>}
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
            />
          );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
