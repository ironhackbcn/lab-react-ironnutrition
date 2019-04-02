import React, { Component } from 'react';

class NewFood extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:'',
      calories:0,
      imageUrl:'',
      quantity:0
    }
  }
  
  handleInputChange = (e) => {
    let { name, value } = e.target;
    this.setState({[name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addNewItem(this.state);
    this.props.displayForm();
  }

  render() {
    const {addNewItem} = this.props;
    return (
      <div>
        <form>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleInputChange(e)} />

          <label>Calories:</label>
          <input type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleInputChange(e)}/>

          <label>Image url:</label>
          <input type="text" name="imageUrl" checked={this.state.imageUrl} onChange={(e) => this.handleInputChange(e)}/>
          
          <label>Quantity:</label>
          <input type="number" name="quatity" value={this.state.quantity} onChange={(e) => this.handleInputChange(e)}/>
          
          <input type="submit" value="Submit" onClick={(e)=>this.handleSubmit(e)}/>
      </form>
      </div>
    );
  }
}

export default NewFood;