import React, { Component } from 'react';

class FoodBox extends Component {

    state = {
        quantity: 1
    }

    changeQuantity = (e) => {

        const newquantity = e.target.value;
        this.setState({
            quantity: newquantity
        })

    }
 
    addtolist = () =>{
        this.props.addtolist(this.state.quantity, this.props.food.name, this.props.food.calories)
    }

    render(){
        const { name, calories, image, quantity} = this.props.food;
        return (
            <div className="box">
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={`${image}`} alt = "icono" />
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{name}</strong> <br />
                    <small>{calories} cal</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input
                        className="input"
                        type="number" 
                        value={this.state.quantity}
                        onChange = {this.changeQuantity}
                        name="quantity"
                    />
                    </div>
                    <div className="control">
                    <button className="button is-info" onClick = {this.addtolist}>
                        +
                    </button>
                    </div>
                </div>
                </div>
            </article>
            </div>
        )
    }
}

export default FoodBox;