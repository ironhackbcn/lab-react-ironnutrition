import React, { Component } from 'react';

class TodaysFood extends Component {

  constructor(props){
    super(props);

    this.state = { 
      todaysFood: []
    }
}

  render() {
    const { name, calories, quantity } = this.props
    console.log(quantity)
    if (quantity > 1 ) {
      return (
      <div>
          <p>{quantity} {name}s</p>
          <p>{calories * quantity} Cal</p>
      </div>
     )
    } else {
      return (
        <div>
          <p>{name}</p>
          <p>{calories} Cal</p>
      </div>
      )
    }
    
  }
}


export default TodaysFood;