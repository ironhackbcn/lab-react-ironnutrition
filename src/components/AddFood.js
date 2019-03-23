import React, { Component } from 'react';

class AddFood extends Component {

  constructor(props){
    super(props);

    this.state = { 
      name: '',
      calories: 0,
      img: '',
      quantity: 1,
    }
}

  render() {
    return (
      <div>
      <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="name" value={this.state.name} />

          <label>Calories:</label>
          <input type="Number" name="calories" value={this.state.calories} />

          <label>Image:</label>
          <input type="text" name="img" checked={this.state.img} />
          
          <label>Quantity:</label>
          <input type="Number" name="quantity" value={this.state.quantity} />
          
          <input type="submit" value="Submit" />
      </form>
    </div>
    )
  }
  
}


export default AddFood;