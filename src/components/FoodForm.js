import React, { Component } from 'react'

class FoodForm extends Component {
  state = {
    name: '',
    calories: '',
    image: ''
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, calories, image } = this.state;
    const newFood = { name, calories, image };
    this.props.handlePropsFood(newFood);
    this.props.handleShowForm();

    this.setState({
      name: '',
      calories: '',
      image: ''
    });
  }

  render() {
    const { name, calories, image } = this.state;
    return (
      <>
        <h1 className='title'>Add a new recipe</h1>
        <form onSubmit={this.handleSubmit}>
          <label className='label' htmlFor='name'>Name</label>
          <input
            className='input'
            id='name'
            type='text'
            name='name'
            placeholder='Name of the Food'
            value={name}
            onChange={this.handleInputChange}
          />

          <label className='label' htmlFor='calories'>Calories</label>
          <input
            className='input'
            id='calories'
            type='number'
            name='calories'
            placeholder='Number of Calories'
            value={calories}
            onChange={this.handleInputChange}
          />

          <label className='label' htmlFor='image'>Image</label>
          <input
            className='input'
            id='image'
            type='text'
            name='image'
            placeholder='Insert an image url'
            value={image}
            onChange={this.handleInputChange}
          />

          <button className='button'>Submit</button>
        </form>
      </>
    )
  }
}

export default FoodForm;
