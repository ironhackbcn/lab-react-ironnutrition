import React, { Component } from 'react';
import TodayItem from './todayItem';

export default class todayList extends Component {

  calcCalories = () => {
    return this.props.select.reduce((sum, food) => { return sum + food.calories; }, 0);
  }

  render() {
    return (
      <div className="column content">
        <h2 className="subtitle">Today's foods</h2>
        <ul>
          {this.props.select.map((element, index) => {
            return <TodayItem key={index} index={index} food={element} delete={this.props.remove}/>
          })}          
        </ul>
        <strong>Total: {this.calcCalories()} cal</strong>
      </div>
    )
  }
}
