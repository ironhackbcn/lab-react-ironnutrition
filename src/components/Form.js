import React, { Component } from 'react'

class Form extends Component {
    state = {
        name: '',
        calories: '',
        image: '',
    }
    
    handleInputChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {name, calories, image} = this.state;
        const newFood = {name, calories, image};
        this.props.handlePropsFood (newFood)
        this.setState({
          name: '',
          calories: '',
          image: '',
        })
      }
    render() {
        
        const {name, calories, image} = this.state;

        return (
            <div>
                <h2>Foods</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input id= 'name' type='text' name= 'name' placeholder ='Pizza' value={name} onChange = {this.handleInputChange}/>
                    <label htmlFor='calories'>Calories</label>
                    <input id='calories' type= 'number' name='calories' placeholder = '400' value= {calories} onChange = {this.handleInputChange}/>
                    <label htmlFor='image'>Image</label>
                    <input id='image' type='text'name= 'image' placeholder = 'picture' value= {image} onChange = {this.handleInputChange}></input>
                    <button>Add new food</button>
                </form>

            </div>
        )
    }
}

export default Form;







       