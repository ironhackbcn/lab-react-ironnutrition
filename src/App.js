import React, { Component } from 'react';
import foods from './data/foods.json';
import FoodBox from './components/FoodBox.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <FoodBox foods={foods} />
      </div>
    );
  }
}

export default App;
