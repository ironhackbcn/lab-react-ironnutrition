import React, { Component } from "react";
import Card from "./Card";

class ShowFood extends Component {
  render() {
    const { showFood, addFoodToday, deleteFood } = this.props;
    return (
      <div>
        {showFood.map((aFood, index) => {
          return (
            <div key={`${aFood.name}-${index}`}>
              <Card
                showFood={showFood}
                addFoodToday={addFoodToday}
                deleteFoodToday={deleteFood}
                aFood={aFood}
                index={index}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
export default ShowFood;
