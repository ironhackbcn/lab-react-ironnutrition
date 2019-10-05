import React, { Component } from "react";

class Card extends Component {
    render()
    {
        const {name} = this.props;
        return (<div>{name}</div>);
    }
}

export default Card;

