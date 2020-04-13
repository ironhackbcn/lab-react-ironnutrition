import React, { Component } from 'react'

 class Foodbox extends Component {
  render() {
    return (
        <div className="box">
        {this.props.foods.map((food, index) => {
          return (
          <article key={index} className="media">
          <div className="media-left">
            <figure className="image is-64x64">
            <img src={food.image} alt=""/>
            </figure>
        </div>
      <div className="media-content">
      <div className="content">
        <p>
          <strong>{food.name}</strong> <br />
          <small>{food.calories} calories</small>
        </p>
      </div>
      </div>
      <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number" 
            value={food.quantity}
          />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
      </div>
      </article>
        )})}
    </div>
    )
 }
}
export default Foodbox;

