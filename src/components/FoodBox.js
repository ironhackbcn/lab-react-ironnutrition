import React, { Component } from 'react';
import './FoodBox.css';

class FoodBox extends Component {

  state = {      
    quantity: 1,
    name: this.props.name,
    calories: this.props.calories
   }


  handleChange = (event) => {
    let quantity = parseFloat(event.target.value);
    this.setState({ 
      quantity: quantity,
      calories: this.props.calories * quantity
    })
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.addTheFood(this.state);
    this.setState({
      quantity: this.state.quantity,
      name: this.props.name,
      calories: this.props.calories * this.state.quantity
    })
  }


  render() {
        return (
            <div className="box">
              <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={this.props.image} alt="food"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                    <p>
                        <strong>{this.props.name}</strong> <br />
                        <small>{this.props.calories} cal</small>
                    </p>
                    </div>
                </div>
                <div className="media-right">
                  <div className="field has-addons">
                    <div className="control">
                        <input
                        className="input"
                        name="quantity"
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
        )
  }
}


export default FoodBox;