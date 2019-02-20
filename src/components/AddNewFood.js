import React, { Component } from 'react';

class AddNewFood extends Component {
  state = {
    name: '',
    calories: '',
    image: ''
  }

  handleInputName = (e) => {
    this.setState({
      name: e.target.value,
    })
  }
  handleInputCalories = (e) => {
    this.setState({
      calories: e.target.value,
    })
  }

  handleInputImage = (e) => {
    this.setState({
      image: e.target.value,
    })
  }
  handleClick = (e) => {
    e.preventDefault()
    const { name, calories, image } = this.state;
    const newFoodArray = { name, calories, image };
    const { addToList } = this.props;
    addToList(newFoodArray)
    this.setState({
      name: '',
      calories: '',
      image: ''
    })
  }

  render() {
    return (
      <div>
        <button>
          Add new food
        </button>
        <form action="">
          <input type="text" placeholder="name" onChange={this.handleInputName} />
          <input type="text" placeholder="number of calories" onChange={this.handleInputCalories} />
          <input type="text" placeholder="image" onChange={this.handleInputImage} />
          <button type="submit" onClick={(e) => { this.handleClick(e) }} >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default AddNewFood;