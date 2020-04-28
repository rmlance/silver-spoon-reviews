import React from 'react'

const RestaurantShow = props =>{

  return(
    <div>
      <h3>{props.restaurant.name}</h3>
      <h5>Address:</h5>
      <p>{props.restaurant.address}</p>
      <p>{props.restaurant.neighborhood}</p>
      <p>Phone Number: {props.restaurant.phone}</p>
      <p>URL: {props.restaurant.url}</p>
    </div>
  )
}

export default RestaurantShow
