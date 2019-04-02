import React, { Component } from 'react';
import foods from './data/foods'
import './App.css';
import FoodBox from './components/FoodBox';
import NewFood from './components/NewFood';
import SearchBar from './components/SearchBar';
import TodayFood from './components/TodayFood';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    formDisplayed:false,
    foodListPrint : this.toInt(foods, 'calories','quantity'),
    śearch:'',
    foodToday:[],
  };
}

  toInt = (array, ...props) => {
    const result = array.map(item => {
      props.forEach(prop => {
        item[prop]=parseInt(item[prop])
      })
      return item
    });
    return result
  }

  doSearch = (search) => {
    const filtered = foods.filter((food) => { return (food.name).includes(search); });
    this.setState(
      {
        search,
        foodListPrint:filtered
      }
    )
  }

  addNewItem = (item) => {
    this.setState({
      foodListPrint: [...this.state.foodListPrint, item],
    });
  }

  findItem = (array, prop, toFind) => {
    let found;
      found = array.find((item) => {
      return item[prop] === toFind;
      });
    return found;
  }

  addTodayFood = (newItem) => {
    const {foodToday} = this.state;
    let copyft = foodToday.slice();
    console.log(copyft)
    let item = this.findItem(foodToday, 'name', newItem.name);
    if( item ){
      console.log(item.quantity)
    }else {
      copyft.push(newItem);
    }
    this.setState({
      foodToday:copyft, 
    })
  }

  displayForm = () => {
    this.setState(
      {formDisplayed: !this.state.formDisplayed}
    );
  }

  render() {
    return (
      <>
        <SearchBar doSearch={this.doSearch}/>
        <button onClick={this.displayForm} >Add</button>
        {<TodayFood foodToday={this.state.foodToday}/>}
        {this.state.formDisplayed && <NewFood displayForm={this.displayForm} addNewItem={this.addNewItem}/>}
        {this.state.foodListPrint.map((food, index) => {
          return <FoodBox key={index} item = {food} addTodayFood = {this.addTodayFood} />
        })}
      </>
    );
  }
}

export default App;
