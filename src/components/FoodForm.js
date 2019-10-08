import React from 'react';

class FoodForm extends React.Component {
  state = {
    name: '',
    calories: '',
    image: '',
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addTheFood(this.state);
    this.setState({
      name: '',
      calories: '',
      image: '',
    });
    this.props.hideForm();
  };

  render() {
    return (
      <div className="box">
        <h2>Edit your Fodd</h2>

        <form onSubmit={this.handleFormSubmit}>
          <label> Name: &nbsp;</label>
          <input
            placeholder="Name"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label> Calories: &nbsp; </label>
          <input
            placeholder="Calories"
            name="calories"
            type="text"
            value={this.state.calories}
            onChange={this.handleChange}
          />
          <label> Image: &nbsp;</label>
          <input
            placeholder="image"
            name="image"
            type="text"
            value={this.state.image}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default FoodForm;
