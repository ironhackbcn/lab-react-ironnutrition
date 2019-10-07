import React, { Component } from "react";

class FormAddFood extends Component {
  state = {
    name: "",
    calories: 0,
    image: "/images/default.png",
    quantity: 0,
    visible:false,
  };

  handleOnOffFormShow=() => {
    const {visible} = this.state;
    this.setState({visible:!visible});
  }
  render() {
    const { name, calories, image, quantity, visible } = this.state;
    const { visibleFoodSearched, visibleForm } = this.props;

    return (
      <div>
        {visibleForm ? this.handleOnOffFormShow() : null }
        {visible ? 
        ( <form onSubmit={this.handlerFormSubmit}>
          <label for="name">Name:</label>
          <input type="text" name="name" value={name} />
          <label for="calories">Calories:</label>
          <input type="number" name="calories" value={calories} />
          <label for="image">Image:</label>
          <input type="text" name="image" value="" placeholder="...Url" />
           <img src={image} alt="food" />
          <label for="quantity">Quantity:</label>
          <input type="number" name="quantity" value={quantity} />
          <div>
            <input type="submit" value="Add" />
          </div>
          <div>
          <button onClick={() => {visibleFoodSearched()}} value="Back w/o Add" />
          </div>
        </form>
         ) : null }
      </div>);
  }
}

export default FormAddFood;
