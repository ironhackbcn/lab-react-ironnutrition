import React, { Component } from 'react';
import foods from './data/foods.json'
import './App.css';
import FoodBox from './components/FoodBox.js';


class App extends Component {
    state = {
        foods,
        add: false,
        showingFoods: foods,
        textShowing:'',
        myList:[],
        totalCalories: 0
    }
    addElements = (value, name, calories) => { 
        const result = this.state.myList.filter( food => food.name === name);
        const newList = [...this.state.myList]
        const newSum = this.state.totalCalories + (calories * value);
    if(value === 0){
    
     } else if (result.length){
        const newnew = newList.map((item) => {
            if(item.name === name){
                item.calories = Number(item.calories) + Number(calories * value);
                item.value = Number(item.value) + Number(value)
            }
            return item
        })
        this.setState({
            myList:newnew,
            totalCalories: newSum
        })
    }else{
     calories = calories * value;
     newList.push({name,calories,value})
     this.setState({
         myList:newList,
         totalCalories: newSum
     })
    }
    }

 changeStateOfButton = () => {
     const { add } = this.state;
     let newState;
     if (add) {newState = false} else {newState=true}
    this.setState({
        add: newState,
    })
 }

 handleSubmit = (event) => {
     event.preventDefault();
     const newObject = {
         name: event.target.name.value,
         calories:event.target.calories.value,
         image:event.target.image.value
     }
     const newArray = [...this.state.foods]
     newArray.push(newObject);
     this.setState({
        foods: newArray,
        showingFoods:newArray
    })
    this.changeStateOfButton(); 
 }

 handleTextChange = (event) => {
    const {value} = event.target
    const newFoods = [...this.state.foods]
    const searchResults = newFoods.filter( food => food.name.toLowerCase().includes(value.toLowerCase()))
    this.setState({
        showingFoods: searchResults,
        textShowing: value
    })
 }

 handleDelete = (value, name, calories) =>{
    const result = this.state.myList.filter( food => food.name === name);
    const newList = [...this.state.myList]
    if(value === 0){

    } else if (result.length){
        let newSum = this.state.totalCalories;
        const newnew = newList.map((item) => {
            if(item.name === name && item.value >= value){
                newSum -= (calories * value)
                item.calories = Number(item.calories) - Number(calories * value);
                item.value = Number(item.value) - Number(value)
            }
            return item
        })
        this.setState({
            myList:newnew,
            totalCalories: newSum
        })
    }
 } 


  render() {
      const {showingFoods, add, textShowing, myList,totalCalories} = this.state;
    return (
      <div className="App">
      <button onClick={this.changeStateOfButton}>Add new food</button>
      { add ? (
        
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input name='name' placeholder='Name of the food' type='text' id='name'/>
                <label htmlFor='calories'>Calories</label>
                <input name='calories' placeholder='100...' type='number' id='calories'/>
                <label htmlFor='image'>Image</label>
                <input name='image' placeholder='url' type='text' id='image' />
                <button type='submit'>Save</button>
             </form> 
          
     ) : null}
       <form>
           <input type='text' name='search'onChange={this.handleTextChange} value={textShowing}/>
       </form>
       <section className='food-box'>
       <div>
      {showingFoods.map((food, index) => {
          return (<FoodBox key={index} food={food} buttonFunction={this.addElements} buttonDelete={this.handleDelete}/>)
        })}
        </div>
        <div>
            <h1>Today's food</h1>
            {myList.map((item, index) => {
               return  (<p key={index}>{item.value} -> {item.name} {item.calories}</p>)
            })}
            {myList.length ? <><p>--------------------------</p>
            <p>Total: {totalCalories}</p></> : null}
        </div>
        </section>
      </div>
    );
}
}

export default App;
