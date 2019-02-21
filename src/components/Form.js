import React, { Component } from 'react'

export default class Form extends Component {

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleClick = () => {
    const foodItem = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
    };
    const { addFood } = this.props;
    const { createForm } = this.props;
    addFood(foodItem);
    createForm();
    this.setState({
      name: '',
      calories: '',
      image: '',
    })
  } 

  render() {
    return (
      <div>
        <input type="text" placeholder="Name" onChange={this.handleChange} name="name" />
        <input type="text" placeholder="No. of calories" onChange={this.handleChange} name="calories" />
        <input type="text" placeholder="Pic URL" onChange={this.handlePicInput} name="image" />
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }
}
