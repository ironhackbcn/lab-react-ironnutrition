import React, { Component } from 'react';
import FoodBox from './FoodBox'
import foods from '../data/foods.json'
import'milligram';

class Form extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
    foods: foods,
    show: false,
  }

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {name, calories, image, foods} = this.state;
    const foodsCopy = [...foods];
    const newFood = {
      name, 
      calories, 
      image
    }
    foodsCopy.push(newFood)

    this.setState({
      foods: foodsCopy,
      name: '',
      calories: '',
      image: '',
      show: false
    })
  }

  showForm = () => {
    this.setState({
      show: true
    });
  }



  render() {
    const {name, calories, image, foods} = this.state;


    return (
          <div>
            <button onClick={this.showForm}>Add new food</button>
            {this.state.show &&
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                 id ="name"
                  type="text"
                   name="name"
                    placeholder="Write yout food name"
                     value={name}
                      onChange={this.handleInputChange}/>


                <label htmlFor="calories">Calories</label>

                <input 
                id="calories" 
                type="text" name="calories" 
                placeholder="Calories" 
                value={calories} 
                onChange={this.handleInputChange}/>


                <label htmlFor="image">Image</label>
                
                <input id="image"
                 type="text"
                  name="image"
                   placeholder=""
                    value={image}
                     onChange={this.handleInputChange}/> 

                <button type="submit">Add</button>
              </form>
             }
             <FoodBox foods={foods} />
             </div>
    )
  }
}
 

export default Form; 
