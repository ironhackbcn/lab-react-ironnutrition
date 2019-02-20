import React, { Component } from 'react';

class FoodBox extends Component {

  state = {
    quantity: 0,
  }

  handleQuantityInput = (e) => {
    this.setState({
      quantity: e.target.value,
    });
  }

  handleAddClick = () => {
    const { name, calories, addTodayListHandler } = this.props;
    const { quantity } = this.state;
    const totalCalories = calories * quantity;
    addTodayListHandler({name, totalCalories, quantity});    
  }

  render() {
    const { name, calories, image } = this.props;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt="food" />
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
                  value={this.state.quantity}
                  onChange={this.handleQuantityInput}
                ></input>
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.handleAddClick}>
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