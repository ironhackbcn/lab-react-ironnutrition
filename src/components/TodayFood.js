import React, { Component } from 'react';

class TodayFood extends Component {
  render() {
    return (
      <div className="column content">
        <h2 className="subtitle">Today's foods</h2>
        <ul>
          <li>1 Pizza = 400 cal</li>
          <li>2 Salad = 300 cal</li>
        </ul>
        <strong>Total: 700 cal</strong>
      </div>
    );
  }
}

export default TodayFood;
