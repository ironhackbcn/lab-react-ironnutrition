import React, { Component } from 'react';

export class Total extends Component {

  handleTotal() {
    const { dishesArray } = this.props;
    return dishesArray.reduce((acc, curr) => acc += (curr.totalCal), 0);
  }



  render() {
    const { dishesArray } = this.props;

    return (
      <article className='container'>
        <h3>Today's foods</h3>
        <ul>
          {
            dishesArray.map((item, index) => {
              return <li key={`${item.name}${index}`}>{`${item.quantity} ${item.name} = ${item.totalCal}kcal`}</li>
            })
          }
        </ul>
        <p>Total: {`${this.handleTotal()}kcal`}</p>
      </article>
    );
  }
}