import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantTile = props => {

  return (
    <div><Link to={`/restaurants/${props.restaurant.id}`}>{props.restaurant.name}</Link></div>
  )
}

export default RestaurantTile
