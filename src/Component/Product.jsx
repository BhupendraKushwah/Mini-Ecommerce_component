
import React, { useState } from 'react';

const Product = () => {
  const product = {
    id: 1,
    name: 'vivo T2 Pro 5G (Dune Gold, 256 GB)  (8 GB RAM)',
    price: '₹24,999',
    description:
      "The T2 Pro 5G smartphone features a 3D curved AMOLED screen providing a bright display with a peak brightness of 1300 nits. Improve your performance with the MediaTek Dimensity 7200 processor. Powered with a 64 MP main camera with OIS and a night camera with Aura Light, keep clicking stunning pictures all day and night. This smartphone is slim, lightweight and boasts a premium design with AG glass back cover. Available in 8 GB+8 GB RAM, and ROM fused together with an optimized algorithm, you can easily use around 27 apps simultaneously. Powered by a 4600 mAH large battery, you can quickly boost your phone's charge with the 66 W Flash Charge.",
    imageUrl:
      'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=70',
  };

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.name}(s) to the cart!`);
  };

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price}</p>
        <label htmlFor="quantity">Quantity:</label>
        <div className="quantity-control">
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
