import React, { Component } from 'react';

export default class TodaysFoodItem extends Component {
  render() {
    const { name, calories, quantity } = this.props;
    return (
      <li>
        <div>
          {quantity} {name} = {calories} cal 
          <button
            onClick={() => {
              this.props.delete(this.props.index);
            }}
          >
            X
          </button>
        </div>
      </li>
    );
  }
}
