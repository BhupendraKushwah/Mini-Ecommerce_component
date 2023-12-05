
import React, { useState } from 'react';

const Product = ({item,addToCart}) => {
  
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="product-details">
        <h1>{item.title}</h1>
        <p className="product-description">{item.auth}</p>
        <p className="product-price">{item.price}</p>
        <label htmlFor="quantity">Quantity:</label>
        <div className="quantity-control">
          <button className="add-to-cart-btn" onClick={()=>addToCart(item._id)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
