import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './data/foods.json';
import FoodBox from './components/FoodBox';
import Button from './components/Button';
import FormNewFood from './components/FormNewFood';
import Search from './components/Search';
import TodaysFoods from './components/TodaysFoods';

class App extends Component {
  state = {
    foods: [...foods],
    searchFoods: [...foods],
    todaysFoods: [],
    searchName: '',
    // showForm: false,
  };
  // handleShowForm = () => {
  //   this.setState({
  //     showForm: !this.state.showForm,
  //   });
  // };
  handleNewFood = async food => {
    await this.setState(
      {
        foods: [food, ...this.state.foods],
        // searchFoods: [food, ...this.state.foods],
      },
      () => {
        console.log('🤣', this.state.foods);
      },
    );

    this.handleSearch(this.state.searchName);
  };

  handleSearch = name => {
    console.log('TCL: handleSearch -> name', name);
    // console.log("Prueba");
    const { foods } = this.state;
    this.setState({ searchName: name });
    const searchedFoods = foods.filter(food => {
      return food.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
    });
    console.log('TCL: searchedFoods', searchedFoods);

    this.setState({ searchFoods: [...searchedFoods] });
  };

  handleAddTodayFood = food => {
    console.log('TCL: handleAddTodayFood -> food', food);
    const { todaysFoods, searchFoods } = this.state;
    const sumTodaysList = this.existFoodOnListAndSum(todaysFoods, food);

    this.setState({
      todaysFoods: [...sumTodaysList],
    });
    console.log('TCL: SUMtodaysFoods: ', sumTodaysList);
  };

  existFoodOnListAndSum = (listFoods, food) => {
    let total = listFoods;
    console.log('TCL: existFoodOnListAndSum -> total', total);
    console.log('TCL: existFoodOnListAndSum -> food', food);
    const index = listFoods.findIndex(element => {
      return element.name === food.name;
    });
    console.log('TCL: existFoodOnListAndSum -> index', index);

    if (index > -1) {
      total[index].quantity =
        parseInt(total[index].quantity) + parseInt(food.quantity);
      total[index].calories =
        parseInt(total[index].calories) + parseInt(food.calories);
    } else {
      total.push(food);
      console.log('TCL: existFoodOnListAndSum -> total', total);
      return total;
    }
    return total;
  };

  removeItem = index => {
    const { todaysFoods } = this.state;
    const newFoods = todaysFoods.splice(index, 1);
    this.setState({
      todaysFoods: [...todaysFoods],
    });
  };

  render() {
    const { searchFoods, todaysFoods, showForm, foods } = this.state;
    console.log('Foods: ', foods);

    return (
      <div className="App">
        {/* <Button >New Food</Button> */}

        <FormNewFood
          handleNewFood={this.handleNewFood}
          handleShowForm={this.handleShowForm}
        ></FormNewFood>

        <Search handleSearch={this.handleSearch}></Search>
        <div className="columns">
          <div className="column">
            {/* {foods.map((food, index) => (
              <FoodBox
                key={`f-${index}`}
                food={food}
                index={index}
                handleAddTodayFood={this.handleAddTodayFood}
              ></FoodBox>
            ))} */}

            {console.log('TCL: render -> searchFoods', searchFoods)}

            {searchFoods.map((food, index) => (
              <FoodBox
                key={`f-${index}`}
                food={food}
                index={index}
                handleAddTodayFood={this.handleAddTodayFood}
              ></FoodBox>
            ))}
          </div>
          <div className="column">
            <TodaysFoods
              todaysFoods={todaysFoods}
              removeItem={this.removeItem}
            ></TodaysFoods>
          </div>
        </div>

        {/* <FoodBox foods={foods}></FoodBox> */}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
