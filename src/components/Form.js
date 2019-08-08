import React, { Component } from 'react'

class Form extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
  }

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {name, calories, image} = this.state;
    const newFood = {name, calories, image};
    this.props.handlePropsNewFood(newFood)
    this.props.handleShowForm()
    
    this.setState({
      name: '',
      calories: '',
      image: '',
    })
  }

  render() {
    const {name, calories, image} = this.state;
    return (
      <>
        <h2>Add new food </h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input 
            id="name" 
            type="text" 
            name="name" 
            placeholder="Write the food's name" 
            value={name} 
            onChange={this.handleInputChange} />
            

          <label htmlFor="calories">Calories</label>
          <input 
            id="name" 
            type="number" 
            name="calories" 
            placeholder="120" 
            value={calories}
            onChange={this.handleInputChange} />

          <label htmlFor="image">Add Image</label>
          <input 
            id="name" 
            type="text" 
            name="image" 
            placeholder="" 
            value={image}
            onChange={this.handleInputChange} />

          <button>ADD NEW FOOD</button>
        </form>
      </>
    )
  }
}

export default Form;

