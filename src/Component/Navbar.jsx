import React from 'react'

const Navbar = ({handleCartShow}) => {
  return (
    <div className='Navbar'>
      <div className="Navbar-logo">
        <h2>E-Shop</h2>
      </div>
      <div className="cart-img">
      <i class="fa-solid fa-cart-shopping" onClick={handleCartShow}></i>
      <span>5</span>
      </div>
    </div>
  )
}

export default Navbar
