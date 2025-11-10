import React from 'react'
import ProductRieviewCard from './productRieviewCard'
import "../styles/ProductRewviews.css"

const ProductRewviews = ({productReviews}) => {
  return (
    <div className='ProductReviews'>
        {productReviews.map((item,index)=>(
            <ProductRieviewCard  key={item.image} price={item.price} name={item.name} image={item.image} review={item.review} />
            
        ))}

    </div>
  )
}

export default ProductRewviews