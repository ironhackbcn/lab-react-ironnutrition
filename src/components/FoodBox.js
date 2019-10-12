import React, { Component } from 'react';
import 'bulma/css/bulma.css';

const imageSize = {
  width: '100px',
  height: 'auto'
}

export class FoodBox extends Component {

  state = {
    quantity: 1,
  }

  onSubmitForm(event) {
    event.preventDefault();
    const data = {
      name: this.props.dish.name,
      quantity: event.target.quantity.value,
      totalCal: event.target.quantity.value * this.props.dish.calories
    }
    this.props.onData(data);
  }

  handleChanges = (event) => {
    if (event.target.value > 0) {
      this.setState({
        quantity: event.target.value,
      })
    }
  }

  render() {
    const { image, name, calories } = this.props.dish;
    return (
      <div className='container-row food'>
        <div className='container'>
          <img style={imageSize} src={image} alt={name} />
          <div className='container'>
            <p>{name}</p>
            <p>{`${calories}kcal`}</p>
          </div>
        </div>
        <form onSubmit={(event) => this.onSubmitForm(event)}>
          <input type='number' name='quantity' value={this.state.quantity} onChange={(event) => this.handleChanges(event)}></input>
          <button className="button is-info" type='submit'>+</button>
        </form>
        <button className="button is-info remove-button" onClick={() => this.props.onRemove(name)}>Remove Dish</button>
      </div >
    );
  }
}