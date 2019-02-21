import React, { Component } from 'react'; 
import './App.css';
import 'bulma/css/bulma.css';
import foods from './data/foods.json';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import Search from './components/Search';
import ListItem from './components/ListItem';

class App extends Component {
  state = {
    foods: foods,
    searchFoods: foods,
    isFormClicked: false,
    foodForToday: '',
  }

  listFoods = () => {
    const { foods } = this.state;
    return foods.map((foodItem, index) => {
      return < FoodBox
        key={`${foodItem}-${index}`}
        index={index}
        name={foodItem.name}
        calories={foodItem.calories}
        image={foodItem.image}
        quantity={foodItem.quantity}
        addToList={this.addToTodayList}
      />
    })
  }

  //addToTodayList = (foodItem) => {
  //  this.setState
  //  
  //}

  addFood = (foodItem) => {
    const { foods } = this.state;
    const newFoods = [...foods, foodItem];
    this.setState({
      foods: newFoods,
      searchFoods: newFoods,
    })
  }

  handleCreateForm = () => {
    const newClicked = !this.state.isFormClicked;
    this.setState({
      isFormClicked: newClicked,
    }) 
  }

  handleSearch = (regExp) => {
    const { searchFoods } = this.state
    const newFoods = searchFoods.filter((food) => {
      return food.name.match(regExp);
    })
    this.setState({
      foods: newFoods,
    })
  }

  render() {
    return (
      <div className="App">
        < Search search={this.handleSearch} />
        <button onClick={this.handleCreateForm}>New Food Item</button>
        {
          this.state.isFormClicked === true ?
          < Form addFood={this.addFood} createForm={this.handleCreateForm} /> : null
        }
        <div className="columns">
          <div className="column">
            {this.listFoods()}
          </div>
          <div className="column">
            <h2>Today's foods</h2>
      
          </div>
        </div>
      </div>
    );
  }
}

export default App;
