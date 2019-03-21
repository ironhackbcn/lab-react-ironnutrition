import React, { Component } from 'react';

class Form extends Component {

  state = {
    name: "name",
    calories: "calories",
    image: "image url"
  }
  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  } 
 
  render() {
    const styleForm = {
      display: `${this.props.display}`,
    }
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} style={styleForm}>
          <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInput}
          />
        <input
          type="number"
          name="calories"
          value={this.state.calories}
          onChange={this.handleInput}
          />
          <input
          type="text"
          name="image"
          value={this.state.image}
          onChange={this.handleInput}
          />
          <input
          type="submit"
          value="submit"
          />
        </form>
      </div>

    )
  }
}
export default Form;