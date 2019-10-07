import React, { Component } from 'react';

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  handleAdd = () => {
    const { quantity } = this.state;
    const { index, name, addFood } = this.props;

    addFood({ index, quantity, name });
  };

  handleForm = (event) => {
    this.setState({
      quantity: parseInt(event.target.value),
    });
  };

  render() {
    const { image, calories, name } = this.props;
    const { quantity } = this.state;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt="img" />
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
                  onChange={this.handleForm}
                  type="number"
                  value={quantity}
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

export default FoodBox;
