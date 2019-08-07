import React, { Component } from 'react'

class Form extends Component {
    state = {
        name: '',
        calories: '',
        image: '',
        foods: [],
    }
    
    handleInputChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    render() {
        
        const {name, calories, image} = this.state;

        return (
            <div>
                <h2>Foods</h2>
                <form>
                    <label htmlFor='name'>Name</label>
                    <input id= 'name' type='text' name= 'name' placeholder ='Pizza' value={name} onChange = {this.handleInputChange}/>
                    <label htmlFor='calories'>Calories</label>
                    <input id='calories' type= 'number' name='calories' placeholder = '400' value= {calories} onChange = {this.handleInputChange}/>
                    <label htmlFor='image'>Image</label>
                    <input id='image' type='text'name= 'image' placeholder = 'picture' value= {image} onChange = {this.handleInputChange}></input>
                </form>

            </div>
        )
    }
}

export default Form;







       