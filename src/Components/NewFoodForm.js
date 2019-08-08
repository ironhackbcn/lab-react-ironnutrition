import React, { Component } from 'react'

class NewFoodForm extends Component {

  state = {
    name: '',
    calories: '',
    image: 'https://www.friedas.com/wp-content/uploads/2012/02/Friedas-Dragon-Fruit-White.jpg',
    foods
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const {name, calories, image, foods} = this.state;
    const citiesCopy = [...cities];
    // hacemos shallow copy
    const newCity = {name, population, area};
    // añadimos la nueva city a la shallow copy de cities
    citiesCopy.push(newCity)
    //pasamos las cities con la nueva añadida, y hacemos reset del resto de values para que el form quede vacío tras el submit
    this.setState({
      cities: citiesCopy,
      name: '',
      population: '',
      area: ''
    })
  }

  render() {
    const {name, image, calories, display} = this.state;
    return (
      <form>
         <label htmlFor='name'>Name</label>
         <input required id='name' type='text' name='name' placeholder='Spaguetti' value={name}/>

         <label htmlFor='calories'>Name</label>
         <input required id='calories' type='number' name='calories' placeholder='200' value={calories}/>

         <label htmlFor='image'>Image</label>
         <input required id='image' type='text' name='image' placeholder='Image URL' value={image}/>


         <button type='submit' className={'button'}>Add food</button>
       </form>
    )
  }
}

export default NewFoodForm;