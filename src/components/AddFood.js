import React, { Component } from "react";

class AddFood extends Component {
  state = {
    name: "",
    calories: "",
    image: ""
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
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={this.handleAddFood}></input>
        <label>Calories</label>
        <input
          type="text"
          name="calories"
          onChange={this.handleAddFood}
        ></input>
        <label>Url Image</label>
        <input type="text" name="image" onChange={this.handleAddFood}></input>
        <img
          src={this.state.image}
          alt="whatever"
          style={{ width: "64px" }}
        ></img>
        <button onClick={this.handleInf}>Add food</button>
      </div>
    );
  }
}

export default AddFood;
