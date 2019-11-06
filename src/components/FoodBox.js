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
    totalCalories:0,
    addFood : [],
  }
  
  addIngredient = (event, newQuantity, name, calories) => {
    event.preventDefault();
    const {addFood} = this.state
    const newFood = {
      name,
      calories,
      newQuantity
    }
    const addFoodCopy = [...addFood]

    const index = addFoodCopy.findIndex(food =>food.name === name)
    if(index === -1){
      if(newFood.newQuantity>0){
        
        addFoodCopy.push(newFood)

      }
    } else{
      addFoodCopy[index].newQuantity = Number(addFoodCopy[index].newQuantity) + Number(newFood.newQuantity); 
    }
    if(index>=0 && addFoodCopy[index].newQuantity <= 0){
      addFoodCopy.splice(index,1);
    }

    const newTotalCalories = addFoodCopy.reduce((acc,current)=>{
      return acc+(current.newQuantity*current.calories)
    },0);


    this.setState({
      addFood:addFoodCopy,
      totalCalories: newTotalCalories
    })
  }

  changeFormStatus = (event) => {
    const {showForm} = this.state
    this.setState({
      showForm: !showForm,
    })
  }
  
  handleSearch = (event) => {
    const {value} = event.target;
    const foodsFiltered = [...this.state.foodsArr];
    const results= foodsFiltered.filter(food=> food.name.toLowerCase().includes(value.toLowerCase()));
    this.setState({
      showFood:results,
    })
  }

  addNewFood = (newFood) => {
    const {foodsArr,showForm} = this.state;
    const foodsCopy = [...foodsArr];
    foodsCopy.push(newFood)

    this.setState({
      foodsArr:foodsCopy,
      showFood:foodsCopy,
      showForm: !showForm,
    })
  }

  render() {
    const {showForm, showFood, addFood, totalCalories} = this.state
    return (
      <>
        <input className="input search" type="text" id="search" name="search" placeholder="e.g. Salad" onChange={this.handleSearch}/>

        {showForm &&
        <Form addNewFood={this.addNewFood} changeFormStatus={this.changeFormStatus} />}
        {!showForm && 
        <button onClick={this.changeFormStatus} className="button is-info">Add new food</button> 
        }

        <section className="content">
          <div className="box">
            {showFood.map((food, index) => {
              return (
                <FoodCard food={food} index={index} key={index} addIngredient={this.addIngredient} />
              )
              })
            }
          </div> 
          <TotalList food={addFood} totalCalories={totalCalories} />
        </section>
      </>
    )
  }
}

export default FoodBox;
