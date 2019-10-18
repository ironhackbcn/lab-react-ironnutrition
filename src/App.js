import React, { Component } from "react";
import "./App.css";
import foods from "./data/foods.json";
import Foodbox from "./components/FoodBox";
import AddFood from "./components/AddFood";
import Search from "./components/Search";

class App extends Component {
  constructor() {
    super();
    this.state = { foods: foods, visibilityForm: false };
  }

  newFood = food => {
    const { foods } = this.state;
    const newFoods = [...foods, food];

    this.setState(
      {
        foods: newFoods
      },
      () => console.log(this.state)
    );
  };

  handleVisibilityForm = () => {
    this.setState({
      visibilityForm: !this.state.visibilityForm
    });
  };

  search = item => {
    const foundFood = foods.filter(food => {
      return food.name.toLowerCase().search(item) !== -1;
    });
    this.setState({
      foods: [...foundFood]
    });
  };

  render() {
    // console.log(foods);
    const { foods, visibilityForm } = this.state;
    return (
      <div>
        <Search search={this.search} />
        <button onClick={this.handleVisibilityForm}>new food</button>
        {visibilityForm && (
          <AddFood
            newFood={this.newFood}
            visibility={this.handleVisibilityForm}
          />
        )}
        {foods.map((food, index) => {
          return <Foodbox key={index} {...food} />;
        })}
      </div>
    );
  }
}

export default App;
