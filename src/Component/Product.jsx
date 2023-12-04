
import React, { useState } from 'react';

const Product = ({item}) => {
  const handleAddToCart = (id) =>{
    console.log(id);
  }
  return (
    <div className="product-container">
      <div className="product-image">
        {console.log(item)}
        <img src={item.img} alt={item.title} />
      </div>
      <div className="product-details">
        <h1>{item.title}</h1>
        <p className="product-description">{item.auth}</p>
        <p className="product-price">{item.price}</p>
        <label htmlFor="quantity">Quantity:</label>
        <div className="quantity-control">
          <button className="add-to-cart-btn" onClick={()=>handleAddToCart(item._id)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
