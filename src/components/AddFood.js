import React, { Component } from "react";

class AddFood extends Component {
  state = {
    name: "",
    calories: "",
    image: "/images/default.jpg"
  };

  handleAddFood = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleInf = () => {
    const { name, calories, image } = this.state;
    const { myFunction } = this.props;
    if (name !== "" && calories !== "") {
      myFunction(name, calories, image);
      this.setState({ name: "", calories: "", image: "" });
    }
  };

  render() {
    return (
      <div className="control">
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="input is-small"
            type="text"
            name="name"
            onChange={this.handleAddFood}
          ></input>
        </div>
        <div className="control">
          <label>Calories</label>
          <input
            className="input is-small"
            type="text"
            name="calories"
            onChange={this.handleAddFood}
          ></input>
        </div>
        <div className="control">
          <label>Url Image</label>
          <input
            className="input is-small"
            type="text"
            name="image"
            onChange={this.handleAddFood}
          ></input>
          <img
            className="image is-64x64"
            src={this.state.image}
            alt="whatever"
            style={{ width: "64px" }}
          ></img>
        </div>
        <button className="button is-success" onClick={this.handleInf}>
          Add food
        </button>
      </div>
    );
  }
}

export default AddFood;
