import React, { Component } from 'react';

class AddFood extends Component {
  
  state = { 
    name: '',
    calories: '',
    img: 'http://images.bigoven./image/upload/t_recipe-256/great-guacamole-db44f3.jpg',
    quantity: '',
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

   
  handleSubmitFood = (event) => {
    event.preventDefault();
    console.log('Adding food')
    const { name, calories, img, quantity } = this.state
    const newFood = {
      name,
      calories,
      img,
      quantity
    }
    this.props.addFood(newFood);

    this.setState({
      name: '',
      calories: '',
      quantity: '',
    })
  }
  
  render() {
    return (
      <div>
      <form onSubmit={(event) => this.handleSubmitFood(event)}>
        <label>Name:</label>
        <input 
          type="text" 
          value={this.state.name}
          name="name" 
          onChange={this.handleInput}
        />

        <label>Calories:</label>
        <input 
          type="Number" 
          value={this.state.calories}
          name="calories" 
          onChange={this.handleInput} 
        />

        {/* <label>Image:</label>
        <input 
          type="text" 
          name="img" 
          checked={this.state.img} 
          onChange={this.handleInput}
        /> */}
        
        <label>Quantity:</label>
        <input 
          type="Number" 
          name="quantity" 
          value={this.state.quantity}
          onChange={this.handleInput} 
        />
        
        <button
          type='submit' 
        >Submit</button>
      </form>
    </div>
    )
  }
  
}


export default AddFood;