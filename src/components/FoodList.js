import React, { Component } from 'react'

class FoodList extends Component {

  updateTodaysList = () => {
    const { id, removeTodaysItem } = this.props;
    removeTodaysItem(id);
  }

  render() {
    const { name, calories, quantity } = this.props;
    return (
        <div>
          <li>
            {quantity} {name} = {calories} cal
            <span className="icon is-medium" onClick={this.updateTodaysList}>
              <i class="fas fa-trash"></i>
            </span>
          </li>
        </div>
    )
  }
}

export default FoodList;
