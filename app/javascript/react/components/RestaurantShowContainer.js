import React, { useState, useEffect } from 'react'
import RestaurantShow from './RestaurantShow'
import ReviewShow from './ReviewShow'

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
      <RestaurantShow
      restaurant={restaurant}
     />
     <ReviewShow
     reviews={restaurant.reviews}
     />

    </div>
  )


}

export default RestaurantShowContainer
