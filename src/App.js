import React, { Component } from "react";
import "./App.css";
import ShowFood from "./components/ShowFood";
import foods from "./data/foods.json";
import AddFood from "./components/AddFood";
import TodayFood from "./components/TodayFood";

class App extends Component {
  state = {
    textFiltered: "",
    showFood: [...foods],
    visualizeAddFood: false,
    buttonState: "Show",
    todayFood: []
  };

  handleAddFood = (name, calories, image) => {
    foods.push({ name, calories, image, quantity: 0 });
    this.setState({ showFood: [...foods] });
  };

  handleAddFoodToday = (name, calories, image, quantity) => {
    const { todayFood } = this.state;
    if (todayFood.length > 0) {
      const pos = todayFood.findIndex(food => {
        return food.name === name;
      });
      if (pos >= 0) {
        const newState = [...todayFood];
        newState[pos].quantity += quantity;
        this.setState({ todayFood: [...newState] }, () => {});
      } else {
        const newState = { name, calories, image, quantity };
        this.setState({ todayFood: [...todayFood, newState] });
      }
    } else {
      const newState = {
        name,
        calories,
        image,
        quantity
      };
      this.setState({ todayFood: [...todayFood, newState] }, () => {});
    }
  };

  handleDeleteFoodToday = index => {
    foods.splice(index, 1);
    this.setState({ showFood: [...foods] });
  };

  handleShowAddFood = () => {
    const { buttonState } = this.state;
    this.setState({ visualizeAddFood: !this.state.visualizeAddFood });
    if (buttonState === "Show") {
      this.setState({ buttonState: "Hide" });
    } else {
      this.setState({ buttonState: "Show" });
    }
  };

  handleChange = e => {
    let food = [...foods];
    const { name, value } = e.target;
    const { showFood } = this.state;
    if (value !== "") {
      food = showFood.filter(aFood => {
        return aFood.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      });
    }
    this.setState({ [name]: value, showFood: food });
  };

  render() {
    const { showFood, visualizeAddFood, todayFood } = this.state;
    return (
      <div>
        <h1>IronNutrition</h1>

        {/* {/* AddFood */}
        {visualizeAddFood && <AddFood myFunction={this.handleAddFood} />}
        <div>
          <button
            className="button is-primary"
            onClick={this.handleShowAddFood}
            style={{ margin: "10px" }}
          >
            {this.state.buttonState}
          </button>
        </div>
        {/* Show Food */}
        <div className="control">
          <label htmlFor="textFilter">Search</label>
          <input
            className="input is-small"
            type="text"
            onChange={this.handleChange}
          />
        </div>
        <div className="columns">
          <div className="Card">
            <ShowFood
              showFood={showFood}
              addFoodToday={this.handleAddFoodToday}
              deleteFood={this.handleDeleteFoodToday}
            />
          </div>

          <div className="column todayFood">
            <TodayFood todayFood={todayFood} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
