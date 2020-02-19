import React, { Component } from 'react'

class FoodCard extends Component {
  state = {
    ingredients: '',
    newQuantity:1,
  }
  
  handleQuantity = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
  
  
  render() {
    const {index , food, addIngredient} = this.props;
    const {newQuantity} = this.state;
    return (
      <article className="media" key={index}>
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.image} alt={food.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input"
                type="number" 
                id="newQuantity" 
                name="newQuantity" 
                value={newQuantity}
                onChange = {this.handleQuantity}
              />
            </div>
            <div className="control">
              <button onClick={(event)=>{addIngredient(event, newQuantity, food.name, food.calories)}} className="button is-info">
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    )
  }
}

export default FoodCard;
