import React, { Component } from "react";
import Button from "./Button";

class FormNewFood extends Component {
  state = {
    form: {
      name: "name",
      calories: "calories",
      image: "image",
    },
  };

  handleForm = event => {
    const { name, value } = event.target;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      },
    });
  };
  render() {
    const { name, calories, image } = this.state.form;
    const { onSendForm } = this.props;
    return (
      <div>
        Create new food <br />
        <input name="name" value={name} onChange={this.handleForm} />
        <input name="calories" value={calories} onChange={this.handleForm} />
        <input name="image" value={image} onChange={this.handleForm} />
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
