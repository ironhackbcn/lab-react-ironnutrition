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
    console.log(name, calories, image);
    foods.push({ name, calories, image, quantity: 0 });
    this.setState({ showFood: [...foods] });
  };

  handleAddFoodToday = (name, calories, image, quantity) => {
    console.log(name);
    const { todayFood } = this.state;
    if (todayFood.length > 0) {
      console.log("el array no es nuevo");
      const pos = todayFood.findIndex(food => {
        console.log(food.name);
        return food.name === name;
      });
      console.log(pos);
      if (pos >= 0) {
        console.log("He encontrado un alimento igual");
        const newState = [...todayFood];
        newState[pos].quantity += quantity;
        this.setState({ todayFood: [...newState] }, () => {
          console.log(this.state);
        });
      } else {
        console.log("No he encontrado un alimento igual");
        const newState = { name, calories, image, quantity };
        this.setState({ todayFood: [...todayFood, newState] });
      }
    } else {
      console.log("el array es nuevo");
      const newState = {
        name,
        calories,
        image,
        quantity
      };
      console.log(newState);
      this.setState({ todayFood: [...todayFood, newState] }, () => {
        console.log(this.state.todayFood);
      });
    }
  };

  handleDeleteFoodToday = index => {
    const newState = [...this.state.showFood];
    newState.splice(index, 1);
    this.setState({ showFood: [...newState] });
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
        <button onClick={this.handleShowAddFood}>
          {this.state.buttonState}
        </button>
        <label htmlFor="textFilter">Search</label>
        {/* Show Food */}
        <input type="text" onChange={this.handleChange} />
        <ShowFood
          showFood={showFood}
          addFoodToday={this.handleAddFoodToday}
          deleteFood={this.handleDeleteFoodToday}
        />

        <TodayFood todayFood={todayFood} />
      </div>
    );
  }
}

export default App;
