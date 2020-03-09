import React, { Component } from "react";

export default class FoodBox extends Component {
    state={
        amount: 1
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }

    handleClick = () => {
       let {amount} = this.state
       this.setState({
           amount: amount+1
       })
    }
  render() {
    return (
      <div>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.food.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.food.name}</strong> <br />
                  <small> {this.props.food.calories}cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input onChange={this.handleChange} className="input" type="number" value={this.state.amount} />
                </div>
                <div className="control">
                  <button onClick={this.handleClick} className="button is-info">+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
