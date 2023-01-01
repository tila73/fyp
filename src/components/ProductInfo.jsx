import React from 'react'

const ProductInfo = (props) => {
  return (
    // <div>
    //     <img src={DogBed} alt="" width="160px" height="100x"/>
    //     <h1>Product Name</h1>
    //     <h3>$100</h3>
    // </div>
    <div>
      <img src={props.img} alt="" className='h-40 w-40' />
      <h1>{props.product}</h1>
      <h3>{props.price}</h3>
      <a>Add to cart</a>
    </div>
  )
}

export default ProductInfo