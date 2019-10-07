import React, { Component } from 'react';

class FormNewFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      calories: 0,
      quantity: 0,
      image: '',
      showForm: false,
    };
    // this.handleNewFood = this.handleNewFood.bind(this);
  }

  handleNameInput = event => {
    this.setState({
      name: event.target.value,
    });
  };
  handleCaloriesInput = event => {
    this.setState({
      calories: event.target.value,
    });
  };
  handleQuantityInput = event => {
    this.setState({
      quantity: event.target.value,
    });
  };
  handleImageInput = event => {
    this.setState({
      image: event.target.value,
    });
  };

  handleFormSubmit = event => {
    // const { handleShowForm } = this.props;
    event.preventDefault();
    this.props.handleNewFood(this.state);
    this.setState({
      name: '',
      calories: 0,
      quantity: 0,
      image: '',
    });
    this.handleShowForm();
  };
  handleShowForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  render() {
    const { showForm } = this.state;
    return (
      <>
        <button className="add-newFood" onClick={this.handleShowForm}>
          New Food
        </button>
        {showForm && (
          <div>
            <form onSubmit={this.handleFormSubmit}>
              <label>New Food Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={e => this.handleNameInput(e)}
              />
              <br></br>
              <label>New Food calories:</label>
              <input
                type="number"
                name="calories"
                value={this.state.calories}
                onChange={e => this.handleCaloriesInput(e)}
              />
              <br></br>
              <label>New Food quantity:</label>
              <input
                type="number"
                name="quantity"
                value={this.state.quantity}
                onChange={e => this.handleQuantityInput(e)}
              />
              <br></br>
              <label>New Food picture:</label>
              <input
                type="text"
                name="image"
                value={this.state.image}
                onChange={e => this.handleImageInput(e)}
              />
              <br></br>
              <input type="submit" value="Submit" />
            </form>
          </div>
        )}
      </>
    );
  }
}

export default FormNewFood;
