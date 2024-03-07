
import React from 'react';
import img from './product.1.webp';
import  './info.css';


const info = () => {
  return (
    <>
    <div className='card'>
    <img src={img} />
    <h2 className="card-tittle">Mehsul</h2>
    <p className="price">30$</p>
    </div>
    <div className='card'>
    <img src={img} />
    <h2 className="card-tittle">Mehsul</h2>
    <p className="price">30$</p>
    </div>
    <div className='card'>
    <img src={img} />
    <h2 className="card-tittle">Mehsul</h2>
    <p className="price">30$</p>
    </div>
    <div className='card'>
    <img src={img} />
    <h2 className="card-tittle">Mehsul</h2>
    <p className="price">30$</p>
    </div>
    </>
  )
}

export default info
