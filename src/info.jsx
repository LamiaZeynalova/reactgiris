
import React from 'react';

const Info = ({ image, title, price }) => {
  return (
    <div className="info">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>${price}</p>
    </div>
  );
};

export default Info;
