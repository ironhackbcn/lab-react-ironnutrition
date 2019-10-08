import React, { Component } from "react";

class FoodBox extends Component {
  state = {
    visible: true,
    name: "",
    quantity: 0,
    calories: 0
  };

  handleChangeQty = event => {
    if (event.target.value >= 0)
      this.setState({ quantity: event.target.value });
  };

  AddingFoodToday = () => {
    if (this.state.quantity > 0) {
      const newQ = this.state.quantity;
      console.log('name',this.props.name);
      this.setState({ name: this.props.name,quantity: newQ,calories: this.props.calories},()=>{this.props.AddFoodToday(this.state);});
   }
  };

  render() {
    const { name, image, calories } = this.props;
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
                  onChange={this.handleChangeQty}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={this.AddingFoodToday}
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
