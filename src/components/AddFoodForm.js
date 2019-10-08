import React, { Component } from "react";

class AddFoodForm extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      calories: "",
      image: "",
      quantity: "0"
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddFood(this.state);
    console.log("sending data");
  }

  render() {
    // const { name, calories } = this.state;
    return (
      <form className="add-food" onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              onChange={this.handleInput}
              placeholder="Food's name"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="calories"
              onChange={this.handleInput}
              placeholder="0"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="file has-name">
            <div className="control">
              <label className="file-label">
                <input
                  className="file-input"
                  type="file"
                  onChange={this.handleInput}
                  name="image"
                />
                <span className="file-cta">
                  <span className="file-label">Upload an image</span>
                </span>
                <span className="file-name">bananas.jpg</span>
              </label>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddFoodForm;
