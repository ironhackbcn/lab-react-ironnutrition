import React, { Component } from "react";

class FoodBox extends Component {
  constructor(props) {
    super();
    this.state = {
      quantity: 0,
      name: "",
      calories: ""
    };
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleCalculator = this.handleCalculator.bind(this);
  }

  handleQuantity(event) {
    const name = this.props.name;
    const calories = this.props.calories;
    this.setState({
      quantity: parseInt(event.target.value),
      name: name,
      calories: calories
    });
  }

  handleCalculator() {
    this.props.onCalculator(this.state);
  }

  render() {
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
                  value={this.state.quantity}
                  onChange={this.handleQuantity}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={this.handleCalculator}
                >
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
