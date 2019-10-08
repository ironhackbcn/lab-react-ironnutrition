import React, { Component } from 'react';
import foods from '../data/foods.json'

class FormAddFood extends Component {
    state = {
        name: "name",
        calories: "calories",
        image: "image",
    }

    handleFormAdd = event =>{ 
        const { name, value } = event.target
        
        this.setState({
            [name]: value, 
        })
    }
  render() {
      const { name, calories, image } = this.state;
      const { formSend } = this.props;
    return (
        <>
                <input name="name" value={name} onChange={this.handleFormAdd} ></input>
                <input name="calories" value={calories} onChange={this.handleFormAdd} ></input>
                <input name="image" value={image} onChange={this.handleFormAdd} ></input>
                <button onClick={() => {formSend(name, calories, image)}}>Send</button>
        </>
    );
  }
}

export default FormAddFood;
