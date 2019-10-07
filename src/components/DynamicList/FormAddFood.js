import React, { Component } from "react";

class FormAddFood extends Component {
  state = {
    name: "",
    calories: 0,
    image: "/images/default.png",
    quantity: 0
  };

  render() {
    const { name, calories, image, quantity} = this.state;
    const {visibleButton} = this.props;
    return (
      <div>
        <form onSubmit={this.handlerFormSubmit}>
          <label for="name">Name:</label>
          <input type="text" name="name" value={name} />
          <label for="calories">Calories:</label>
          <input type="number" name="calories" value={calories} />
          <label for="image">Image:</label>
          <input type="text" name="image" value="" placeholder="...Url" />
          {/* Here is the image of a food or by default a standard photo */}
          <img src={image} alt="food" />
          <label for="quantity">Quantity:</label>
          <input type="number" name="quantity" value={quantity} />
          <div>
          <input type="submit" value="Add"/>
          <input type="button" onclick={()=>{visibleButton()}} value="Back w/o Add"/>
          </div>
        </form>
      </div>
    );
  }
}

export default FormAddFood;
