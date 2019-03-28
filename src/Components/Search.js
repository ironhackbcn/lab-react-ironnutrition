import React, { Component } from 'react';

class Search extends Component {

    state = {
        query: '',
    }
    
    handleChange = (event) => {
        const query = event.target.value;
        this.setState({ query });
        this.props.searched(query);
    }

    render() {
        return (
            <div> 
                <input type='text'
                placeholder='Search ...' onChange={this.handleChange}/>
            </div>
        )
    }
}

export default Search;