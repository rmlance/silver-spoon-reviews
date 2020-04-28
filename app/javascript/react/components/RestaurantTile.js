import React from 'react'

const RestaurantTile = props => {

  return (
    <div>
    {props.restaurant.name}
    </div>
  )
  // const reviews = (props.restaurant.reviews).map (review =>{
  //     return(
  //       <div>
  //       {review.rating}
  //       </div>
  //     )
  //   })
}
export default RestaurantTile
