import React, { Component } from 'react';
import foods from './data/foods.json';
import FoodItem from './components/FoodBox';

// const list = foods.slice(0.3);

class App extends Component {
  state = {
    foods:foods,
  };





  render() {
    const { foods } = this.state;
    const ironFoods = foods.map((food, index) => {
      return(
        <FoodItem
        key={index}
        {...food}/>
      )
    })
  
    return (
      <div>
        { ironFoods}
      </div>
    );
  }
}

export default App;