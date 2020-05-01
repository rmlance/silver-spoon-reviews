import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import RestaurantEditForm from './RestaurantEditForm'

const RestaurantEditContainer = props => {
  const [redirect, setRedirect] = useState(false)
  const [editRestaurantField, setEditRestaurantField] = useState({})

  const restaurantId = props.match.params.id

  const editRestaurant = (editFormPayload) =>{
    fetch(`/api/v1/restaurants/${restaurantId}`, {
      credentials: "same-origin",
      method: 'PATCH',
      body: JSON.stringify(editFormPayload),
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
    .then(parsedRestaurant => {
      let restaurant = parsedRestaurant.restaurant
      setEditRestaurantField(restaurant)
      setRedirect(true)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  if (redirect) {
    return <Redirect to={`/restaurants/${restaurantId}`} />
  }

  return (
    <div>
      <h4 className="show-title">Edit Restaurant</h4>
      <RestaurantEditForm
        editRestaurant={editRestaurant}
        id={restaurantId}
        />
    </div>
  )
}

export default RestaurantEditContainer
