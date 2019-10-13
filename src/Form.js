import React, { Component } from 'react';
import './Form.css';

class FoodForm extends Component {
  state = {
    name: "Curry rice",
    image: "https://www.rotinrice.com/wp-content/uploads/2011/09/Jap-Curry-Rice-1.jpg",
    calories: 545,
  }

  handleFoodInput = event => {
    this.setState({
      name: event.target.value,
    });
  }

  handleImageInput = event => {
    this.setState({
      image: event.target.value,
    })
  }

  handleCaloriesInput = (event) => {
    this.setState({
      calories: event.target.value,
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.props.submit(this.state)
  }

  render() {
    return (
      <form className="add-food-form" onSubmit={this.handleFormSubmit}>
        <label>Food name:</label>
        <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleFoodInput(e)} /><br></br>

        <label>Image url:</label>
        <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleImageInput(e)} /><br></br>

        <label>Number of calories:</label>
        <input type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleCaloriesInput(e)} /><br></br>

        <input type="submit" value="Submit" />
      </form>
    );
  };
}


export default FoodForm;