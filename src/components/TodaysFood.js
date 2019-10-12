import React, { Component } from 'react';

class TodaysFood extends Component {

  constructor(props){
    super(props);

    this.state = { 
      todaysFood: []
    }
}

  handleDelete = (e) => {
    this.props.handleDelete(this.props.index);
  }

  render() {
    const { name, calories, quantity } = this.props
    if (quantity > 1 ) {
      return (
      <div>
          <p>{quantity} {name}s</p>
          <p>{calories * quantity} Cal</p>
          <button onClick={this.handleDelete}>Delete</button>
      </div>
     )
    } else {
      return (
        <div>
          <p>{name}</p>
          <p>{calories} Cal</p>
          <button onClick={this.handleDelete}>Delete</button>
      </div>
      )
    }
    
  }
}


export default TodaysFood;