import React, { Component } from 'react';

export default class AddNewFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      calories: '',
      image: '',
      quantity: '',
    };
  }

  handleNameInput = e => {
    this.setState({
      name: e.target.value,
    });
  };

  handleCaloriesInput = e => {
    this.setState({
      calories: e.target.value,
    });
  };

  handleImageInput = e => {
    this.setState({
      image: e.target.value,
    });
  };

  handleQuantityInput = e => {
    this.setState({
      quantity: e.target.value,
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.addNew(this.state);
    this.setState({
      name: '',
      calories: '',
      quantity: '',
      image: '',
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Food Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleNameInput}
          />
          <br />
          <label>Food Calories:</label>
          <input
            type="text"
            name="calories"
            value={this.state.calories}
            onChange={this.handleCaloriesInput}
          />
          <br />
          <label>Food Quantity:</label>
          <input
            type="text"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleQuantityInput}
          />
          <br />
          <label>Food Image:</label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleImageInput}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
