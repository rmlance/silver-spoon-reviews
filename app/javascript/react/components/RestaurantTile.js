import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantTile = props => {

  return (
    <div  className="cell callout text-center medium-4">
      <h3>
        <Link to={`/restaurants/${props.restaurant.id}`} className="restaurant-name">{props.restaurant.name}</Link>
      </h3>
    </div>
  )
}

export default RestaurantTile
