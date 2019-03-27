import React, { Component } from 'react';

const imageStyle = {
  'max-width': '7em'
}

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
    console.log(`TODO: add ${this.state.quantity} ${this.props.name}'s to the cart`)
  }

  render() {
    return (
      <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.image} alt='' style={imageStyle}/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.name}</strong><br/>
                  <small>{this.props.calories}</small><br/>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    min="1" 
                    value={this.state.quantity}
                    onChange={this.quantityChanged}/>
                </div>
                <div className="control">
                  <button className="button is-info" onClick={this.addToCart}>
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
  