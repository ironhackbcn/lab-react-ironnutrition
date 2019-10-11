import React, { Component } from "react";

class AddFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>New food:</div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <label>Calories:</label>
        <input
          type="number"
          name="calories"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default AddFood;
