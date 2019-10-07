import React, { Component } from 'react';
import Button from './Button';

class FoodBox extends Component {
  constructor(props) {
    super(props);
    // const { food } = this.props;
    this.state = {
      // food: food,
      quantity: 1,
    };
  }

  handleQuantity = event => {
    this.setState({
      // quantity: event.target.value,
      quantity: event.target.value,
    });
  };

  todayFood = () => {
    const { food, handleAddTodayFood } = this.props;
    console.log('TCL: FoodBox -> todayFood -> food', food);

    const auxFood = Object.assign({}, food);
    auxFood.quantity = this.state.quantity;
    auxFood.calories = auxFood.quantity * auxFood.calories;
    handleAddTodayFood(auxFood);
  };

  render() {
    const { food, index, handleAddTodayFood } = this.props;
    const { quantity } = this.state;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={quantity}
                  onChange={e => this.handleQuantity(e)}
                />
              </div>
              <div className="control">
                {/* <button className="button is-info">+</button> */}
                <Button
                  myProp={() => {
                    this.todayFood();
                  }}
                  className="button is-info"
                >
                  +
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
