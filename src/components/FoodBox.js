import React, { Component } from 'react';
import Food from './Food';
class FoodBox extends Component {
  render() {
   
    return this.props.foodBox.map((food, index) => {
      return <Food key={`id-${index}`} food={food} indice={index}/>
    })
   
  }
}

export default FoodBox;