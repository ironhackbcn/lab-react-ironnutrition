import React, {Component} from "react";
import FoodBox from "./FoodBox";

class SearchedFood extends Component {
    render (){
        const {sfood} = this.props;
        return (<div>
            {
            sfood.map((food, index) => {
                return (
                  <div key={`${index}`}>
                    <FoodBox
                      name={food.name}
                      image={food.image}
                      calories={food.calories}
                    />
                  </div>
                );
              })}
        </div>)
    }
}

export default SearchedFood;