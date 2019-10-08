import React, { Component } from "react";

class FormAddFood extends Component {
  state = {
    name: "",
    calories: 0,
    image: "/images/default.png",
    quantity: 0
  };

  handlerFormSubmit = event => {
    event.preventDefault();
    this.props.handleAddFood(this.state);
    /* and reset */
    this.setState({ name: "", calories: 0, image: "", quantity: 0 });
    this.props.OnOffvisibleSearchNFindFood();
    this.props.OnOffAddfood();
  };

  handleOnOffFormShow = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  };

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { name, calories, image } = this.state;
    const { OnOffvisibleSearchNFindFood, OnOffAddfood } = this.props;

    return (
      <div>
        <form
          onSubmit={this.handlerFormSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => this.handleChange(e)}
          />
          <label>Calories:</label>
          <input
            type="number"
            name="calories"
            value={calories}
            onChange={e => this.handleChange(e)}
          />
          <label>Image:</label>
          <input
            type="text"
            name="image"
            value={image}
            placeholder="...Url"
            onChange={e => this.handleChange(e)}
          />
          <img src={image === "" ? "/images/default.png" : image} alt="food" />
          <div>
            <input className="Button" type="submit" value="Add" />
          </div>
          <button
            className="Button"
            onClick={() => {
              OnOffvisibleSearchNFindFood();
              OnOffAddfood();
            }}
          >
            Back w/o Add
          </button>
        </form>
        <div></div>
      </div>
    );
  }
}

export default FormAddFood;
