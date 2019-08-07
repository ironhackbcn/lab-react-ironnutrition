import React, { Component } from 'react';
import Foodbox from './components/Foodbox';
import foods from './data/foods.json';
import Button from './components/Button';
import Search from './components/Search'
import './App.css';

class App extends Component {
  state = {
    foods,
    originalFoods: foods,
  }

  changeFoods = (foods) => {
    this.setState({foods})
  }

  render() {
    return (
      <div className="App">
      <Button />
      <Search changeFoods={this.changeFoods} originalFoods={this.state.originalFoods}/>
      <Foodbox foods={this.state.foods}/>
      </div>
    );
  }
}

export default App;
