import React, { Component } from "react";

class FoodBox extends Component {
  constructor(props) {
    super();
    this.state = {
      quantity: props.quantity
    };
    this.handleQuantity = this.handleQuantity.bind(this);
  }

  //dato que pasa al padre, ingredient and quantity

  handleQuantity(event) {
    console.log(event.target.value);
    this.setState({
      quantity: event.target.value
    });
  }

  render() {
    const { quantity } = this.state;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={quantity}
                  onChange={this.handleQuantity}
                />
              </div>
              <div className="control">
                <button className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
