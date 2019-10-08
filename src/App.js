import React, { Component } from "react";
import "./App.css";
import { foods } from "./data/foods.json";
import FoodBox from "./components/FoodBox";
import ButtonAdd from "./components/ButtonAdd";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foodList: foods,
      showForm: false,
      submitted: null
    };
    this.handleAddFood = this.handleAddFood.bind(this);
    this.displayForm = this.displayForm.bind(this);
    this.handleSearchResults = this.handleSearchResults.bind(this);
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
  handleSearchResults(query) {
    console.log(query);
    const search = query.name;
    const { foodList } = this.state;
    const foodlistCopy = [...foodList];
    //working on filtered function
    // const filteredList = foodlistCopy.filter(food => return );
    // console.log(filteredList);
  }
  render() {
    const { foodList, showForm, submitted } = this.state;
    const foods = foodList.map((ingredient, index) => {
      return <FoodBox key={index} {...ingredient} />;
    });
    return (
      <div className="App container">
        <h1>Ironnutrition</h1>
        <Search onSearch={this.handleSearchResults} />
        {(showForm && submitted === null) || (showForm && !submitted) ? (
          <AddFoodForm
            onAddFood={this.handleAddFood}
            {...foodList}
            onSubmitted={this.handleSubmit}
          />
        ) : (
          <>
            <p className="claim">Don't you find and ingredient here?</p>
            <ButtonAdd action={this.displayForm} />
          </>
        )}
        {foods}
      </div>
    );
  }
}

export default App;
