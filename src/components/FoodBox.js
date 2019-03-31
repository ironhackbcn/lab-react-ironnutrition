import React, { Component } from "react";

class FoodBox extends Component {

  state = {
    quantity: 1,
  }

  handleInputChange = (event) => {
    let { value } = event.target;
    value = Number(value);
    console.log('hey value', value, typeof(value))
    this.setState({
      quantity: value,
    });
  }

  // handleClick = () => {
  //   const todayFood = this.props;
  //   console.log(this.props, this.state.quantity);
  //   this.props.addTodayFood(todayFood, this.state.quantity);
  // }

  handleClick = () => {
    const {name, calories} = this.props;
    this.props.addTodayFood(name, calories, this.state.quantity);
  }

  render() {
    const { name, calories, image } = this.props;

    return (
 
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image}/>
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
                  onChange={this.handleInputChange}
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

    );
  }
}

export default FoodBox;

