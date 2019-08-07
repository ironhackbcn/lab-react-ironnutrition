import React, { Component } from 'react'

class FoodBox extends Component {
  state = {
    showForm :false,
  }
  
  changeFormStatus = (event) => {
    const {showForm} = this.state
    this.setState({
      showForm: !showForm,
    })
  }

  render() {
    const {showForm} = this.state
    return (
      <>
        
        {showForm ? <form>
          <label htmlFor="name">Name</label>
          <input 
            className="input"
            type="text" 
            id="name" 
            name="name" 
            placeholder="Pasta" 
            //value={name}
            //onChange = {this.handleInputChange}
          />

          <label htmlFor="calories">Calories</label>
          <input 
            className="input"
            type="number" 
            id="calories" 
            name="calories" 
            placeholder="120" 
            //value={calories}
            //onChange = {this.handleInputChange}
          />

          <label htmlFor="name">Image</label>
          <input 
            className="input"
            type="text" 
            id="image" 
            name="image" 
            placeholder="http://www.google.com/image-url" 
            //value={image}
            //onChange = {this.handleInputChange}
          />
          <button className="button is-info">+ Add</button>
        </form> : null}
        {!showForm ? 
        <button onClick={this.changeFormStatus} className="button is-info">Add new food</button> 
        :<button className="button is-info" onClick={this.changeFormStatus}>Cancel</button>
        }
        <div className="box">
        {this.props.foods.map( (food, index) => {
          return (
            <article className="media" key={index}>
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={food.image} alt={food.name} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{food.name}</strong> <br />
                    <small>{food.calories}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input
                      className="input"
                      type="number" 
                      value="1"
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
          )
        } 
        )}
        </div> 
      </>
    )
  }
}

export default FoodBox;
