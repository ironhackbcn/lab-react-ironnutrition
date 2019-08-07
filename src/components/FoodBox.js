import React, { Component } from 'react';

import Search from './Search';
import TodaysFoods from './TodaysFoods';

class FoodBox extends Component {
  state = {
    foods: this.props.foods,
    name: '',
    calories: '',
    image: '',
    quantity: '',
    isAddingNew: false,
    inputSearch: '',
    selectedFoods: [],
    totalCalories: 0,
    foodQuantity: 0
  };

  handleAddFood = () => {
    this.setState({ isAddingNew: true });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleQuantityChange = (event, index) => {
    const { foods } = this.state;
    const newQuantity = event.target.value;
    const foodsCopy = [...foods];
    const foodCopy = { ...foods[index] };
    foodCopy.quantity = newQuantity;
    foodsCopy[index] = foodCopy;
    this.setState({ foods: foodsCopy });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, calories, image, foods } = this.state;
    const foodsCopy = [...foods];
    const newFood = { name, calories, image };
    foodsCopy.push(newFood);
    this.setState({
      foods: foodsCopy,
      isAddingNew: false
    });
  };

  handleSearch = event => {
    this.setState({ inputSearch: event.target.value });
    this.handleFilter();
  };

  handleFilter = () => {
    const { foods, inputSearch } = this.state;
    const filterFoods = foods.filter(food => {
      return food.name.toLowerCase().indexOf(inputSearch.toLowerCase()) !== -1;
    });
    this.setState({ foods: filterFoods });
  };

  handlePlusButton = (name, calories, quantity, index) => {
    let isPresent = false;
    const selectedFoodsCopy = this.state.selectedFoods.map((food) =>{
      if (food.name === name ) {
        isPresent = true;
        food.quantity = +food.quantity + +quantity;
       return food;
      } else {
        return food;
      }
    });
    if(isPresent === false ){
      selectedFoodsCopy.push({name, calories, quantity});
    };
    const totalCalories = this.state.totalCalories + calories * quantity;
    const foodsCopy = [...this.state.foods];
    const foodCopy = { ...this.state.foods[index] };
    foodCopy.quantity = 0;
    foodsCopy[index] = foodCopy;

    this.setState({
      selectedFoods: selectedFoodsCopy,
      totalCalories,
      foods: foodsCopy
    });
  };

  render() {
    const {
      name,
      calories,
      image,
      isAddingNew,
      foods,
      inputSearch
    } = this.state;
    return (
      <section>
        <Search value={inputSearch} handleSearch={this.handleSearch} />
        <button onClick={this.handleAddFood}>Add new food</button>

        {isAddingNew ? (
          <form onSubmit={this.handleSubmit}>
            <div className="form-element">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Pizza (no pineapple)"
                value={name}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-element">
              <label htmlFor="calories">Calories:</label>
              <input
                type="number"
                name="calories"
                id="calories"
                placeholder="400"
                value={calories}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-element">
              <label htmlFor="name">Image:</label>
              <input
                type="text"
                name="image"
                id="image"
                placeholder="URL:"
                value={image}
                onChange={this.handleInputChange}
              />
            </div>
            <button type="submit">Save</button>
          </form>
        ) : null}

        <section className="foods">
          <section>
            {foods.map((food, index) => (
              <div className="box" key={index}>
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={food.image} alt={food.name} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{food.name}</strong> <br />
                        <small>{food.calories} cal</small>
                      </p>
                    </div>
                  </div>
                  <div className="media-right">
                    <div className="field has-addons">
                      <div className="control">
                        <input
                          className="input"
                          type="number"
                          value={food.quantity}
                          name="quantity"
                          onChange={event =>
                            this.handleQuantityChange(event, index)
                          }
                        />
                      </div>
                      <div className="control">
                        <button
                          className="button is-info"
                          onClick={() => {
                            this.handlePlusButton(
                              food.name,
                              food.calories,
                              food.quantity,
                              index
                            );
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </section>
          <TodaysFoods
            selectedFoods={this.state.selectedFoods}
            totalCalories={this.state.totalCalories}
          />
        </section>
      </section>
    );
  }
}

export default FoodBox;


