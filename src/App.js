import React, { Component } from 'react';

import foods from './data/foods.json'
import './App.css';
import FoodBox from './components/FoodBox.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodBox foods={foods}/>
      </div>
    );
  }
}

export default App;
