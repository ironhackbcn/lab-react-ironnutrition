import React, { Component } from "react";
import FoodBox from "./FoodBox";

class SearchedFood extends Component {
  state = { visible: true };

  hanleOnOffSearchedFood = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  };
  
  render() {
    const { sfood, AddFoodToday} = this.props;
    
    return (
      <div>
        {sfood.map((food, index) => {
          return (
            <div key={`${index}`}>
              <FoodBox sfoodUnits={sfood.length}
                name={food.name}
                image={food.image}
                calories={food.calories}
                AddFoodToday={AddFoodToday}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default SearchedFood;
