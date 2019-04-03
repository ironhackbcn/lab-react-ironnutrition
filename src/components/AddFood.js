import React, { Component } from 'react';

class AddFood extends Component {
  
  state = {
    name: '',
    image: '',
    calories: '',
    quantity: 1,
  
    
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  

  handleAdd = (e) => {
    const { name, image, calories, quantity } = this.state;
    const { addToList }= this.props;
    const newFoods =  {name, image, calories, quantity} 
   
    addToList(newFoods)
    this.setState({
      name: '',
      image: '',
      calories: '',
      quantity: '',
      
      
    })
  }

  render() {
    
    return  (
      <div>
        <label>Name: </label>
        <input 
          name="name" 
          value={this.state.name} 
          onChange={this.handleInput}></input>
        <label>Image: </label>
        <input 
          name="image" 
          value={this.state.image} 
          onChange={this.handleInput}></input>
        <label>Calories: </label>
        <input 
          name="calories" 
          value={this.state.calories} 
          onChange={this.handleInput}></input>
        <label>Quantity: </label>
        <input 
          name="calories" 
          value={this.state.quantity} 
          onChange={this.handleInput}></input>
         <button onClick={this.handleAdd}>Submit</button>
    
      
      </div>
    );
  }
}

export default AddFood;