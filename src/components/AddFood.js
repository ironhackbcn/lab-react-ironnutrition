import React, { Component } from "react";

class AddFood extends Component {

  state = {
    name: '',
    calories: 0,
    image: '',
    quantity: 1,
  }

  handleInput = (e) => {
    console.log(e.target)
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  //Otra forma de hacerlo con desestructuracion:
  // handleInput = (e) => {
  //   console.log(e.target)
  //   let { name, value } = e.target;
  //   this.setState({
  //     [name]: value,
  //   })
  // }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addFoodHandler(this.state);   
    this.setState({
      name: '',
      calories: 0,
      img: '',
      quantity: 1,
    })  
  }

  render() {
    return this.props.showForm && (
      <div>
      <form onSubmit={this.handleFormSubmit}>
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

