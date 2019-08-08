import React, { Component } from 'react';
import './App.css';
import foods from './data/foods.json'
import FoodBox from './Components/FoodBox';

class App extends Component {

  state = {
    foods,
    filteredFoods: foods,
    displayForm: false,
  };


  handleSubmit = (e) => {
    e.preventDefault();
    const {foods} = this.state;
    const foodsCopy = [...foods];
    const newFood = {name: e.target.name.value, calories: e.target.calories.value, image: e.target.image.value}
    foodsCopy.push(newFood)
    this.setState({
      foods: foodsCopy,
      displayForm: false
    })
  }

handleSearch = (e) => {
  const {foods} = this.state;
  const foodsCopy = [...foods];
  const searchQuery = e.target.value
  if(searchQuery === ''){
    console.log('vulva');
    this.setState({
      filteredFoods: foods
    })
  } else {
    const searchResults = foodsCopy.filter( food => food.name.toLowerCase().includes(searchQuery))
    this.setState({
      filteredFoods: searchResults
  })
  }
}

  render() {
    const {foods, filteredFoods, displayForm} = this.state;
    return (
      <div className="App">

        <h1>IronNutrition</h1>

        <section>
        <label htmlFor='search'>Search food:</label>
        <input name='search' id='search' placeholder='Search your favourite food' type="text" onChange={this.handleSearch} />
      </section>

        <button className={'button is-success'} onClick={() => {
          this.setState({
            displayForm: true
          })
        }}>+</button>
        

        {displayForm === true ? 
        
        <form onSubmit={this.handleSubmit}>
         <label htmlFor='name'>Name</label>
         <input required id='name' type='text' name='name' placeholder='Spaguetti' defaultValue={foods.name} onChange={this.handleChange}/>
         <label htmlFor='calories'>Calories</label>
         <input required id='calories' type='number' name='calories' placeholder='200' defaultValue={foods.calories} onChange={this.handleChange}/>
         <label htmlFor='image'>Image</label>
         <input required id='image' type='text' name='image' placeholder='Image URL' defaultValue={'https://www.friedas.com/wp-content/uploads/2012/02/Friedas-Dragon-Fruit-White.jpg'} onChange={this.handleChange}/>
         <button type='submit' className={'button is-success'}>Add food</button>
       </form>

        : null }
        {
         filteredFoods.map((food, index) => {
           return (
            <FoodBox name={food.name} image={food.image} calories={food.calories} key={index}/>
           )
         })
        }       
      </div>
    );
  }
}

export default App;
