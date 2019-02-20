import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './data/foods.json';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import SearchBar from './components/SearchBar';
import FoodList from './components/FoodList';

class App extends Component {

  state = {
    foods,
    searchFoods: foods,
    todaysList: [],
    isFormVisible: false,
  }

  toggleForm = () => {
    this.setState({
      isFormVisible: !this.state.isFormVisible,
    });
  }
  
  listFoodItems = () => {
    return this.state.foods.map((foodItem, index) => {
      return <FoodBox 
        key={index}
        id={index}
        name={foodItem.name} 
        calories={foodItem.calories} 
        image={foodItem.image}
        quantity={foodItem.quantity}
        addTodayListHandler={this.addItemToTodaysList}
        />
    });
  }
  
  listTodaysFood = () => {
    // console.log(this.state.todaysList);
    return this.state.todaysList.map((food, index) => {
      return <FoodList
      key={index} 
      id={index}
      name={food.name}
      calories={food.totalCalories}
      quantity={food.quantity}
      removeTodaysItem={this.removeItemFromTodaysList}
      />
    });
  }

  removeItemFromTodaysList = (index) => {
    const { todaysList } = this.state;
    const updatedTodaysList = todaysList.filter((food, i) => {
      return i !== index;
    });
    this.setState({
      todaysList: updatedTodaysList,
    });
  }

  addItemToTodaysList = (input) =>  {
    const { todaysList } = this.state;
    const duplicateIndex = this.state.todaysList.findIndex((food) => {
      return input.name === food.name;
    });
    if(duplicateIndex >= 0) {
      const updatedQuantity = parseInt(todaysList[duplicateIndex].quantity) + parseInt(input.quantity);
      const updatedCalories = todaysList[duplicateIndex].totalCalories + input.totalCalories;
      const updatedTodaysList = todaysList.map((food, i) => {
        if(i === duplicateIndex) {
          return {
            name: food.name,
            totalCalories: updatedCalories,
            quantity: updatedQuantity,
          }
        }
        return food;
      });
      this.setState({
        todaysList: updatedTodaysList,
      })
    } else {
      const updatedTodaysList = [...todaysList, input];
      this.setState({
        todaysList: updatedTodaysList,
      })
    }
  }

  addItem = (newFood) => {
    this.setState({
      foods: [...this.state.foods, newFood],
      searchFoods: [...this.state.searchFoods, newFood]
    });
  }

  hideForm = () => {
    this.setState({
      isFormVisible: !this.state.isFormVisible,
    });
  }

  updateList = (input) => {
    const filteredList = this.state.searchFoods.filter((food) => {
      return food.name.toLowerCase().includes(input.toLowerCase());
    });
    this.setState({
      foods: [...filteredList],
    })
  }

  render() {
    if (this.state.isFormVisible) {
      return (
        <div className="App">
          <SearchBar updateFoodListHandler={this.updateList}/>
          <button className="button" onClick={this.toggleForm}>Add food</button>
          <Form addItemHandler={this.addItem} hideFormHandler={this.hideForm}/>
          <div className="columns">
            <div className="column">
              {this.listFoodItems()}
            </div>
            <div className="column">
              <h2>Today's list</h2>     
              <ul>
                {this.listTodaysFood()}
              </ul>
            </div>
          </div>
        </div>
      );
    } 
    return (
      <div className="App">
        <SearchBar updateFoodListHandler={this.updateList}/>
        <button className="button" onClick={this.toggleForm}>Add food</button>
        <div className="columns">
          <div className="column">
            {this.listFoodItems()}
          </div>
          <div className="column">
            <h2>Today's list</h2>
            <ul>
              {this.listTodaysFood()}     
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
