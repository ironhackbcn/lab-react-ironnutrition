import React, { Component } from 'react';
import './App.css';
import foods from './data/foods.json'
import FoodBox from "./components/FoodBox";

class App extends Component {

  state = {
    foods: foods
  }

  listAllFoods = () =>{
    const { foods } = this.state;
    return (
      foods.map((foodList, index) =>{
        return(
          <FoodBox 
          key={`index - ${index}`}
          index={index}
          name={foodList.name}
          calories={foodList.calories}
          image={foodList.image}
          quantity={foodList.quantity}
        >
        </FoodBox>
        );

      })
    );
  }
  render() {
    return (
      <div className="App">
        <div className="AllFoods">
            {this.listAllFoods()}
        </div>
      </div>
    );
  }
}

export default App;
