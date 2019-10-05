import React, { Component } from 'react';
//import foods from './data/foods.json'
import './App.css';
import FoodBox from './FoodBox';

class App extends Component {
  render() {
    return (
      <div className="container">
        <FoodBox />
      </div>
    );
  }
}

export default App;
