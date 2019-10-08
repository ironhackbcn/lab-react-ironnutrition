import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import FoodBox from './components/FoodBox';
import ToggleBox from './components/ToggleBox';
import SearchBar from './components/SearchBar';
import TodaysFoods from './components/TodaysFoods';


import foods from './data/foods.json';


class App extends Component {
  state = {
    foods: foods,
    searched: [],
    todayFoods: []
  }

  
  updateFoods = (food) => {
    food.calories = parseFloat(food.calories);
    this.setState({
      foods: [food, ...this.state.foods]
    })
  }

  findFood = (query) => {
    const { foods } = this.state;
    if (query !== "") {
      const result = foods.filter(item => {      
        return item.name.toLowerCase().includes(query.toLowerCase());
      });
      this.setState({
        searched: result
      })
    } else {
      this.setState({
        searched: []
      })
    }    
  }

  addTodayFood = (food) => {
    const { todayFoods } = this.state;    

    const repeat = this.state.todayFoods.map((item) => { return item.name }).indexOf(food.name);

    if (repeat !== -1) {
      todayFoods[repeat].quantity += parseFloat(food.quantity);
      todayFoods[repeat].calories += parseFloat(food.calories);
      this.setState({
        todayFoods: todayFoods       
      })
    } else {
      this.setState({
        todayFoods: [...this.state.todayFoods, food]
      });
    }
  }

  deleteTodayFood = (food) => {
    const { todayFoods } = this.state;
    const rest = todayFoods.filter(i => i.name !== food.name);
    this.setState({todayFoods: rest});
  }


  render() {
    const { foods, searched } = this.state;
    return (
      <div className="App">
        <div className="container">
         <Header />
         <SearchBar onSearch={this.findFood}></SearchBar>
         <ToggleBox addTheFood={this.updateFoods}></ToggleBox>    
         
         <div className="columns"> 
           <div className="column">
              {searched && <div> {searched.map((item, index) => {
                  return (
                    <FoodBox key={`${item.name}-${index}`} name={item.name} calories={item.calories} image={item.image} addTheFood={this.addTodayFood}/>
                  )
              })} </div> }
              {searched.length === 0 && <div> {foods.map((item, index) => {
                  return (
                    <FoodBox key={`${item.name}-${index}`} name={item.name} calories={item.calories} image={item.image} addTheFood={this.addTodayFood}/>
                  )
              })} </div> } 
           </div>  
           <TodaysFoods todayFoods={this.state.todayFoods} deleteFood={this.deleteTodayFood} ></TodaysFoods>                 
          </div>
        </div> 
      </div>
      
    );
  }
}

export default App;
