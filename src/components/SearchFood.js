import React, { Component } from 'react'

class SearchFood extends Component {

  state = {
    search: '',
  }

  handleChange = (e) => {
    console.log('changing')
    this.props.search(e.target.value);
  }

  render() {
    return (
      <div>
        <input type="text" name="name" onChange={this.handleChange} placeholder="Search..."/>
      </div>
    )
  }
}

export default SearchFood;
