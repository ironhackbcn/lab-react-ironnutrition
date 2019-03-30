
import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foodFilter: ""
    }
  }
  
  handleChange = (e) => {
    this.setState({
      foodFilter: e.target.value
    })
    this.props.onChange(e.target.value)
  }
  
  render() {
    return (
      <div>
        
        <input 
            className = "input is-focused"
            type="text" 
            id="filter" 
            value={this.state.foodFilter} 
            onChange={this.handleChange}
            placeholder='pizza/huevos/..'
          />
      </div>
      )
  }
}

export default Search;