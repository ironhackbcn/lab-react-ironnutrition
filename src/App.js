import React, { Component } from 'react';
import './App.css';
import foods from './data/foods.json';
import FoodBox from './components/FoodBox'

const listFoods = foods;
console.log(listFoods);
console.log('*****************');

class App extends Component {
  state = {
    foods: listFoods,
  }

  render() {
    return (
      <div className="wrapper">
        <div className="contenido">
          <h1> IRON NUTRITION</h1>
          <div className="foods-app">
            {
              this.state.foods.map( (oneFood, index) => {
                return(
                  <FoodBox 
                    key = {index} {...oneFood}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
