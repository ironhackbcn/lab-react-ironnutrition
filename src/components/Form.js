import React, { Component } from 'react'

class Form extends Component {
  state = {
    name: '',
    calories: '',
    image:'',
  }

  handleInputChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {name,calories,image} = this.state;
    const {addNewFood} = this.props;
    const newFood = {name, calories, image};

    addNewFood(newFood);

    this.setState({
      name: '',
      calories: '',
      image:'',
    })
  }

  render(){
    const {name,calories,image} = this.props
    return (
      
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
          className="input"
          type="text" 
          id="name" 
          name="name" 
          placeholder="Pasta" 
          value={this.state.name}
          onChange = {this.handleInputChange}
        />

        <label htmlFor="calories">Calories</label>
        <input 
          className="input"
          type="number" 
          id="calories" 
          name="calories" 
          placeholder="120" 
          value={this.state.calories}
          onChange = {this.handleInputChange}
        />

        <label htmlFor="name">Image</label>
        <input 
          className="input"
          type="text" 
          id="image" 
          name="image" 
          placeholder="http://www.google.com/image-url" 
          value={this.state.image}
          onChange = {this.handleInputChange}
        />
        <button className="button is-info">+ Add</button>
      </form>
    )
  }
}

export default Form;