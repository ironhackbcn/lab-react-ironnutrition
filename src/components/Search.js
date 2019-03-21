import React, { Component } from 'react';

class Search extends Component {
  state = {
    name: "search",
  }
  
  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    var updatedList = this.props.todos;
     updatedList = updatedList.filter(function(item){
       return item.name.toLowerCase().search(
         event.target.value.toLowerCase()) !== -1;
     });
     this.props.filterList(updatedList)
  } 

  render() {
    return (
      <div>
        <form>
          <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInput}
          />
        </form>
      </div>
    );
  }
}

export default Search;