import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './data/foods.json';
import FoodBox from './components/FoodBox';
import AddForm from './components/AddForm';
import Search from './components/Search';


class App extends Component {

  state = {
    showform: false,
    foods: [...foods],
    listfood: [],
    totalCalories: 0

  }

  addform = () => {
    this.setState({
      showform: !this.state.showform
    })
  }
  addfood = (food) => {
    const newfood = this.state.foods.push(food);
    this.setState({
      foods: [...this.state.foods, newfood]
    })
  }

  addtolist = (quantity, name, calories)=> {
    this.setState((state) => (
      {
        listfood:[...state.listfood, {quantity, name, calories} ],
        totalCalories: state.totalCalories + quantity * calories
      }
    ))
  }

  filterFood = (foodFilter) => {
    let filteredfood = foods
    filteredfood = filteredfood.filter((food) => {
      let foodName = food.name.toLowerCase();
      return foodName.indexOf(
        foodFilter.toLowerCase()) !== -1
    })
    console.log(filteredfood);
    this.setState({
      foods : filteredfood
    })
  }
  
  render() {
    console.log(this.state.listfood)
    return (
      <div className="App">
      <h1 className = "title is-1">IronNutrition</h1>
      <div>
        <Search onChange={this.filterFood}/>
      </div>
      <div className = "columns">
      <div className = "column is-three-fifths">
        {this.state.foods.map((food,index) =>{
          return <FoodBox 
            key = {index}
            index = {index}
            food = {food}
            addtolist = {this.addtolist}
          />
        })
        }
      </div>
      <div className = "column">
        <h2 className = "title">ToDay Food</h2>
        <ul>
          {this.state.listfood.map((food,index) =>{
            
            return <li>
                      {food.quantity} {food.name} = {food.calories*food.quantity} 
                  </li>
          })}
        </ul>
        <p>Total of Calories  {this.state.totalCalories}</p>
      </div>
      </div>
        {
          this.state.showform ? 
          <AddForm 
            onClick = {this.addfood}
            form = {this.addform}
          /> : <button onClick ={this.addform}>Add food</button>
        }
       
      </div>
    );
  }
}

export default App;
