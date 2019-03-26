import React, { Component } from 'react';

class AddFood extends Component {

    state = {
        name: '',
        calories: '',
        image: '',
        quantity: '',
    };

    _handleSubmit(e) {
        e.preventDefault();
        this.props.addedFood(this.state);
        console.log('food added')
    }
    
    _handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }

    _handleImageChange = (event) => {
        event.preventDefault();
        const reader = new FileReader();
        const file = event.target.files[0];

        reader.onloadend = () => {
            this.setState({ image: reader.result })
        }
        reader.readAsDataURL(file);
    }

    render() {
        return (
            <div>
                <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <label>Name: </label>
                    <input name="name" onChange={(e)=>this._handleChange(e)}></input>
                    <label>Calories: </label>
                    <input name="calories" onChange={(e)=>this._handleChange(e)}></input>
                    <label>Image: </label>
                    <input type="file" name="image" onChange={(e)=>this._handleImageChange(e)}></input>
                    <label>Quantity: </label>
                    <input name="quantity" onChange={(e)=>this._handleChange(e)}></input>
                    <button type="submit" onClick={(e)=>this._handleSubmit(e)}>Add</button>
                </form>
            </div>
        )
    }
}

export default AddFood;