import React, { Component } from "react";
import "./App.css";
import foods from "./data/foods.json";
import Jumbotron from "./components/Jumbotron";
import SearchedFood from "./components/SearchedFood";
import AddFood from "./components/DynamicList/AddFood";

class App extends Component {
  state = {
    allFood: [...foods],
    searchedFood: [...foods],
    form: " ",
    visible: true
  };

  HandleHideShowFood = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  };

  HandleSearch = value => {
    console.log(value);
    const { allFood, form } = this.state;
    this.setState({ form: value });
    if (form === "") {
      this.setState({ searchedFood: [...allFood], form: "" });
    } else {
      const newState = [...allFood].filter(food => {
        return food.name.toLowerCase().includes(form.toString().toLowerCase());
      });
      this.setState({ searchedFood: [...newState] });
    }
  };

  render() {
    const { form, searchedFood, visible } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-h1">IronNutrition</h1>
          {/*Component that show a form to add a new food */}
          <AddFood 
            onoffShowFood={this.HandleHideShowFood}
            // onoffShowForm={this.HandlehideShowForm}
          />
          {/* a Component to find food */}
          <Jumbotron
            myFunction={this.HandleSearch}
            valueForm={form}
            visible={visible}
          />
          {/* Component that show the food searched */}
          {visible ? <SearchedFood sfood={searchedFood} /> : null}
        </header>
      </div>
    );
  }
}

export default App;
