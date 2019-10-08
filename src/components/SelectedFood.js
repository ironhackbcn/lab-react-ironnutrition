import React, { Component } from "react";
import ListFood from "./ListFood";


class SelectedFood extends Component {

    updateElementCalories = foods =>{
        return foods.reduce((calc, food) =>{
            return calc + food.calories
        }, 0);
    }
  render() {
      const { foodSelected } = this.props;
    return (
        <>
            {
                foodSelected.map((food, index) =>{
                    return(
                        <ListFood
                        key={`food-${index}`}
                        index={index}
                        foods={food}
                        calories={this.updateElementCalories}
                        >
                        </ListFood>
                    )
                })
            }
        </>
    );
  }
}

export default SelectedFood;