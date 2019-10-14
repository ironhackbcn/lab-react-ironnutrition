import React from "react";

const ButtonAdd = props => {
  return (
    <button className="button is-primary" onClick={props.action}>
      Add a food
    </button>
  );
};

export default ButtonAdd;
