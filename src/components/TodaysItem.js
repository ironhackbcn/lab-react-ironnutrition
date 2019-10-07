import React, { Component } from 'react';

export default class TodaysItem extends Component {
  render() {
    const { food, index, removeItem } = this.props;
    return (
      <div>
        <div className="columns">
          <li className="column">
            {food.quantity} {food.name} = {food.calories} cal
          </li>
          <div className="column">
            <button
              onClick={() => {
                removeItem(index);
              }}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
