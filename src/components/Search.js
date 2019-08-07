import React, { Component } from 'react'

class Search extends Component {

  render() {
    return (
        <input type="text" value={this.props.value} onChange={this.props.handleSearch}/>
    )
  }
}

export default Search;