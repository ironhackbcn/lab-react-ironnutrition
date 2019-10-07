import React, { Component } from 'react';

class Search extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   nameToFind: '',
  //   // };
  // }
  handleSearchName = event => {
    const { handleSearch } = this.props;
    console.log('TCL: Search -> event.target.value', event.target.value);
    // const { nameToFind } = this.state;
    // this.setState({
    //   nameToFind: event.target.value,
    // });
    // console.log('TCL: Search -> nameToFind', nameToFind);
    handleSearch(event.target.value);
  };
  render() {
    // const { nameToFind } = this.state;
    return (
      <div>
        <label>Search Food:</label>
        <input
          type="text"
          name="name"
          defaultValue=""
          onChange={e => this.handleSearchName(e)}
        />
      </div>
    );
  }
}

export default Search;
