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

// handleChange(event) {
//   this.setState({
//     name: event.target.name,
//     calories: event.target.name,
//     img: event.target.name,
//     quantity: event.target.name
//   });
// }

handleFormSubmit = (event) => {
  event.preventDefault();
  this.props.addFoodHandler(this.state);   
  this.setState({
    name: '',
    calories: 0,
    img: '',
    quantity: 1,
  })  
}


handleInputChange(event) {
  let { name, value } = event.target;
  this.setState({[name]: value });
}

  render() {
    return this.props.showForm &&
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="name" value={this.state.name} onChange={(e)=>this.handleInputChange(e)}/>

          <label>Calories:</label>
          <input type="Number" name="calories" value={this.state.calories} onChange={(e)=>this.handleInputChange(e)} />

          <label>Image:</label>
          <input type="text" name="img" checked={this.state.img} onChange={(e)=>this.handleInputChange(e)}/>

          <label>Quantity:</label>
          <input type="Number" name="quantity" value={this.state.quantity} onChange={(e)=>this.handleInputChange(e)}/>

          <input type="submit" value="Submit" />
        </form>
    </div>
  }
}


export default AddFood;