import React, { Component } from "react";
import "./FoodBox.css";

class FoodBox extends Component {
  state = {
    quantityFood: 1,
  };
  handleNumberFood = event => {
    const newQuantity = event.target.value;
    console.log(newQuantity);
    this.setState({
      quantityFood: newQuantity,
    });
  };

  render() {
    const { id, name, calories, image, onListElement } = this.props;
    const quantity = this.state.quantityFood;
    console.log("TCL: FoodBox -> render -> quantity", quantity);

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} />
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
                  onChange={this.handleNumberFood}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={() => {
                    onListElement(name, calories, quantity);
                  }}
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
