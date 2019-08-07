import React, { Component } from 'react'

class Form extends Component {

  render(){
    const {name,calories,image} = this.props
    return (
      
      <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input 
              className="input"
              type="text" 
              id="name" 
              name="name" 
              placeholder="Pasta" 
              value={name}
              onChange = {this.handleInputChange}
            />
  
            <label htmlFor="calories">Calories</label>
            <input 
              className="input"
              type="number" 
              id="calories" 
              name="calories" 
              placeholder="120" 
              value={calories}
              onChange = {this.handleInputChange}
            />
  
            <label htmlFor="name">Image</label>
            <input 
              className="input"
              type="text" 
              id="image" 
              name="image" 
              placeholder="http://www.google.com/image-url" 
              value={image}
              onChange = {this.handleInputChange}
            />
            <button className="button is-info">+ Add</button>
          </form>
    )
  }
}

export default Form;