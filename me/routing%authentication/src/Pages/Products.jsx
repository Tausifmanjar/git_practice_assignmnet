import React from 'react'
import { useState, useEffect } from 'react'
export default function AllProducts() {
  const [product , setproduct] = useState([])

  async function FetchData () {
    const  resposnse = await fetch('https://fakestoreapi.com/products')
    const data = await resposnse.json()
    console.log("data",data)
    setproduct(data)
  }
  useEffect(() => {
    FetchData()
},[])

  return (
    <div>
      <h2>All Products</h2>
      <div className = "products-wrapper">
     
          {product.map(products => (

            <div style={{background:"wheat"}}>
                <h3 className = "name">{products.title} </h3>
                <div className= "brand">{products.description}</div>
                <div className = "price">{products.price}</div>
            </div>
          ))}

      </div>
    </div>
  )
}