import React, { Component } from 'react'

class FoodBoox extends Component {

  state = {};

  handleClick = () => {
    if (this.state.quantity) {
      this.props.referenceDailyFood(this.props.name, parseInt(this.state.quantity));
      this.setState({
        quantity: '',
      });
    };
  }

  handlePress = (e) => {
    if (e.charCode === 13) {
      this.props.referenceDailyFood(this.props.name, parseInt(this.state.quantity));
      this.setState({
        quantity: '',
      });
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt={this.props.name} />
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
                  onChange={this.handleChange}
                  name="quantity"
                  value={this.state.quantity}
                  placeholder="quantity"
                  onKeyPress={this.handlePress}
                />
              </div>
              <div className="control">
                <button onClick={this.handleClick} className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default FoodBoox;
