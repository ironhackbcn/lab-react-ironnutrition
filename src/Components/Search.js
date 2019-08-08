import React, { Component } from 'react'

class Search extends Component {

  

  render() {
    return (
      <section>
        <label htmlFor='search'>Search food:</label>
        <input name='search' id='search' placeholder='Search your favourite food' type="search"/>
      </section>
    )
  }
}

export default Search;