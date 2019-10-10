import React, { Component } from "react";
import { numberFormat } from "../helpers/numberFormat";

class MyNutritionTable extends Component {
  constructor(props) {
    super();
    this.state = {
      food: "",
      calories: "",
      quantity: "",
      total: ""
    };
  }
  render() {
    // const myNutritionRepeat = this.props.myNutrition.filter(food => {
    //   return (
    //     this.props.myNutrition.includes(food.name) && console.log("repetido")
    //   );
    // });
    const myNutrition = this.props.myNutrition.map((food, index) => {
      return (
        <li key={index}>
          {food.quantity} {food.name}
          {" = "}
          {food.calories * food.quantity}cal
        </li>
      );
    });
    let sumCalories = 0;
    const myNutritionTotal = this.props.myNutrition.map((food, index) => {
      return (sumCalories += this.props.calories * this.props.quantity);
    });
    console.log(this.props.myNutrition);
    return (
      <div className="nutrition-containter">
        <ul>{myNutrition}</ul>
        <p>Total: {numberFormat(myNutritionTotal)}cal</p>
      </div>
    );
  }
}

export default MyNutritionTable;
