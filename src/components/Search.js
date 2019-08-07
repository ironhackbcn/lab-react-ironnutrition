import React, { Component } from 'react'

class Search extends Component {
  state = {
    valueInput: ''
  }

  searchFood = (event) => {
    const newValue = event.target.value;
    this.props.getvalue(newValue);
    this.setState({
      valueInput: newValue
    })
  }

  render() {
    const {valueInput} = this.state;
    return (
      <input type="text" name="" value={valueInput} onChange={this.searchFood} />
    )
  }
}

export default Search;
