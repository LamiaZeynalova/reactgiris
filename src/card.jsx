// Card.js
import React from 'react';
import Info from './info'; 

const Card = () => {
  return (
    <div className="card">
      <Info image="image-url.jpg"
       title="Mehsul"
        price="200$" />
    </div>
  );
};

export default Card;
