import React, { Component } from 'react'

export default class search extends Component {

  state = {
    search: '',
  }

  handleChange = (e) => {
    this.props.search(e.target.value);
  }

  render() {
    return (
      <div>
        <input name="search" className="input search-bar" onChange={this.handleChange} placeholder="Search"></input>
      </div>
    )
  }
}
