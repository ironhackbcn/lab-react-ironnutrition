import React, { Component } from 'react';
import TodaysFoodItem from './TodaysFoodItem';

export default class TodaysFoodList extends Component {
  render() {
    return (
      <div>
        <h2>Today's foods</h2>
        <ul>
          {this.props.todaysFoodList.map((food, index) => {
            return (
              <TodaysFoodItem
                key={`${food[0]}-${index}`}
                name={food.name}
                image={food.image}
                calories={food.calories}
                food={food}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
