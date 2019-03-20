import React, { Component } from 'react';

export class AddForm extends Component {

  onSubmitForm(event) {
    event.preventDefault();
    const data = {
      image: 'https://s1.dia.es/medias/h0c/h2d/8974041612318.jpg',
      name: event.target.name.value,
      calories: event.target.calories.value,
    }
    event.target.name.value = "";
    event.target.calories.value = "";
    this.props.onNewFood(data);
  }

  render() {
    return (
      <form className='add-food' onSubmit={(event) => this.onSubmitForm(event)}>
        <input name='image' placeholder='Image'></input>
        <input name='name' placeholder='Name'></input>
        <input name='calories' placeholder='Calories'></input>
        <button className="button is-info" type='submit'>Add Dish</button>
      </form>
    );
  }
}