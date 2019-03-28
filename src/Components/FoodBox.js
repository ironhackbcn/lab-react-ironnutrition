import React, { Component } from 'react';
import 'bulma/css/bulma.css'

class FoodBox extends Component {
  
  state = {
    quantity: 1,
  }

  quantityChanged = (event) => {
    const quantity = event.target.value;
    this.setState({
      quantity
    });
  }

  addToCart = () => {
    this.props.addToCart(this.state.quantity, this.props.name, this.props.calories)
  }

  render() {
    return (
      <div className="media">
          <article className="foodContainer">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.image} alt=''/>
              </figure>
            </div>
            <div className="media-content">
              <div className="control">
                <p>
                  <strong>{this.props.name}</strong><br/>
                  <small>{this.props.calories}</small><br/>
                </p>
              </div>
            </div>
            <div className="">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input additionHeight"
                    type="number"
                    min="1" 
                    value={this.state.quantity}
                    onChange={this.quantityChanged}/>
                </div>
                <div className="control">
                  <button className="button is-info additionHeight" onClick={this.addToCart}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
      </div>
    );
  }
}
  
export default FoodBox;
  