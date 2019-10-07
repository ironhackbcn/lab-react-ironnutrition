import React, { Component } from "react";

class FormAddFood extends Component {
  state = {
    name: "",
    calories: 0,
    image: "/images/default.png",
    quantity: 0
  };

  handleOnOffFormShow = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  };
  render() {
    const { name, calories, image, quantity } = this.state;
    const {
      onoffShowAll,
      OnOffvisibleSearchNFindFood,
      OnOffAddfood
    } = this.props;

    return (
      <div>
        <form onSubmit={this.handlerFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={name} />
          <label>Calories:</label>
          <input type="number" name="calories" value={calories} />
          <label>Image:</label>
          <input type="text" name="image" value="" placeholder="...Url" />
          <img src={image} alt="food" />
          <label>Quantity:</label>
          <input type="number" name="quantity" value={quantity} />
          <div>
            <input className="Button" type="submit" value="Add" />
          </div>
          <button
            className="Button"
            onClick={() => {
              OnOffvisibleSearchNFindFood();
              OnOffAddfood();
            }}>Back w/o Add</button>
        </form>
        <div>
         
        </div>
      </div>
    );
  }
}

export default FormAddFood;
