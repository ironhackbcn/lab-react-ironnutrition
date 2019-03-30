import React, { Component } from 'react';

class AddForm extends Component {
    state = {
        name: '',
        calories: '',
        image: '',
        
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleClick = () => {
        const {name, calories, image} = this.state
        this.props.onClick(this.state);
        this.props.form(this.state);
    }


    render(){
        const {name, calories, image} = this.state;
        return (
            <div>
                <label>Name</label>
                <input 
                    type="text"
                    value={name}
                    onChange={this.handleInput}
                    name='name'
                    placeholder='pon aqui algo que seguro se te olvida'>
                </input>
                <label>Calories</label>
                <input 
                    type="text"
                    value={calories}
                    onChange={this.handleInput}
                    name='calories'
                    placeholder='pon aqui algo que seguro se te olvida'>
                </input>
                <label>Image</label>
                <input 
                    type="text"
                    value={image}
                    onChange={this.handleInput}
                    name='image'
                    placeholder='pon aqui algo que seguro se te olvida'>
                </input> 
                <button onClick = {this.handleClick}>Sumit</button>  
            </div>
        )
    }
}

export default AddForm;