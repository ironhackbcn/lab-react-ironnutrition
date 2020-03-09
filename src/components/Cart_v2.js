
//en esta version seteo el estado con la palabra que viene de Searchbar a traves de fiterSearch (invocada en SearchBar Component)
//Despues, en el map del render solo retorno los elementos que incluyan el stringToMatchInSearchbar y si este esta vacío,
//los devuelvo todos.
import React, { Component } from "react";
import foods from "../foods.json";
import SearchBar from "./SearchBar";
import FoodBox from "./FoodBox";

export default class Cart extends Component {
  state = {
    foods: foods,
    fullFood: foods,
    showForm: false,
    stringToMatchInSearchbar: "",
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
      let stringToMatchInSearchbar = word.toLowerCase()
      this.setState({
        stringToMatchInSearchbar
      })
  }

  render() {
    const {stringToMatchInSearchbar, foods} = this.state
    let allFoods = foods.map((el, i) => {
        if(!stringToMatchInSearchbar){
            return <FoodBox food={el} key={i} />;
        }
        else if(stringToMatchInSearchbar && el.name.toLowerCase().includes(stringToMatchInSearchbar)){
            return <FoodBox food={el} key={i} />;
        }
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
