import React, { Component } from 'react';
import foods from './data/foods.json';
import FoodItem from './components/FoodBox';
import FoodForm from './components/FoodForm';

// const list = foods.slice(0.3);

class App extends Component {
  state = {
    foods: foods,
  };

  updateFoods = (food) => {
    food.calories = parseFloat(food.calories);
    this.setState({
      foods: [food, ...this.state.foods]
    })
  }

  render() {
    const { foods } = this.state;
    // const { FoodForm } = this.state;
    const ironFoods = foods.map((food, index) => {
      return <FoodItem key={index} {...food} />;
    });

    return (
      <div className="container">
        <FoodForm />
        {ironFoods}

        {/* { FoodForm } */}
      </div>
    );
  }
}

export default App;
