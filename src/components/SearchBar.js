import React, { Component } from 'react';


class SearchBar extends Component {

   handleChange = (event) => {       
    this.props.onSearch(event.target.value)       
   }

   render() {
     return (    
        <div> 
          <input type="text" className="input search-bar" name="search" placeholder="Search"  onChange={this.handleChange}/>           
        </div>           
     )
   }
}

export default SearchBar;

