import React, { Component } from 'react';


class FoodBox extends Component {
  constructor(props){
    super(props);

    this.state = { 
      todaysFood: [],
      quantity:1,
    }
}


  AddToTodaysList = async (event) =>{
    try {
      event.preventDefault();
      let todaysFoodCopy = [this.props.name, this.props.calories, this.state.quantity]
      await this.setState({
        todaysFood: todaysFoodCopy
      })
      this.props.todaysFoodHandler(this.state.todaysFood)
  } catch {

    }
  }

  handleInputChange(event) {
    let { name, value } = event.target;
    this.setState({[name]: value });
  }

  render() {
    const { img, name, calories, quantity } = this.props

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={img} alt=""/>
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
                  name="quantity"
                  type="number" 
                  defaultValue={this.state.quantity}
                  onChange={(e)=>this.handleInputChange(e)}
                />
              </div>
              <div className="control">
                <button className="button is-info" 
                onClick={this.AddToTodaysList} 
                calories = {calories} 
                name={name} 
                quantity = {quantity} >
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