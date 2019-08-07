import React, { Component } from 'react'

class FoodBox extends Component {
  state = {
    value: '0',
    name: '',
    calories: '',
  }

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value 
    })
  }
  
  addQauntity = (event) => {
    const {name, calories} = this.props.data;
    const newValue = parseInt(event.target.parentElement.parentElement.children[0].children[0].value);
    const newTodayFood = { newValue, name, calories};
    console.log(newTodayFood);
    this.props.addParentTodayFood(newTodayFood);
    this.setState({
      value: newValue,
    })
  }



  render() {
    const { name, calories, image } = this.props.data;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt={name}/>
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
                  name="value"
                  value={this.state.value} 
                  onChange={this.handleInputChange}

                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.addQauntity}>
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
