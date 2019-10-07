import React, { Component } from "react";
import FormAddFood from "./FormAddFood";

class AddFood extends Component {
  state = {
    visible: true
  };
  handleOnOffButton = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  };
  render() {
    const { onoffShowFood} = this.props;
    const { visible}= this.state;
    return (
      <div>
        {visible ? (
          <button
            className="Button"
            onClick={() => {
              onoffShowFood();
              this.handleOnOffButton();
            }}
          >
            Add new food
          </button>
        ) : null}
        {!visible ?
        <FormAddFood visibleButton={this.handleOnOffButton}/> : null}
      </div>
    );
  }
}

export default AddFood;
