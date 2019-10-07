import React, { Component } from 'react';

export class Todays extends Component {

  handleTotalCalories() {
    const { foodToday } = this.props;
    return foodToday.reduce((acc, currentFood) => acc += (currentFood.calories * currentFood.quantity), 0);
  }

  render() {
    const { foodToday } = this.props;

    return (
      <>
        {
          foodToday.map((food, index) => {
            return <li>{`${food.quantity} ${food.name} = ${food.calories * food.quantity} cal`}</li>
          })
        }
       <p>Total: {`${this.handleTotalCalories()} cal`}</p>
      </>
    );
  }
}

export default Todays;