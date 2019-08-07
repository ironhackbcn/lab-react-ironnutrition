import React, { Component } from 'react';
import foods from '../data/foods.json';

class FoodBox extends Component {
  state = {
    showForm :false,
    foodsArr : foods,
    showFood: foods,
    name: '',
    calories: '',
    image:''
  }
  
  changeFormStatus = (event) => {
    const {showForm} = this.state
    this.setState({
      showForm: !showForm,
    })
  }

  handleInputChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
  
  handleSearch = (event) => {
    const {value} = event.target;
    const foodsFiltered = [...this.state.foodsArr];
    const results= foodsFiltered.filter(food=> food.name.toLowerCase().includes(value.toLowerCase()));
    console.log(results);     

    this.setState({
      showFood:results,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {name,calories,image, foodsArr, showForm} = this.state;
    const foodsCopy = [...foodsArr];
    const newFood = {name, calories, image};
    foodsCopy.push(newFood)

    this.setState({
      foodsArr:foodsCopy,
      showFood:foodsCopy,
      name: '',
      calories: '',
      image:'',
      search:'',
      showForm: !showForm,
    })
  }

  render() {
    const {showForm, name, calories, image,search, showFood} = this.state
    return (
      <>
        <input className="input"
          type="text" 
          id="search" 
          name="search" 
          placeholder="e.g. Salad" 
          value={search}
          onChange = {this.handleSearch}
        />

        {showForm ? 
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input 
            className="input"
            type="text" 
            id="name" 
            name="name" 
            placeholder="Pasta" 
            value={name}
            onChange = {this.handleInputChange}
          />

          <label htmlFor="calories">Calories</label>
          <input 
            className="input"
            type="number" 
            id="calories" 
            name="calories" 
            placeholder="120" 
            value={calories}
            onChange = {this.handleInputChange}
          />

          <label htmlFor="name">Image</label>
          <input 
            className="input"
            type="text" 
            id="image" 
            name="image" 
            placeholder="http://www.google.com/image-url" 
            value={image}
            onChange = {this.handleInputChange}
          />
          <button className="button is-info">+ Add</button>
        </form> : null}
        {!showForm ? 
        <button onClick={this.changeFormStatus} className="button is-info">Add new food</button> 
        :<button className="button is-info" onClick={this.changeFormStatus}>Cancel</button>
        }
        <div className="box">
        {showFood.map( (food, index) => {
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
