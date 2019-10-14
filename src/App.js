import React, { Component } from "react";
import "./App.css";
import foods from "./data/foods.json";
import Foodbox from "./components/FoodBox";
import ButtonAdd from "./components/ButtonAdd";
import FoodForm from "./components/AddFoodForm";
import MyNutritionTable from "./components/MyNutritionTable";

class App extends Component {
  state = {
    foods: foods,
    form: false,
    query: "",
    myNutritionList: []
  };
  handleAdd = food => {
    const { name, quantity, calories } = food;
    const { myNutritionList } = this.state;
    const foodsToday = {
      name: name,
      quantity: quantity,
      calories: calories
    };
    if (myNutritionList.length === 0) {
      this.setState({
        myNutritionList: [foodsToday, ...myNutritionList]
      });
    } else {
      const isFoodRepeated = myNutritionList.findIndex(food => {
        return food.name === name;
      });
      if (isFoodRepeated === -1) {
        this.setState({
          myNutritionList: [foodsToday, ...myNutritionList]
        });
      } else {
        myNutritionList[isFoodRepeated].quantity += quantity;
        this.setState({
          myNutritionList: myNutritionList
        });
        console.log(this.state);
      }
    }
  };
  displayForm = () => {
    if (!this.state.form) {
      this.setState({
        form: true
      });
    } else {
      this.setState({
        form: false
      });
    }
  };
  addNewFood = food => {
    console.log("🥘 new food");
    this.setState({
      foods: [...this.state.foods, food],
      form: false
    });
  };
  handleSearch = event => {
    const { value } = event.target;
    this.setState({
      query: value
    });
  };
  handleDelete = foodIndex => {
    const { foods } = this.state;
    console.log(foods);
    const foodsCopy = [...foods];
    foodsCopy.splice(foodIndex, 1);
    this.setState({
      foods: foodsCopy
    });
  };
  render() {
    const { foods, query, myNutritionList } = this.state;
    const foodFiltered = foods.filter(food => {
      return food.name.toLowerCase().includes(query.toLowerCase());
    });
    const foodlist = foodFiltered.map((ingredient, index) => {
      return (
        <Foodbox
          key={index}
          name={ingredient.name}
          calories={ingredient.calories}
          image={ingredient.image}
          onCalculator={this.handleAdd}
          id={index}
          clickToDelete={() => this.handleDelete(index)}
        />
      );
    });
    return (
      <div className="App container">
        <h1>Ironnutrition</h1>
        {!this.state.form && (
          <input
            className="input column is-full"
            type="text"
            name="query"
            value={this.state.query}
            placeholder="Search a food"
            onChange={this.handleSearch}
          />
        )}
        {this.state.form && <FoodForm onSubmitFood={this.addNewFood} />}
        {!this.state.form && <ButtonAdd action={this.displayForm} />}
        <div className="columns">
          <div className="column is-three-fifths">{foodlist}</div>
          <div className="column my-nutrition">
            <h2>Today's foods</h2>
            <MyNutritionTable myNutrition={myNutritionList} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
