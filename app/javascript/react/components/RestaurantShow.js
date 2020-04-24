import React from 'react'

const RestaurantShow = props =>{

  return(
    <div>
      <h3>{props.restaurant.name}</h3>
      <h5>Address:</h5>
      <p>{props.restaurant.address}</p>
      <p>{props.restaurant.city}, {props.restaurant.state} {props.restaurant.zip}</p>
      <p>Phone Number: {props.restaurant.phone}</p>
      <p>Rating: {props.restaurant.rating}</p>
    </div>
  )
}

export default RestaurantShow
