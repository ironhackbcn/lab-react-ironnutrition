import React, { Component } from "react";
import FormAddFood from "./FormAddFood";

class AddFood extends Component {
  state = {
    visible: true
  };

  handleOnOffAddfood = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  };

  render() {
    const { onoffShowFood } = this.props;
    const { visible } = this.state;
    
    return (
      <div>
        {visible ? (
          <button
            className="Button"
            onClick={() => {
              onoffShowFood();
              this.handleOnOffAddfood();
              
            }}
          >
            Add new food
          </button>
        ) : null}

        <FormAddFood
          visibleButton={this.handleOnOffButton}
          visibleFoodSearched={onoffShowFood}
         />
      </div>
    );
  }
}

export default AddFood;
