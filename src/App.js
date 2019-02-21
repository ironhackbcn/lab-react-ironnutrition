import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import foods from "./data/foods.json";
import FoodBox from "./components/FoodBox";
import AddForm from "./components/AddForm";
import Search from "./components/Search";
import "bulma/css/bulma.css";

class App extends Component {
  state = {
    foods: foods,
    isVisible: false,
    todayFood: []
  };

  handleToggle = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };

  handleClick = newItem => {
    const { foods } = this.state;
    const newFood = [...foods, newItem];
    this.setState({
      foods: newFood
    });
  };

  searchHandler = (e) => {
    
    let foundFoods = [...foods].filter(function(item){
      return item.name.toLowerCase().search(
        e.toLowerCase()) !== -1;
    });
    this.setState({
      foods: foundFoods,
      todayFood: []
    });
  
  }
  
  render() {
    return (
      <div className="App">
        <h1>IRON NUTRITION</h1>
        <Search search={this.searchHandler} />
        <button onClick={this.handleToggle}>Add New Food</button>
        {this.state.isVisible ? <AddForm addToList={this.handleClick} /> : null}
        {this.state.foods.map((item, index) => {
          return (
            <FoodBox
              key={index}
              image={item.image}
              name={item.name}
              calories={item.calories}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
