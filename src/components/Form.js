import React, { Component } from 'react'

class Form extends Component {

  state = {
    foodInput: {
      name: '',
      calories: '',
      image: '',
    },
  }

  handleInputName = (e) => {
    this.setState({
      foodInput: {
        ...this.state.foodInput,
        name: e.target.value,
      },
    })
  }

  handleInputCalories = (e) => {
    this.setState({
      foodInput: {
        ...this.state.foodInput,
        calories: e.target.value,
      },
    });
  }

  handleInputImage = (e) => {
    this.setState({
      foodInput: {
        ...this.state.foodInput,
        image: e.target.value,
      },
    });
  }

  handleClick = () => {
    const { foodInput } = this.state; 
    const { addItemHandler, hideFormHandler } = this.props; 
    console.log(foodInput);
    addItemHandler(foodInput);
    hideFormHandler();
    this.setState({
      foodInput: {
        name: '',
        calories: '',
        image: '',
      }
    });
  }
  
  render() {
    

    return (
      <div className="form">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="name" onChange={this.handleInputName}></input>
          </div>
        </div>

        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input className="input" type="text" placeholder='calories' onChange={this.handleInputCalories}></input>
          </div>
        </div>

        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input className="input" type="text" placeholder='imageUrl' onChange={this.handleInputImage}></input>
          </div>
        </div>

        <div className="control">
          <button className="button is-primary" onClick={this.handleClick}>Submit</button>
        </div>
      </div>
    )
  }
}

export default Form;
