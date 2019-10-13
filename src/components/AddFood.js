import React, { Component } from "react";

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", calories: 0, image: "", quantity: 1 };
  }

  handleChange = event => {
    this.setState(
      {
        [event.target.name]:
          event.target.type === "number"
            ? parseInt(event.target.value)
            : event.target.value
      },
      () => console.log(this.state)
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    const { newFood, visibility } = this.props;
    newFood(this.state);
    this.setState({ name: "", calories: 0, image: "", quantity: 1 }, () =>
      visibility()
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>New food:</div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label>Calories:</label>
        <input
          type="number"
          name="calories"
          value={this.state.calories}
          onChange={this.handleChange}
        />
        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={this.state.image}
          onChange={this.handleChange}
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default AddFood;
