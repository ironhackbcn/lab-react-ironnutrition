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
    this.setState({
      todaysFoodList: [...this.state.todaysFoodList, food],
    });
  };

  /*ITERATION 7 FUNCTION*/
  removeFoodItem = foodIndex => {
    this.state.todaysFoodList.splice(foodIndex, 1);
    this.setState({
      todaysFoodList: this.state.todaysFoodList,
    });
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
              food={food}
              addToList={this.addFoodToList}
            />
          );
        })}
        <div className="food-list"></div>
        <TodaysFoodList
          todaysFoodList={this.state.todaysFoodList}
          removeFoodItem={this.removeFoodItem}
        />
      </div>
    );
  }
}

export default App;
