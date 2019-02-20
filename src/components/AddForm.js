import React, { Component } from 'react'


export default class AddForm extends Component {
  state = {
    name: '',
    image: '',
    calories: '',
  }
  
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleClickAdd = (e) => {
    const { name, image, calories } = this.state;
    const {addToList }= this.props;
    let newFoods =  {name, image, calories} // the line below is the same
    // const newFoods = []
    // foods.forEach((item) => {
    //   newfoods.push(item);
    // })
    // newFoods.push(name, image, calories)
    addToList(newFoods)
    this.setState({
      name: '',
      image: '',
      calories: '',
    })
  }

  render() {
    return (
      <div>
        <input type="text"  value={this.state.name} name='name' placeholder='name' onChange={this.handleInput}/>
        <input type="text"  value={this.state.imageUrl} name='imageUrl' placeholder='imag URL' onChange={this.handleInput}/>
        <input type="text"  value={this.state.calories}name='calories' placeholder='calories' onChange={this.handleInput}/>
        <button type='submit' onClick={this.handleClickAdd}>Add</button>
      </div>
    )
  }
}
