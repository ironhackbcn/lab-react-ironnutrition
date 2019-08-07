import React, { Component } from 'react';
import foods from '../data/foods.json';
import Form from './Form.js';
import FoodCard from './FoodCard.js';
import TotalList from './TotalList.js';

class FoodBox extends Component {
  state = {
    showForm :false,
    foodsArr : foods,
    showFood: foods,
    name: '',
    calories: '',
    image:'',
    totalCalories:0,
    addFood : [] //aquí tengo que añadir los objetos addFood de FoodCard

  }
  
  changeFormStatus = (event) => {
    const {showForm} = this.state
    this.setState({
      showForm: !showForm,
    })
  }

  handleInputChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
  
  handleSearch = (event) => {
    const {value} = event.target;
    const foodsFiltered = [...this.state.foodsArr];
    const results= foodsFiltered.filter(food=> food.name.toLowerCase().includes(value.toLowerCase()));
    console.log(results);     

    this.setState({
      showFood:results,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {name,calories,image,foodsArr,showForm} = this.state;
    const foodsCopy = [...foodsArr];
    const newFood = {name, calories, image};
    foodsCopy.push(newFood)

    this.setState({
      foodsArr:foodsCopy,
      showFood:foodsCopy,
      name: '',
      calories: '',
      image:'',
      search:'',
      showForm: !showForm,
    })
  }

  render() {
    const {showForm, name, calories, image,search, showFood, addFood} = this.state
    return (
      <>
        <input className="input"
          type="text" 
          id="search" 
          name="search" 
          placeholder="e.g. Salad" 
          value={search}
          onChange = {this.handleSearch}
        />
        {showForm ? 
        <Form name={name} calories={calories} image={image} /> : null}
        {!showForm ? 
        <button onClick={this.changeFormStatus} className="button is-info">Add new food</button> 
        :<button className="button is-info" onClick={this.changeFormStatus}>Cancel</button>
        }
        <div className="box">
        {showFood.map( (food, index) => {
          return (
            <FoodCard food={food} index={index} />
          )
        } 
        )}
        </div> 
        <TotalList food={addFood} />
      </>
    )
  }
}

export default FoodBox;
