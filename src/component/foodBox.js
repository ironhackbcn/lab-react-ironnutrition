import React, { Component } from 'react'

export default class foodBox extends Component {

  state = {
    quantity: this.props.food.quantity,
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    if (value >= 0){
      this.setState({
        [name]: value,
      });
    }
  }

  handleClick = (e) => {
    if (this.state.quantity > 0){
      const auxFood = Object.assign({}, this.props.food);
      auxFood.quantity = this.state.quantity;
      auxFood.calories = auxFood.quantity * auxFood.calories;
      this.props.addToList(auxFood); 
    } 
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.food.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  name='quantity' 
                  value={this.state.quantity}
                  onChange={this.handleChange}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.handleClick} >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}
