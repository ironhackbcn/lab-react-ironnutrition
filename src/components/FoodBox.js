import React, { Component } from 'react';
import 'bulma/css/bulma.css';


class FoodBox extends Component {
  state = {
    quantity: 1,
  }

  handleQuantity = (event) => {
    this.setState({
      quantity: event.target.value,
    })
  }

  addToday = (event) => {
    const { name, calories } = this.props
    
    const todayFoodDish = {
      name,
      calories,
      quantity: this.state.quantity
    }

    this.props.addToday(todayFoodDish);
  }
  
  render() {
    const { img, name, calories } = this.props

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={img} alt=""/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number" 
                  defaultValue="1"
                  onChange={this.handleQuantity}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.addToday}>
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

export default FoodBox;