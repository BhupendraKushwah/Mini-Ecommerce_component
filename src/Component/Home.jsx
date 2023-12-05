import React, { useEffect, useState } from 'react'
import Product from './Product'

const Home = ({addToCart}) => {
    const [product,setProduct]=useState([])
    useEffect(()=>{
        const fetchProducts=async()=>{
        const response=await fetch("http://localhost:5000/Home")
        const result= await response.json()
        setProduct(result)
    }
    fetchProducts()
    },[])
  return (
   <div className="container">
    {product.map(item=>{
        return <Product key={item._id} item={item} addToCart={addToCart}/>
    })
    }
    </div>
  )
}

export default Home
