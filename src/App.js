import React, { Component } from 'react';
import './App.css';
import foods from './data/foods.json';
import FoodBox from './components/FoodBox';
import AddNewFood from './components/AddNewFood';
import SearchBar from './components/SearchBar';
import TodaysFoodList from './components/TodaysFoodList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: foods,
      showForm: false,
      todaysFoodList: [],
    };
  }

  /*ITERATION 3 FUNCTIONS*/
  showForm = () => {
    this.setState({
      showForm: true,
    });
  };

  hideForm = () => {
    this.setState({
      showForm: false,
    });
  };

  addNewFood = food => {
    this.setState({
      foods: [...this.state.foods, food],
    });
    this.hideForm();
  };

  /*ITERATION 4 FUNCTION*/
  searchBar = query => {
    const searchedFoods = foods.filter(food => {
      return food.name.toLowerCase().search(query.toLowerCase()) !== -1;
    });
    this.setState({
      foods: [...searchedFoods],
    });
  };

  /*ITERATION 5 FUNCTION*/
  addFoodToList = food => {
    this.state.foods.push(food);
    this.setState({
      todaysFoodList: [...this.state.todaysFoodList, food],
    });
    console.log('iteration 5');
  };

  render() {
    return (
      <div>
        <h1>List of Foods</h1>
        <SearchBar searchBar={this.searchBar} />
        <div>
          <button className="add-new-food-btn" onClick={this.showForm}>
            Add food
          </button>
          {this.state.showForm && <AddNewFood addNew={this.addNewFood} />}
        </div>
        {this.state.foods.map((food, index) => {
          return (
            <FoodBox
              key={`${food[0]}-${index}`}
              name={food.name}
              image={food.image}
              calories={food.calories}
            />
          );
        })}
        <div className="food-list"></div>
        <TodaysFoodList todaysFoodList={this.addFoodToList} />
      </div>
    );
  }
}

export default App;
