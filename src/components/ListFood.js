import React, { Component } from 'react';
import foods from '../data/foods.json'

class ListFood extends Component {
  render() {
    return (
        <div className="foods">
             {foods.map((listAllFood, index) =>{
                 return ( 
                   <div className="box" key={`index-${index}`}>
                    <article className="media">
                      <div className="media-left">
                        <figure className="image is-64x64">
                          <img src={listAllFood.image} alt="" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>{listAllFood.name}</strong> <br />
                            <small>{listAllFood.calories}</small>
                          </p>
                        </div>
                      </div>
                      <div className="media-right">
                        <div className="field has-addons">
                          <div className="control">
                            <input
                              className="input"
                              type="number" 
                              value="1"
                            />
                          </div>
                          <div className="control">
                            <button className="button is-info">
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                 );

             })}
        </div>
    );
  }
}

export default ListFood;
