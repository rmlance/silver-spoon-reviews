import React, { useState, useEffect } from 'react'
import RestaurantShow from './RestaurantShow'
import ReviewsContainer from './ReviewsContainer'


const RestaurantShowContainer = props =>{
  const [restaurant, setRestaurant] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    url: "",
    image_url: "",
    rating: null
  })


  const restaurantId = props.match.params.id

  useEffect(()=> {
  fetch(`/api/v1/restaurants/${restaurantId}`, {
    credentials: "same-origin"
  })
  .then(response =>{
    if(response.ok) {
      return response
    } else {
      let errorMessage = `${response.status} (${response.statusText})`
        error = new Error(errorMessage)
      throw(error)
    }
  })
  .then(response => response.json())
  .then(parsedRestaurant => setRestaurant(parsedRestaurant.restaurant))
  .catch(error => console.error(`Error in fetch: ${errorMessage}`))
  }, [])

  return(
    <div>
      <RestaurantShow restaurant={restaurant}/>
      <ReviewsContainer pageId={restaurantId}/>
    </div>
  )
}

export default RestaurantShowContainer
