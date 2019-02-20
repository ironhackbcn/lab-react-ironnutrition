import React, { Component } from 'react'

class Form extends Component {
  state = {
    clicked: false,
  }
  
  handleClick = () => {
    const { clicked } = this.state;
    this.setState({
      clicked: !clicked,
    })
  }

  handleAddFood = (name, calories, url) => {
    this.props.referenceAddFood(name, calories, url);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit= (e) => {
    e.preventDefault();
    const { name, calories, url } = this.state;
    this.handleAddFood(name, calories, url);
    this.setState({
      name: '',
      calories: '',
      url: '',
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Add Food</button>

        {(this.state.clicked ?
          <div>
            <input type="text" onChange={this.handleChange} name="name" placeholder="Name" value={this.state.name} />
            <input type="text" onChange={this.handleChange} name="calories" placeholder="Calories" value={this.state.calories} />
            <input type="text" onChange={this.handleChange} name="url" placeholder="ImageURL" value={this.state.url} />
            <button onClick={this.handleSubmit}>Add new Food</button>
          </div>
          : null)}
      </div>
    )
  }
}



export default Form;
