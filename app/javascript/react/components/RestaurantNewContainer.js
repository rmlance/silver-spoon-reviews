import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import RestaurantNewForm from './RestaurantNewForm'

const RestaurantNewContainer = props => {
  const [redirect, setRedirect] = useState(false)
  const [restaurant, setRestaurant] = useState({})

  const addNewRestaurant = (formPayload) => {
    fetch('/api/v1/restaurants', {
      credentials: "same-origin",
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if(response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error)
      }
    })
    .then(response => response.json())
    .then(parsedNewRestaurant => {
      let restaurant = parsedNewRestaurant.restaurant
      setRestaurant(restaurant)
      setRedirect(true)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  if (redirect) {
    return <Redirect to={`/restaurants/${restaurant.id}`} />
  }

  return (
    <div>
      <RestaurantNewForm addNewRestaurant={addNewRestaurant} />
    </div>
  )
}

export default RestaurantNewContainer
