import React, { Component } from 'react'

export default class addFood extends Component {

  state = {
    name: '',
    calories: '',
    image: '',
    quantity: '',
  };
  
  handleAdd = (e) => {
    this.props.new(this.state);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="column">
        <h2>New food</h2>
        <label>Name: </label>
        <input name="name" onChange={this.handleChange}></input>
        <label>Calories: </label>
        <input name="calories" onChange={this.handleChange}></input>
        <label>Image: </label>
        <input name="image" onChange={this.handleChange}></input>
        <label>Quantity: </label>
        <input name="quantity" onChange={this.handleChange}></input>
        <button onClick={this.handleAdd}>Add</button>
      </div>
    )
  }
}
