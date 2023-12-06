import React from 'react'

const Navbar = ({handleCartShow}) => {
  
  return (
    <div className='Navbar'>
      <div className="Navbar-logo status" onClick={()=>handleCartShow(false)}>
        <h2>E-Shop</h2>
      </div>
      <div className="cart-img status">
      <i className="fa-solid fa-cart-shopping" onClick={()=>handleCartShow(true)}></i>
      <span>5</span>
      </div>
    </div>
  )
}

export default Navbar
