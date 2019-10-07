import React, { Component } from 'react';
import foods from '../data/foods.json'

class ListFood extends Component {

  state = {
    quantityFood: 1
  }

  handlequantity = e => {
    const updateQuantity = e.target.value;
    this.setState({
      quantityFood: updateQuantity
    });
  }
  render() {
    const {name, image, calories, index, quantity} = this.props;
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
                defaultValue="1"
                onChange={this.handlequantity}
              />
            </div>
            <div className="control">
              <button className="button is-info">
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

export default ListFood;
