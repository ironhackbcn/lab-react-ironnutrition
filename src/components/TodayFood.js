import React, { Component } from "react";

class TodayFood extends Component {
  render() {
    const { todayFood } = this.props;

    return (
      <div>
        <h2>Today's Food</h2>
        <ul>
          {todayFood.map((food, index) => {
            return (
              <li style={{ listStyle: "inside" }} key={`${food.name}-${index}`}>
                {`${food.quantity} x ${food.name} = ${parseInt(food.quantity) *
                  food.calories} cal.`}
              </li>
            );
          })}
        </ul>
        <p>
          Total:{" "}
          {todayFood.reduce((Acumulator, caloriesB) => {
            return Acumulator + caloriesB.calories * caloriesB.quantity;
          }, 0)}{" "}
          cal.
        </p>
      </div>
    );
  }
}

export default TodayFood;
