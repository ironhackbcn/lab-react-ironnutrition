import React, { Component } from 'react';

export default class FoodForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      calories: '',
      image: '',
      quantity: ''
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addTheFood(this.state);
    //Reset state
    this.setState({ name: '', calories: '', image: '', quantity: '' });
  };

  handleChange(event) {
    event.preventDefault();
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          ></input>
          <br></br>
          <label>Calories</label>
          <input
            name="calories"
            type="text"
            value={this.state.calories}
            onChange={(e) => this.handleChange(e)}
          ></input>
          <br></br>
          <label>Image</label>
          <input
            name="image"
            type="file"
            value={this.state.image}
            onChange={(e) => this.handleChange(e)}
          ></input>
          <br></br>
          <label>Quantity</label>
          <input
            name="quantity"
            type="text"
            value={this.state.quantity}
            onChange={(e) => this.handleChange(e)}
          ></input>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
