import React, { Component } from 'react';

export default class TodaysFoodList extends Component {
  render() {
    const { name, calories, image, quantity } = this.props;

    return (
      <div>
        <h2>Today's foods</h2>
        <ul>
          <li>{name}</li>
        </ul>
      </div>
    );
  }
}
