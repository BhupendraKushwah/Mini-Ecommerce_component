
import './App.css';
import Home from './Component/Home';
import Cart from './Component/Cart';
import { useState } from 'react';
import axios from 'axios';
import Navbar from './Component/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleCartShow = (status) => {
    setShowCart(status)
  }
  const addToCart = async (productId) => {
    const response = await axios.post('http://localhost:5000/add-to-cart', { productId, quantity: 1 });
    setCart(response.data);
    console.log(response.data,productId)
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar handleCartShow={handleCartShow} />
        {!showCart ? <Home addToCart={addToCart} /> :
          <Cart cart={cart} />}
      </div>
    </BrowserRouter>
  );
}

export default App;
