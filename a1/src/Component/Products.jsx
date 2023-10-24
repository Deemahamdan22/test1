import React from 'react'
import Product from './Product'

export default function Products() {
  const Products=[
    {id:1,title:'Product one',desc:'this is Product one',price:1000},
    {id:2,title:'Product tow',desc:'this is Product tow',price:2000},
    {id:3,title:'Product three',desc:'this is Product three',price:3000},
  ];

  return (


    <>
<div className='row'>
{Products.map((product)=>{
  return <Product {...product} key={product.id}/>
})}


</div>

    </>
  )
}
