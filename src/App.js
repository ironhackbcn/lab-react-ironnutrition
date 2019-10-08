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

  handleAddFoodToday = (food) => {
    
   const {todayFood} = this.state;
   console.log('food', food.name)
   console.log('todayFood.length', todayFood.length)
    if (todayFood.length>0){
       const pos = todayFood.filter(food.name);
       console.log('pos', pos[0]);

       if (pos) { 
         console.log('pos', pos)
         const newState = [...todayFood];
         newState[pos[0]]=newState.quantity+food.quantity;
         this.setState({todayFood: [...newState]});
       }
       else {this.setState({todayFood: [...this.state.todayFood,food]});}
    }
    else{
    this.setState({todayFood: [...this.state.todayFood,food]});
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

                <div>
                <FindFood myFunction={this.handleSearch} valueForm={form} />
                </div>

                <div className="listfood">
                  <div className="findfood-searched">
                    
                    {/*This is a Searched Food Map */}
                    <SearchedFood sfood={searchedFood}  AddFoodToday={this.handleAddFoodToday} />
                  </div>
                  <div className="todayfood">
                    <TodayFood
                      todayFood={this.state.todayFood}
                      
                    />
                  </div>
                </div>

             </div> ) : null}
            
         </div> ) : null}
        </header>
      </div>
    );
  }
}

export default App;
