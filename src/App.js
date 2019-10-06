import React, { Component } from 'react';
import './App.css';
import foods from './data/foods.json'
import ListFood from "./components/ListFood";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListFood></ListFood>
      </div>
    );
  }
}

export default App;
