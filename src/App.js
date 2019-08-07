import React, { Component } from 'react';
import foods from './data/foods.json';
import FoodBox from './components/FoodBox.js';
import './App.css';
import FoodForm from './components/FoodForm.js';

class App extends Component {
  state = {
    foods: foods,
    showForm: false
  }

  showFoodForm = (event) => {
    const { showForm } = this.state
    this.setState({
      showForm: !showForm
    })
  }

  AddNewFood = (newFood) => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(newFood);
    this.setState({
      foods: foodsCopy,
    })
  }

  render() {
    return (
      <div className='App'>
        <button className='button' onClick={() => { this.showFoodForm() }}>Add new food</button>
        {this.state.showForm && <FoodForm handleShowForm={this.showFoodForm} handlePropsFood={this.AddNewFood} />}
        {this.state.foods.map((food, index) => {
          return (
            <section>
              <article>
                <FoodBox foods={this.state.foods}
                  key={index}
                  name={food.name}
                  calories={food.calories}
                  image={food.image}
                />
              </article>
            </section>
          );
        })}

      </div>
    );
  }
}


export default App;


