import React, { Component } from 'react'

export default class Search extends Component {

  handleChange = (e) => {
    const pattern = `${e.target.value}`;
    const searchRegExp = new RegExp(pattern, "i");
    const { search } = this.props;
    search(searchRegExp);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Search Food" onChange={this.handleChange} />
      </div>
    )
  }
}
