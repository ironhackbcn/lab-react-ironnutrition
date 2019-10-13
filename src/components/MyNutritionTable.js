import React, { Component } from "react";

class MyNutritionTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    };
  }
  render() {
    const myNutritionList = this.props.myNutrition;
    const calculator =
      myNutritionList.length > 0 ? (
        myNutritionList.reverse().map((food, index) => {
          return (
            <li key={index}>
              {food.quantity} {food.name} ={" "}
              {food.quantity > 1
                ? food.quantity * food.calories
                : food.calories}
              cal
            </li>
          );
        })
      ) : (
        <p>No items</p>
      );
    let calories = 0;
    const total = myNutritionList.forEach(food => {
      calories +=
        food.quantity > 1 ? food.calories * food.quantity : food.calories;
    });
    console.log(total);
    return (
      <div className="nutrition-containter">
        <ul>{calculator}</ul>
        <p>
          Total: {calories.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} cal
        </p>
      </div>
    );
  }
}

export default MyNutritionTable;
