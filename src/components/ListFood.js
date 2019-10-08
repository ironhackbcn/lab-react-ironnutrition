import React, { Component } from "react";

class ListFood extends Component {

  render() {
      const { food, index } = this.props;
    return (
        <>
            <div className="foods-today" key={`food-${index}`}>
                {food.quantity} {food.name} = {food.calories} calories

            </div>
        </>
    );
  }
}

export default ListFood;