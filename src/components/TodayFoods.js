import React from 'react';

const TodayFoods = ({ foods, handleDelete, index }) => {
  const deleteFood = (index) => {
    handleDelete(index);
  };

  const total = foods.reduce(
    (oldValue, newValue) => oldValue + newValue.quantity * newValue.calories,
    0,
  );
  return (
    <div className="column content">
      <h2 className="subtitle">Today's foods</h2>
      <ul>
        {foods.map((food, index) => {
          return (
            <li key={`item${index}`}>
              {food.quantity} {food.name} = {food.calories} cal
              <div class="btn-delete">
                <button onClick={() => deleteFood(index)}>delete</button>
              </div>
            </li>
          );
        })}
      </ul>
      <strong>Total: {total} cal</strong>
    </div>
  );
};

export default TodayFoods;
