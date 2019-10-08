import React, { Component } from "react";
import "./App.css";
import foods from "./data/foods.json";
import FindFood from "./components/FindFood";
import SearchedFood from "./components/SearchedFood";
import AddFood from "./components/DynamicList/AddFood";
import TodayFood from "./components/TodayFood";

class App extends Component {
  state = {
    allFood: [...foods],
    searchedFood: [...foods],
    todayFood: [],
    form: "",
    visible: true,
    visibleSearchNFindFood: true
  };

  handleDeleteFood = index => {
    const { allFood, todayFood } = this.state;
    const name = allFood[index].name;
    allFood.splice(index, 1);
    this.setState({ allFood: [...allFood], searchedFood: [...allFood] });
    todayFood.splice(
      todayFood
        .map(tfood => {
          return tfood.name;
        })
        .indexOf(name),
      1
    );
  };

  handleHideShowFood = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  };

  handleOnOffvisibleSearchNFindFood = () => {
    const { visibleSearchNFindFood } = this.state;
    this.setState({ visibleSearchNFindFood: !visibleSearchNFindFood });
  };

  handleSearch = value => {
    const { allFood } = this.state;
    if (value === "") {
      this.setState({ searchedFood: [...allFood] });
      this.setState({ form: "" });
    } else {
      const newState = [...allFood].filter(food => {
        return food.name.toLowerCase().indexOf(value.toLowerCase()) !== -1; //avoid the return position -1 not matches
      });
      this.setState({ searchedFood: [...newState] });
      this.setState({ form: value });
    }
  };

  handleAddFood = food => {
    const allFoodCopy = [...this.state.allFood];
    allFoodCopy.push(food);
    this.setState({ allFood: [...allFoodCopy] });
  };

  handleAddFoodToday = food => {
    let { todayFood } = this.state;
    const pos = todayFood
      .map(tfood => {
        return tfood.name;
      })
      .indexOf(food.name);
    if (pos >= 0) {
      todayFood[pos].quantity += parseInt(food.quantity);
      this.setState({ todayFood: [...todayFood] });
    } else {
      const newFood = {
        name: food.name,
        quantity: parseInt(food.quantity),
        calories: food.calories
      };
      this.setState({ todayFood: [newFood, ...todayFood] });
    }
  };

  render() {
    const { form, searchedFood, visible, visibleSearchNFindFood } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-h1">IronNutrition</h1>
          {/*This is form and button component */}
          {visible ? (
            <div className="all-food">
              <AddFood
                OnOffvisibleSearchNFindFood={
                  this.handleOnOffvisibleSearchNFindFood
                }
                onoffShowAll={this.handleHideShowFood}
                handleAddFood={this.handleAddFood}
              />
              {/* This is a Search Food Bar*/}

              {visibleSearchNFindFood ? (
                <div>
                  <div className="search-bar">
                    <FindFood myFunction={this.handleSearch} valueForm={form} />
                  </div>

                  <div className="listfood">
                    <div className="findfood-searched">
                      {/*This is a Searched Food Map */}
                      <SearchedFood
                        sfood={searchedFood}
                        AddFoodToday={this.handleAddFoodToday}
                        DeleteFood={this.handleDeleteFood}
                      />
                    </div>
                    <div className="todayfood">
                      <TodayFood todayFood={this.state.todayFood} />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </header>
      </div>
    );
  }
}

export default App;
