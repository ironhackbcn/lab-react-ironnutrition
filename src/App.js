import React, { Component } from 'react';
import './App.css';
import foods from './data/foods.json'
import FoodBox from "./components/FoodBox";
import Button from "./components/Button";
import FormAddFood from "./components/FormAddFood";

class App extends Component {

  state = {
    foods: foods,
    formVisbility: false,
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
  changeVisibility = () =>{
    const { formVisbility } = this.state;
    this.setState({
        formVisbility: !formVisbility
    });
    console.log(this.state.formVisbility);
  }
  HandleAddFood = (name, calories, image) =>{
   const updateFoods = {
      name: name,
      calories: calories,
      image: image,
    }
    this.setState({
      foods: [updateFoods, ...foods]
    })
  }
  render() {
    const { visibility } = this.state;
    return (
      <div className="App">
        <div className="addFood">
            <Button myFunction={this.changeVisibility}>Add Food</Button>
            <div>
              {this.state.formVisbility === true ?
               <FormAddFood formSend={this.HandleAddFood}></FormAddFood> : null
              }
            </div>
        </div>
        <div className="AllFoods">
            {this.listAllFoods()}
        </div>
      </div>
    );
  }
}

export default App;
