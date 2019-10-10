import React, { Component } from 'react';

export default class TodaysFoodItem extends Component {
  render() {
    const { name, calories, quantity } = this.props;
    return (
      <li>
        <div>
          {quantity} {name} = {calories} cal
        </div>
        <div></div>
      </li>
    );
  }
}
