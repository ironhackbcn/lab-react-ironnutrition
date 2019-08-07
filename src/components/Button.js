import React, {Component} from 'react'
import Foodbox from './Foodbox'

class Button extends Component  {
  state = {
    name: '',
    calories: '',
    image: '',
    foods: [],
    isAddingNew: false,
  }

addNewFood = (event) => {
  const {isAddingNew} = this.state;
    this.setState ({
   isAddingNew: !isAddingNew
  })
 } 


handleInputChange = (event) => {
  event.preventDefault();
  const {name, value} = event.target
  this.setState({
    [name]:value
  })
}

handleSubmit = (event) => {
  event.preventDefault();
  const {name , calories, image, foods} = this.state;
  const foodsCopy = [...foods];
  const newFood = {name, calories, image}
  foodsCopy.push(newFood)
  this.setState ({
    foods: foodsCopy,
    name: '',
    calories: '',
    image: '',
  },()=>{this.addNewFood()})
}

  render() {
    const {name , calories, image, foods, isAddingNew} = this.state
    return (
      <>
       <button onClick={this.addNewFood}>Add new food</button>
      { isAddingNew ? (<div>
      <form onSubmit = {this.handleSubmit}>
      <label htmlFor="name">name</label>
      <input onChange= {this.handleInputChange} name="name" id="name" type="text" placeholder="food name" value={name}/>
      <label htmlFor="calories">calories</label>
      <input onChange= {this.handleInputChange} name="calories" id="calories" type="number" placeholder="food calories" value={calories}/>
      <label htmlFor="image">image</label>
      <input onChange= {this.handleInputChange} name="image" id="image" type="text" placeholder="imageurl" value={image}/>
      <button> Submit new food </button>
      </form>
      <Foodbox foods={foods} />
      </div>) : null}
     </>
    )}
    
}

export default Button;