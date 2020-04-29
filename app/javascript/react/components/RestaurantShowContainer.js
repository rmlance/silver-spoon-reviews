import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import RestaurantShow from './RestaurantShow'
import ReviewTile from './ReviewTile'
import ReviewForm from './ReviewForm'


const RestaurantShowContainer = props =>{
  const [restaurant, setRestaurant] = useState({
    name: "",
    address: "",
    neighborhood: "",
    phone: "",
    url: ""
  })
  const [restaurantReviews, setRestaurantReviews] = useState([])
  const [newReview, setNewReview] = useState({
    rating: "",
    description: ""
  })
  const [redirect, setRedirect] = useState(false)

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
  .then(parsedRestaurant => {
    setRestaurant(parsedRestaurant.restaurant)
    setRestaurantReviews(parsedRestaurant.restaurant.reviews)
  })
  .catch(error => console.error(`Error in fetch: ${errorMessage}`))
  }, [])

  const addNewReview = (formPayload) => {
    fetch(`/api/v1/restaurants/${restaurantId}/reviews`, {
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
    .then(parsedNewReview => {
      let newReview = parsedNewReview
      setNewReview(newReview)
      setRedirect(true)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  const reviewsList = restaurantReviews.map(review => {
    return (
      <ReviewTile
      key={review.id}
      rating={review.rating}
      description={review.description}
      />
    )
  })

  if (redirect) {
    return <Redirect to={`/restaurants/${restaurantId}`} />
  }

  return(
    <div>
      <RestaurantShow restaurant={restaurant} />
      {reviewsList}
      <ReviewForm
        id={restaurantId}
        addNewReview={addNewReview}
      />
    </div>
  )
}

export default RestaurantShowContainer
