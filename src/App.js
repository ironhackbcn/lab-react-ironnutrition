import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import allFoods from './data/foods.json';
import FoodBox from './component/foodBox';
import AddFood from './component/addFood';
import SearchFood from './component/search';
import TodayList from './component/todayList';

class App extends Component {

  state = {
    showForm: false,
    foods: allFoods,
    selected: [],
  }

  showForm = ()=> {
    this.setState({
      showForm: true,
    });
  }

  hideForm = () => {
    this.setState({
      showForm: false,
    });
  }

  newFood = (food) => {
    this.setState({
      foods: [...this.state.foods, food],
    });
    this.hideForm();
  }

  searchFood = (query) => {
    const filteredFoods = allFoods.filter((food) => {
        return food.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
    this.setState({
      foods: [...filteredFoods],
    });
  }

  addFoodToList = (food) => {
    this.setState({
      selected: this.sumDuplicates(this.state.selected, food),
    });
  }

  sumDuplicates = (arr, food) => {

    let result = arr;

    const index = arr.findIndex((element)=>{
      return element.name === food.name;
    });

    if (index > -1){
      result[index].quantity = parseInt(result[index].quantity) + parseInt(food.quantity);
      result[index].calories = parseInt(result[index].calories) + parseInt(food.calories);
    } else {
      result.push(food);
    }
  
    return result;

  }

  removeSelected = (index) => {
    this.state.selected.splice(index,1);
    this.setState({
      selected: this.state.selected,
    });
  }

  render() {
    return (
      <div className="App container">
        <h1 className="title">IronNutrition</h1>
        <SearchFood search={this.searchFood}/>
        <div className="column">
          <button onClick={this.showForm}>Add food</button>
        </div>
        {
          this.state.showForm && <AddFood new={this.newFood}/>
        }
        <div className="columns">
          <div className="column">
            {this.state.foods.map((element, index) => {
              return <FoodBox key={index} index={index} food={element} addToList={this.addFoodToList}/>
            })}
          </div>
          <TodayList select={this.state.selected} remove={this.removeSelected}/>
        </div>
      </div>
    );
  }
}

export default App;
