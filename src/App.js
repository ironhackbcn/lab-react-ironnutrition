import React, { Component } from "react";
import "./App.css";
import { foods } from "./data/foods.json";
import FoodBox from "./components/FoodBox";
import ButtonAdd from "./components/ButtonAdd";
import AddFoodForm from "./components/AddFoodForm";
import MyNutritionTable from "./components/MyNutritionTable";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foodList: foods,
      showForm: false,
      submitted: null,
      query: "",
      myNutritionList: [],
      myNutrition: {
        quantity: 0,
        name: "",
        calories: 0
      }
    };
    this.handleAddFood = this.handleAddFood.bind(this);
    this.displayForm = this.displayForm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleCalculator = this.handleCalculator.bind(this);
  }
  displayForm = () => {
    const { showForm } = this.state;
    if (!showForm) {
      this.setState({ showForm: true, submitted: false });
    } else {
      this.setState({ showForm: false });
    }
  };
  handleAddFood(food) {
    const { submitted } = this.state;
    if (!submitted) {
      this.setState({
        foodList: [...this.state.foodList, food],
        showForm: false,
        submitted: true
      });
    } else {
      this.setState({
        foodList: [...this.state.foodList],
        showForm: true,
        submitted: false
      });
    }
  }
  handleSearch(event) {
    const { value } = event.target;
    this.setState({
      query: value
    });
  }
  handleCalculator(food) {
    const { quantity, name, calories } = food;
    const { myNutritionList } = this.state;
    this.setState({
      myNutritionList: [food, ...myNutritionList],
      myNutrition: {
        quantity: quantity,
        name: name,
        calories: calories
      }
    });
  }
  render() {
    const {
      foodList,
      showForm,
      submitted,
      query,
      myNutritionList,
      myNutrition
    } = this.state;
    const foodFiltered = foodList.filter(food => {
      return food.name.toLowerCase().includes(query.toLowerCase());
    });
    //hay que aplicar el filter aquí para que vaya dando los resultados conforme se escribe no en el estado
    const foods = foodFiltered.map((ingredient, index) => {
      return (
        <FoodBox
          key={index}
          {...ingredient}
          onCalculator={this.handleCalculator}
        />
      );
    });
    return (
      <div className="App container">
        <h1>Ironnutrition</h1>
        <input
          className="input column is-full"
          type="text"
          name="query"
          placeholder="Search a food"
          onChange={this.handleSearch}
        />
        {(showForm && submitted === null) || (showForm && !submitted) ? (
          <AddFoodForm
            onAddFood={this.handleAddFood}
            {...foodList}
            onSubmitted={this.handleSearch}
          />
        ) : (
          <>
            <p className="claim">Don't you find an ingredient here?</p>
            <ButtonAdd action={this.displayForm} />
          </>
        )}
        <div className="columns">
          <div className="column is-three-fifths">{foods}</div>
          <div className="column my-nutrition">
            <h2>Today's foods</h2>
            <MyNutritionTable
              quantity={myNutrition.quantity}
              name={myNutrition.name}
              calories={myNutrition.calories}
              myNutrition={myNutritionList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
