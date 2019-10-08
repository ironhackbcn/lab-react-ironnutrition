import React, { Component } from 'react';


class TodayFood extends Component {
    render(){
        const {todayFood} =this.props;
        return(<div>
            <h2>Today's Food</h2>
               <ul>
                  {todayFood.map((food,index)=>{ return (<li key={`${food.name}-${index}`}>{food.name} {food.calories} {food.quantity}</li>)})}
               </ul>
            
        </div>)
    }
}

export default TodayFood;