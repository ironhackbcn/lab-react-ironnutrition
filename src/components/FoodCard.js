import React, { Component } from 'react'

class FoodCard extends Component {
  state = {
    ingredients: '',
    newQuantity:1,
    name:this.props.food.name,
    calories:this.props.food.calories,
    addFood : {},
  }
  //cómo paso addFood al padre?

  addIngredient = (event) => {
    event.preventDefault();
    const {newQuantity, name, calories} = this.state;
    const addFoodCopy = {
      name,
      calories,
      newQuantity
    }
    this.setState({
      addFood:addFoodCopy
    })
  }

  handleQuantity = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
  
  render() {
    const {index , food} = this.props;
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
              <button onClick={this.addIngredient} className="button is-info">
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
