import React, { Component } from 'react'

export default class todayItem extends Component {
  render() {
    return (
      <li className="columns">
      <div className="column">
        {this.props.food.quantity} {this.props.food.name} = {this.props.food.calories} cal
      </div>
      <div className="column">
        <button onClick={()=>{ this.props.delete(this.props.index) }}><i className="fas fa-trash"></i></button>
      </div>
      </li>
    )
  }
}
