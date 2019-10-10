import React, { Component } from 'react';
import './FoodBox.css';

export default class FoodBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: this.props.quantity,
    };
  }

  handleChange = e => {
    this.setState({
      quantity: e.target.value,
    });
  };
  
  handleClick = e => {
    const AddedFood = Object.assign({}, this.props.food);
    this.props.addToList(AddedFood);
  };

  render() {
    const { name, calories, image } = this.props;

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories}</small>
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
                  onChange={this.handleChange}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.handleClick}>
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
