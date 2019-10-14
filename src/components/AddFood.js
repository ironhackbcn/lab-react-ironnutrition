import React, { Component } from 'react';

class AddFood extends Component {
  state = {
    toggleForm: false,
    name: '',
    calories: 0,
    image: 'https://i.imgur.com/93ekwW0.jpg',
    quantity: 0
  };

  showForm = () => {
    this.setState({
      toggleForm: !this.state.toggleForm
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addFood({
      name: this.state.name,
      calories: this.state.calories,
      image: 'https://i.imgur.com/93ekwW0.jpg'
    });
    this.showForm();
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    if (this.state.toggleForm) {
      return (
        <div className="box">
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="calories"
              placeholder="Calories"
              value={this.state.calories}
              onChange={this.onChange}
            />
            <figure className="image is-64x64">
              <img src={this.state.image} alt="img"></img>
            </figure>
            <input
              type="submit"
              className="button"
              // onClick={() => this.showForm()}
              value="S"
            ></input>
          </form>
        </div>
      );
    } else {
      return (
        <div className="box">
          <button className="button" onClick={() => this.showForm()}>
            Create New Food!
          </button>
        </div>
      );
    }
  }
}

export default AddFood;
