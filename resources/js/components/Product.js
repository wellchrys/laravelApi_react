import React, { Component } from 'react';
 
/* Stateless component or pure component
 * { product } syntax is the object destructing
 */

const Product = ({product}) => {
    
  const divStyle = {
      
  }

 
  //if the props product is null, return Product doesn't exist
  if(!product) {
    return(<div className="col-md-6" style={divStyle}>  Product Doesnt exist </div>);
  }
     
  //Else, display the product data
  return(  
    <div className="col-md-6" style={divStyle}> 
      <h2> {product.title} </h2>
      <p> {product.description} </p>
      <h3> Status {product.availability ? 'Available' : 'Out of stock'} </h3>
      <h3> Price : {product.price} </h3>
    </div>
  )
}
 
export default Product ;