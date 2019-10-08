import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

  state = {      
    name: '',
    calories: '',
    image: ''
   }

    handleChange = (event) => {
      let { name, value } = event.target;    
      this.setState({[name]: value});
    }
  

    handleFormSubmit = (event) => {
      event.preventDefault();
      this.props.addTheFood(this.state);
      this.setState({
          name: '', 
          calories: '',
          image: '' 
      })
      this.props.hideForm();
    }

    render() {
        return (
            <div>
                <form className="Form" onSubmit={this.handleFormSubmit}>
                    <label>Name:</label><br/>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>

                    <label>Calories:</label><br/>
                    <input type="number" name="calories" value={this.state.calories} onChange={this.handleChange} /><br/>

                    <label>ImageURL:</label><br/>
                    <input type="text" name="image" value={this.state.image} onChange={this.handleChange} /><br/>
                    
                    <input type="submit" value="Submit" />
                </form>                   
            </div>
        )
    }
}

export default Form;
