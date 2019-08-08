import React, {Component} from 'react'

export default class ListFoodToday extends Component {
  render() {
    const foods = [...this.props.foods];
    let suma = 0;
    console.log(foods)
    return (
      <div>
        <h2>Today's foods</h2>
        <ul>
          {foods.map((elem, index) => {
            {suma += elem.calories*elem.quantity}
            return (
              <li key={index}>
                <p>{elem.quantity} {elem.name} = {elem.calories*elem} cal</p>
              </li>
              )
            })}
          <p>Total:{suma} cal</p>
        </ul>
      </div>
    )
  }
}

