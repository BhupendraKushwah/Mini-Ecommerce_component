
import './App.css';
import Home from './Component/Home';
import Cart from './Component/Cart';
import { useState } from 'react';
import axios from 'axios';
import Navbar from './Component/Navbar';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart,setShowCart] = useState(false);
  const handleCartShow=(prev)=>{
    setShowCart((prev)=>!prev)
  }
  const addToCart = async (productId) => {
    // Send a POST request to add the product to the cart
    const response = await axios.post('http://localhost:5000/add-to-cart', { productId });
    setCart(response.data.cart);
  };

  return (
    <div className="App">
      <Navbar handleCartShow={handleCartShow}/>
      {!showCart?<Home addToCart={addToCart}/>:
      <Cart cart={cart}/>}
    </div>
  );
}

export default App;
