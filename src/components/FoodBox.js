import React, { Component } from 'react'

export default class FoodBox extends Component {
    state = {
        value: 0
    }
    
    seeValue = (event) => {
        let newValue = event.target.value
        if(newValue <= 0){
            newValue = 0
        }
        this.setState({
            value: newValue
        })
    }


    render() {
        const {name, calories, image, quanity} = this.props.food
        const addElement = this.props.buttonFunction
        const deleteElement = this.props.buttonDelete
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
          <small>{calories} cal</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input onChange={this.seeValue}
            className="input"
            type="number" 
            value={this.state.value}
          />
        </div>
        <div className="control">
          <button onClick={(event) => {addElement(this.state.value, name, calories)}} className="button is-info">
            +
          </button>
          <button id='delete-button' onClick={(event) => {deleteElement(this.state.value, name, calories)}} className="button is-info">
            -
          </button>
        </div>
      </div>
    </div>
  </article>
</div> 

        )
    }
}


