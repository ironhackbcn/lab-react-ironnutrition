import React, { Component } from "react";

export default class componentName extends Component {
  state = {
    quantity: 0
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleQty = (foodName, calories, image) => {
    if (this.state.quantity > 0) {
      this.props.addFoodToday(
        foodName,
        calories,
        image,
        parseInt(this.state.quantity)
      );
    }
  };

  handleDeleteFoodToday = index => {
    this.props.deleteFoodToday(index);
  };

  render() {
    const { aFood, index } = this.props;
    return (
      <div className="box card">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={aFood.image} alt={`${aFood.name} fotography`} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <span>
                <strong>{aFood.name}</strong> {"  "}
                <small>{aFood.calories} cal.</small>
              </span>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  style={{ paddingRight: "0px" }}
                  className="input is-small"
                  type="number"
                  name="quantity"
                  onChange={this.handleChange}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info is-small"
                  onClick={() => {
                    this.handleQty(aFood.name, aFood.calories, aFood.image);
                  }}
                >
                  +
                </button>
                <button
                  className="button is-danger is-small"
                  onClick={() => {
                    this.handleDeleteFoodToday(index);
                  }}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
