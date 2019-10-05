import React, { Component } from "react";
import "./App.css";
import foods from "./data/foods.json";
import Card from "./components/Card";

class App extends Component {
  state = {
    allFood: [...foods]
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-h1">IronNutrition</h1>
          <input className="App-Input" type="text" placeholder="...Food"></input>
          {this.state.allFood.map((food, index) => {
            return (
              <div key={`${index}`}>
                <Card name={food.name} />
              </div>
            );
          })}
        </header>
      </div>
    );
  }
}

export default App;
