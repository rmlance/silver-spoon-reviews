import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import RestaurantTile from './RestaurantTile'

const RestaurantsIndexComponent = props => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(()=> {
    fetch('/api/v1/restaurants', {
      credentials: "same-origin"
    })
    .then(response => {
      if(response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(parsedRestaurantData => {
      setRestaurants(parsedRestaurantData.restaurants)
    })
    .catch(error => console.error(`Error in fetch: ${errorMessage}`))
  }, [])


  const restaurantsList = restaurants.map(restaurant => {
    return (
      <RestaurantTile
      key={restaurant.id}
      restaurant={restaurant}
      />
    )
  })

  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x">
        {restaurantsList}
      </div>
      <Link to="/restaurants/new">Add a Restaurant</Link>
    </div>
  )
}

export default RestaurantsIndexComponent
