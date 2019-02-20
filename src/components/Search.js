import React, { Component } from 'react';

class Search extends Component {
  state = {
    search: ''
  }

  searchText = (e) => {
    let text = e.target.value;
    let { searchProp } = this.props;
    searchProp(text);
    this.setState({
      search: text,
    })

  }

  render() {
    return (
      <div>
        <input type="text" class="input" placeholder="Search" onChange={this.searchText} />
      </div>
    )
  }
}

export default Search;