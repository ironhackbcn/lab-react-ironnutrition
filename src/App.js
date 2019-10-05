import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import foods from "./data/foods.json";
import FoodBox from "./components/FoodBox";
import Button from "./components/Button";
import FormNewFood from "./components/FormNewFood";
import SearchName from "./components/SearchName";
import ListFood from "./components/ListFood";

class App extends Component {
  state = {
    foodsState: foods,
    foodsFilter: [],
    selectFoods: [],
    totalCalories: 0,
    form: {
      visibility: false,
    },
  };

  handleVisibiltyFromAddFood = () => {
    const { visibility } = this.state.form;

    this.setState({
      form: { visibility: !visibility },
    });
  };

  handleAddFood = (name, calories, image) => {
    const { foodsState } = this.state;
    const newFood = {
      name: name,
      calories: calories,
      image: image,
      quantity: 0,
    };

    this.setState(
      {
        foodsState: [newFood, ...foodsState],
      },
      () => {
        console.log("TCL: App -> handleAddFood -> foods", foodsState);
        this.handleState(this.state.foodsState, this.state.foodsFilter);
      }
    );
  };

  handleSearchName = event => {
    const { foodsState } = this.state;
    const filterItems = foodsState.filter(
      element =>
        element.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !==
        -1
    );

    this.setState(
      {
        foodsFilter: filterItems,
      },
      () => {
        console.log(
          "TCL: App -> handleAddFood -> foodsFilter",
          this.state.foodsFilter
        );
      }
    );
  };
  handleAddFoodlist = (name, calories, quantity) => {
    const { selectFoods } = this.state;
    const newFood = {
      name,
      calories,
      quantity,
    };

    this.setState(
      {
        selectFoods: [newFood, ...selectFoods],
      },
      () => {
        const allCalories = this.state.selectFoods
          .map(food => food.calories * food.quantity)
          .reduce((ac, cur) => ac + cur);
        this.setState({
          totalCalories: allCalories,
        });
      }
    );
  };
  handleState = (foodsState, foodsFilter) => {
    if (foodsFilter.length === 0) {
      return this.state.foodsState;
    } else {
      return this.state.foodsFilter;
    }
  };

  render() {
    const { foodsState, form, selectFoods, totalCalories } = this.state;

    const foodsFilter = this.handleState(
      this.state.foodsState,
      this.state.foodsFilter
    );

    return (
      <div className="wrapper">
        <div className="food">
          <div>
            <Button onClick={this.handleVisibiltyFromAddFood}>
              OPEN / CLOSE - Create nuw food
            </Button>
          </div>
          <div className="add">
            {form.visibility && <FormNewFood onSendForm={this.handleAddFood} />}
          </div>
          <div className="search">
            Search <input defaultValue=" " onChange={this.handleSearchName} />
          </div>
          <div>
            {foodsFilter.map((food, index) => {
              return (
                <FoodBox
                  key={index}
                  id={index}
                  name={food.name}
                  calories={food.calories}
                  image={food.image}
                  quantity={food.quantity}
                  onListElement={this.handleAddFoodlist}
                />
              );
            })}
          </div>
        </div>

        <div className="list">
          <h2>Your list</h2>
          <div>
            {selectFoods.map((food, index) => {
              return (
                <ListFood
                  key={index}
                  id={index}
                  name={food.name}
                  calories={food.calories}
                  quantity={food.quantity}
                />
              );
            })}
          </div>
          <div>Total Calories: {totalCalories}</div>
        </div>
      </div>
    );
  }
}

export default App;
