import React, { Component } from "react";

class ListFood extends Component {
  render() {
    const { id, name, calories, quantity } = this.props;
    const totalCalory = calories * quantity;
    return (
      <div>
        {quantity} x {name}-{calories} cal - total Calories {totalCalory}
      </div>
    );
  }
}

export default ListFood;
