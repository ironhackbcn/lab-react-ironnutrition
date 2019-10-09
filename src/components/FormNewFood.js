import React, { Component } from 'react';
import { min, isANumber, isAHttp } from './helpers';

const validations = {
  name: min,
  calories: isANumber,
  image: isAHttp,
};

class FormNewFood extends Component {
  state = {
    form: {
      name: '',
      calories: '',
      image: '',
    },
    errors: {
      name: '',
      calories: '',
      image: '',
    },
  };

  handleForm = event => {
    const { name, value } = event.target;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      },
      errors: {
        ...this.state.errors,
        [name]: !validations[name](value),
      },
    });
  };

  render() {
    const { name, calories, image } = this.state.form;
    const { onSendForm } = this.props;
    const { name: errorName, calories: errorCalories, image: errorImage } = this.state.errors;

    return (
      <div>
        Create new food <br />
        <input
          className={errorName && 'error'}
          name="name"
          value={name}
          onChange={this.handleForm}
        />
        <input
          className={errorCalories && 'error'}
          name="calories"
          value={calories}
          onChange={this.handleForm}
        />
        <input
          className={errorImage && 'error'}
          name="image"
          value={image}
          onChange={this.handleForm}
        />
        <br />
        <button
          onClick={() => {
            onSendForm(name, calories, image);
          }}
        >
          Add new food
        </button>
      </div>
    );
  }
}

export default FormNewFood;
