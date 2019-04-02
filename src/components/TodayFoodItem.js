import React, { Component } from 'react';

class TodayFoodItem extends Component {
 
  render() {
    const {item}= this.props;
    return (
      <div>
        <span>{item.quantity}</span><span>{item.name}</span><span>{item.calories} </span>
      </div>
    );
  }
}

export default TodayFoodItem;