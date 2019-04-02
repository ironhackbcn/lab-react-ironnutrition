import React, { Component } from 'react';
import TodayFoodItem from './TodayFoodItem';

class TodayFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter:{},
    };
  }
  
  render() {
    const {foodToday} = this.props
    return (
      foodToday.map((food, index) => {
        return <TodayFoodItem key={index} item={food} />
      })
    );
  }
}

export default TodayFood;