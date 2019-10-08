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
    const {
      OnOffvisibleSearchNFindFood,
      onoffShowAll,
      handleAddFood
    } = this.props;
    const { visible } = this.state;

    return (
      <div>
        {visible ? (
          <button
            className="Button"
            onClick={() => {
              this.handleOnOffAddfood();
              OnOffvisibleSearchNFindFood();
            }}
          >
            Add new food
          </button>
        ) : null}
        {!visible ? (
          <FormAddFood
            OnOffvisibleSearchNFindFood={OnOffvisibleSearchNFindFood}
            onoffShowAll={onoffShowAll}
            OnOffAddfood={this.handleOnOffAddfood}
            handleAddFood={handleAddFood}
          />
        ) : null}
      </div>
    );
  }
}

export default AddFood;
