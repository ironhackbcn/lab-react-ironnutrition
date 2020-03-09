import React, { useState } from "react";

export default function FoodBox_hooks(props) {
     const [amount, setAmount] = useState(0)

    const handleClick = () => {
        handleValue()
    }
    const handleValue = () => {
        setAmount(prevAmount => prevAmount+1)
    }
    return (
      <div>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={props.food.image} alt="comida"/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{props.food.name}</strong> <br />
                  <small> {props.food.calories}cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input onChange={handleValue} className="input" type="number" value={amount}/>
                </div>
                <div className="control">
                  <button onClick={handleClick} className="button is-info">+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

