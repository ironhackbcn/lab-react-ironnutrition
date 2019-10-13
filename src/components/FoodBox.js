import React, { Component } from "react";

class Foodbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      quantity: 1,
      calories: this.props.calories,
      id: this.props.id
    };
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleQuantity(event) {
    this.setState({
      quantity: parseInt(event.target.value),
      name: this.props.name,
      calories: this.props.calories
    });
  }
  handleAdd(event) {
    this.props.onCalculator(this.state);
    this.setState({
      quantity: 1
    });
  }
  render() {
    const { name, calories, image } = this.props;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt={name} />
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
                  onChange={this.handleQuantity}
                  min="0"
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.handleAdd}>
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

export default Foodbox;
