import React, { Component } from 'react';

class FoodBox extends Component {

  state = {
    quantity: 1,
  }

  sumQuantity = (e) => {
    const newQuantity = e.target.value;
    this.setState ({
      quantity: newQuantity,
    })  
  }




  handleClick = () => {
    
    this.props.addTodayFood(this.props.food.name, this.props.food.calories, this.state.quantity);
  }

    render() {
        const {food} = this.props
        return(
            <div className="box">
          <article className="media">
          <div className="media-left">
          <figure className="image is-64x64">
            <img className="card-img" src={food.image} alt={food.name} /></figure></div>
            <div className="media-content">
            <div className="content">
            <p></p>
            <strong>{food.name}</strong> <br />
            <small>{food.calories}</small>
            </div>
            </div>
            <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            type="number"
                            value={this.state.quantity}
                            onChange = {this.sumQuantity}
                            name="quantity"
                        
                        />
                    </div>
                </div>
            </div>
            <div className="control">
            <button className="button is-info" onClick = {this.handleClick}>
                    +
                </button></div>
            
            
          </article>
          </div>
        )
      }
    }
  
  export default FoodBox;
  