import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import foods from "./data/foods.json";
import Foodbox from "./components/FoodBox";
import AddFood from "./components/AddFood";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = foods;
  // }

  render() {
    // console.log(foods);
    return (
      <div>
        <AddFood />
        {foods.map((food, index) => {
          return <Foodbox key={index} {...food} />;
        })}
      </div>
    );
  }
}

export default App;
