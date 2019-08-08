import React, { Component } from 'react';
import data from './data/foods.json';
import 'bulma/css/bulma.css';
import './App.css';
import ListFoodToday from './components/ListFoodToday.js';

class App extends Component {
  state = {
    foods: data,
    inputFood: '',
    selectedFoods: data,
    addedFoods: [],
    isFormActive: false,
    inputName: '',
    inputCalories: '',
    inputImage: '',
    quantity:''
  }
  handleOpenForm = () => {
    this.setState({
      isFormActive: true
    })
  }
  handleSubmitForm = (event) => {
    event.preventDefault();
    const { inputName, inputCalories, inputImage, foods} = this.state;
    const newFoods = [...foods];
    const newFood = {name: inputName, calories: inputCalories, image:inputImage}
    newFoods.push(newFood);
    this.setState({
      foods: newFoods,
      selectedFoods: newFoods,
      isFormActive: false,
      inputName: '',
      inputCalories: '',
      inputImage: ''
    })
  }
  handleOnChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }
  handleOnChangeOnFood = (e,index) => {
    const {value} = e.target;
    const newSelectedFoods = [...this.state.selectedFoods];
    newSelectedFoods[index].quantity = Number(value);
    this.setState({
      selectedFoods: newSelectedFoods
    })
  }
  handleOnSearch = (e) => {
    const { value } = e.target;
    const { foods } = this.state;
    const newArray = foods.filter((element) => {
      if(element.name.toLowerCase().includes(value.toLowerCase())) return element;
    });
    this.setState({
      inputFood: value,
      selectedFoods: newArray
    })
  }
  handleAddFood (e, index) {
    const { selectedFoods, addedFoods } = this.state;
    const food = selectedFoods[index];
    const newAddedFoods = [...addedFoods];
    newAddedFoods.push(food);
    this.setState({
      addedFoods: newAddedFoods
    })
  }

  render() {
    const { foods, selectedFoods, isFormActive, inputName, inputCalories, inputImage, addedFoods} = this.state
    return (
      <div className="App">
        <h2>IronNutrition</h2>
        <form>
          <input type="text" name="name" onChange={this.handleOnSearch}/>
        </form>
          <div className="container">
            <div className="foods-container">
              {selectedFoods.map((elem, index) => {
              return (
                <div className="box" key={index}>
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src={elem.image} alt=""/>
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>{elem.name}</strong> <br />
                          <small>{elem.calories} cal</small>
                        </p>
                      </div>
                    </div>
                    <div className="media-right">
                      <div className="field has-addons">
                        <div className="control">
                          <input
                            className="input"
                            type="number" 
                            value={elem.quantity}
                            name="quantity"
                            onChange={(e)=>this.handleOnChangeOnFood(e,index)}
                          />
                        </div>
                        <div className="control">
                          <button onClick={(e) => this.handleAddFood(e,index)} className="button is-info">
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              )
              })}
            </div>
            <div className="list-container">
              <ListFoodToday foods={addedFoods}/>
            </div>
          </div>

        <button onClick={this.handleOpenForm}>Add new food</button>
        {isFormActive && 
          <form onSubmit={this.handleSubmitForm}>
            <label htmlFor="name">Name</label>
            <input type="text" name="inputName" id="name" value={inputName} onChange={this.handleOnChange}/>
            <label htmlFor="NumberOfCalories">Number of calories</label>
            <input type="text" name="inputCalories" id="NumberOfCalories" value={inputCalories} onChange={this.handleOnChange}/>
            <label htmlFor="inputImage">Image</label>
            <input type="text" name="inputImage" id="inputImage" value={inputImage} onChange={this.handleOnChange}/>
            <button type="submit">Submit</button>
          </form>
        }
      </div>
    );
  }
}

export default App;
