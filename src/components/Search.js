import React, { Component } from 'react'

export default class Search extends Component {

  searchHandler = (e) => {
    this.props.search(e.target.value) 
  }

  render() {
    return (
      <div>
        <input type="search"  name='name' placeholder='Search' onChange={this.searchHandler}/>
      </div>
    )
  }
}
