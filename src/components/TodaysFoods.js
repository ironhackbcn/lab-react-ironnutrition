import React from 'react';

export default function TodaysFoods(props) {
  const { selectedFoods, totalCalories } = props;
  console.log(selectedFoods)
  return (
    <article>
      <h2>Today's foods</h2>
      <ul>
        {selectedFoods.map((food, i) => (
          <li key={i}>{`${food.quantity} ${food.name} = ${food.calories * food.quantity}`}</li>
        ))}
      </ul>
      <p>Total: {totalCalories}</p>
    </article>
  );
}
