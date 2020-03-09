import React, { Component } from "react";
import foods from "../foods.json";
import SearchBar from "./SearchBar";
import FoodBox from "./FoodBox";
import FoodBox_hooks from "./FoodBox_hooks";

export default class Cart extends Component {
  state = {
    foods: foods,
    fullFood: foods,
    showForm: false,
    name: "whatever",
    calories: 300,
    image: "http://placekitten.com/g/200/200"
  };
  toggleForm = () => {
    const { showForm } = this.state;
    this.setState({
      showForm: !showForm
    });
  };

  handleChange = e => {
    //const value = target.type === 'checkbox' ? target.checked : target.value;
    const { value, name } = e.target;
    console.log(name, value);
    
    this.setState({
        [name]: value,
    });
  };

  addFood = e => {
    e.preventDefault();
    const { foods, name, calories, image } = this.state;
    const newFood = {name, calories, image}
    console.log(newFood);
    this.setState({
      foods: [newFood, ...foods]
    });
  };

  filterSearch = (word) => {
      let wordToLowerCase = word.toLowerCase()
      const {fullFood} = this.state
      const newArr = [...fullFood]
      const filteredFoods = newArr.filter((el) => {
          return el.name.toLowerCase().includes(wordToLowerCase)
          
      })
      console.log(word);
      console.log(filteredFoods);
      
      this.setState({
          foods: filteredFoods
      })
  }

  render() {
    const allFoods = this.state.foods.map((el, i) => {
      return <FoodBox_hooks food={el} key={i} />;
    });
    return (
      <div>
        <h1>Ironcart</h1>
        <SearchBar filter={this.filterSearch}/>
        <button onClick={this.toggleForm}>Add food</button>
        {this.state.showForm ? (
          <form>
            <label htmlFor="">Name</label>
            <input type="text" name="name" onChange={this.handleChange} />
            <label htmlFor="">Calories</label>
            <input type="number" name="calories" onChange={this.handleChange} />
            <label htmlFor="">Image</label>
            <input type="text" name="image" onChange={this.handleChange} />
            <button onClick={this.addFood}>Add!</button>
          </form>
        ) : null}
        {allFoods}
      </div>
    );
  }
}
