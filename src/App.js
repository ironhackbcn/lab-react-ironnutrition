import React, { Component } from 'react';
import './App.css';
import './index.css';
import 'bulma/css/bulma.css';
import food from './data/foods.json'
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import Search from './components/Search';

class App extends Component {

  state = {
    foodList: food,
    displayForm: "none",
    todos: food
  }
  onDisplayForm = () => {
    this.setState({
      displayForm: "block"
     })
  }
  addNewItem = (newFood) => {
      console.log(newFood)
      this.setState({
       foodList: [...this.state.foodList, newFood],
       todos: [...this.state.foodList, newFood],
       displayForm: "none"
      })
  }

  filterList = (newList) => {
   
    this.setState({
      foodList: newList
    })

  }
  render() {
    return (
      <div className="App">
        <Search filterList={this.filterList} todos={this.state.todos}/>
        <button
          type="button"
          onClick={this.onDisplayForm}
        >
          Add new foods
        </button>
        <Form onSubmit={this.addNewItem} display={this.state.displayForm}/>
        <FoodBox foodBox={this.state.foodList}/>
      </div>
    );
  }
}

export default App;
