import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantShow = props =>{

  return(
    <div>
      <h3>{props.restaurant.name}</h3>
      <h5>Address:</h5>
      <p>{props.restaurant.address}</p>
      <p>{props.restaurant.neighborhood}</p>
      <p>Phone Number: {props.restaurant.phone}</p>
      <p>URL: {props.restaurant.url}</p>
      <Link to="/restaurants/new">Add a Restaurant</Link><br />
      <Link to="/">Back to Home</Link><br />
      <Link to='/restaurants' onClick={()=>props.deleteRestaurant(props.restaurant.id)}>Delete</Link>
    </div>
  )
}

export default RestaurantShow
