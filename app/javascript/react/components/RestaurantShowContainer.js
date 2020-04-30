import React, { useState, useEffect } from 'react'
import RestaurantShow from './RestaurantShow'
import ReviewTile from './ReviewTile'
<<<<<<< HEAD
=======
import ReviewForm from './ReviewForm'
>>>>>>> d63a26da06e314c4fa5a825d2a89437afb01dc4e


const RestaurantShowContainer = props =>{
  const [restaurant, setRestaurant] = useState({
    name: "",
    address: "",
    neighborhood: "",
    phone: "",
    url: ""
  })
  const [restaurantReviews, setRestaurantReviews] = useState([])
<<<<<<< HEAD
=======
  const [newReview, setNewReview] = useState({
    rating: "",
    description: ""
  })
>>>>>>> d63a26da06e314c4fa5a825d2a89437afb01dc4e

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

<<<<<<< HEAD
=======
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
      setRestaurantReviews([
        ...restaurantReviews,
        parsedNewReview.review
      ])
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

>>>>>>> d63a26da06e314c4fa5a825d2a89437afb01dc4e
  const reviewsList = restaurantReviews.map(review => {
    return (
      <ReviewTile
      key={review.id}
      rating={review.rating}
      description={review.description}
      />
    )
  })

<<<<<<< HEAD
  return(
    <div>
      <RestaurantShow restaurant={restaurant}/>
      {reviewsList}
=======

  return(
    <div>
      <RestaurantShow restaurant={restaurant} />
      {reviewsList}
      <ReviewForm
        id={restaurantId}
        addNewReview={addNewReview}
      />
>>>>>>> d63a26da06e314c4fa5a825d2a89437afb01dc4e
    </div>
  )
}

export default RestaurantShowContainer
