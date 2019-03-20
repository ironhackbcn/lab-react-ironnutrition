import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './data/foods.json';
import { FoodBox } from './components/FoodBox';
import { Total } from './components/Total';
import { AddForm } from './components/AddForm';
import { init } from 'events';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todayFood: [],
      allDishes: [...foods],
      showForm: false,
      search: '',
    }
  }

  onNewFood = (object) => {
    this.setState({
      allDishes: [object, ...this.state.allDishes],
    })
  }

  onData = (object) => {
    let fixedDuplicates;
    if (this.state.todayFood.some(e => e.name === object.name)) {
      fixedDuplicates = this.state.todayFood.map(dish => {
        if (dish.name === object.name) {
          dish.quantity = parseInt(object.quantity) + parseInt(dish.quantity);
          dish.totalCal = parseInt(object.totalCal) + parseInt(dish.totalCal);
        }
        return dish;
      });
      return this.setState({
        todayFood: fixedDuplicates,
      })
    }
    this.setState({
      todayFood: [object, ...this.state.todayFood]
    })
  }

  onRemove = (name) => {
    const removedDishAll = this.state.allDishes.filter(e => e.name !== name)
    this.setState({
      allDishes: removedDishAll,
    })
  }

  handleShow = () => {
    this.setState({
      showForm: !this.state.showForm,
    })
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    const filteredList = this.state.allDishes.filter(e => e.name.toLowerCase().includes(this.state.search.toLowerCase()));
    return (
      <div className='App container'>
        <div className='container search'>
          <h3>Search Dish</h3>
          <input placeholder='Search' onChange={this.handleSearch}></input>
        </div>
        <button className="button is-info" onClick={this.handleShow} >Add Food</button>
        {this.state.showForm && <AddForm onNewFood={this.onNewFood} />}
        {
          filteredList.map((dish, index) => {
            return <FoodBox key={`${index}${dish.name}`} dish={dish} onData={this.onData} onRemove={this.onRemove} />
          })
        }
        <Total dishesArray={this.state.todayFood} />
      </div>
    );
  }
}

export default App;
