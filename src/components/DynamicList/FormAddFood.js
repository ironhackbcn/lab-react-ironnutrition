import React, { Component } from "react";

class FormAddFood extends Component {
  state = {
    name: "",
    calories: 0,
    image: "/images/default.png",
    quantity: 0
  };

  handlerFormSubmit=(event) => {
    event.preventDefault();
    this.props.handleAddFood (this.state);
    /* and reset */
    this.setState({name: "",
    calories: 0,
    image: "/images/default.png",
    quantity: 0});
  };

  


  handleOnOffFormShow = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  };

  handleAddName = e => {
    this.setState = { name: e.target.value };
  };
  handleAddCalories = e => {
    this.setState = { calories: e.target.value };
  };
  handleAddImage = e => {
    this.setState = { images: e.target.value };
  };

  handleAddQuantity = e => {
    this.setState = { quantity: e.target.value };
  };

  render() {
    const { name, calories, image, quantity } = this.state;
    const { OnOffvisibleSearchNFindFood, OnOffAddfood} = this.props;

    return (
      <div>
        <form onSubmit={this.handlerFormSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => 
              this.handleAddName(e)
            }
          />
          <label>Calories:</label>
          <input
            type="number"
            name="calories"
            value={calories}
            onChange={e => 
              this.handleAddName(e)
            }
          />
          <label>Image:</label>
          <input
            type="text"
            name="image"
            value=""
            placeholder="...Url"
            onChange={e => 
              this.handleAddName(e)
            }
          />
          <img src={image} alt="food" />
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={e => 
              this.handleAddName(e)
            }
          />
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
