import React, { Component } from 'react';
import './App.css';
import foods from './data/foods.json';
import FoodBox from './components/FoodBox'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="contenido">
          <h1> IRON NUTRITION</h1>
          <FoodBox />
        </div>
      </div>
    );
  }
}

export default App;
