import React, { Component } from 'react'

class ListRow extends Component {
  render() {
    return (
      <li>
        <span>{this.props.quantity} </span>
        <span>{this.props.name} = </span>
        <span>{this.props.calories} cal</span>
      </li>
    )
  }
}

export default ListRow;
