import React, { Component } from 'react'

class Search extends Component {

    render() {
        return (
            <div className="search-box">
              <input 
                onChange={this.props.handleSearch}/>
            </div>
        );
    }
}

export default  Search;
