import React from 'react';
import './TodaysFoods.css';
import trash from './trash.png';

const TodaysFoods = ({ todayFoods, deleteFood }) => {

    const caloriesSum = todayFoods.reduce((total, value) => 
        total + value.calories, 0,
    );

        return (
            
            <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            <ul>
                {todayFoods.length > 0 && <div>
                    {todayFoods.map((item, index) => {
                      return (
                        <li key={`${item.name}-${index}`}> {item.quantity} {item.name} = {item.calories} cal  
                          <button onClick={() => deleteFood(item)}><img src={trash} className="trash" alt="trash" /></button>
                        </li>
                      )      
                    })}
                </div>}
            
            </ul>
            <strong>Total: {caloriesSum} cal</strong>
           </div> 
        )

}

export default TodaysFoods;