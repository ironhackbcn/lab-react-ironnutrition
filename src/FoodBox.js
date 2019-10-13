import React, { Component } from 'react';

class FoodBox extends Component {
  state = {
    quantity: this.props.initialQuantity,
  }

  addQuantity = (e) => {
    e.preventDefault()
    const newQuantity = parseInt(e.target.value);
    this.setState({
      quantity: newQuantity,
    })
  }

  handleClick = (e) => {
    const { index, action, name, calories } = this.props;
    const { quantity } = this.state;
    action(index, quantity, name, calories);
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt="food display" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories}</small>
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
                  onChange={this.addQuantity}
                />
              </div>
              <div className="control">
                <button className="button is-info"
                  onClick={this.handleClick}
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