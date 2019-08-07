import React, { Component } from 'react'

 class Search extends Component {


   handleSearchBar = (event) => {
     const name = event.target.value;
     let newFoods = this.props.originalFoods;
     let filteredFoods = newFoods.filter((food => food.name.includes(name)))
     this.props.changeFoods(filteredFoods)
   }

  render() {
    return (
      <div>
          <input type="text" name="txtBox" onChange={(e)=>this.handleSearchBar(e)}/>
      </div>
    )
  }
}
export default Search;