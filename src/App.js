import React, { Component } from 'react';
import foods from './data/foods.json';
import FoodBox from './components/FoodBox.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <ul>
            {foods.map((food, index) => {
              return (
                <li key={index}>
                  <FoodBox food={food} />
                </li>
              );
            })}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;


