import React, { useState, useEffect } from 'react'
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
      setRestaurantReviews([
        ...restaurantReviews,
        parsedNewReview.review
      ])
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


  return(
    <div>
      <RestaurantShow restaurant={restaurant} />
      <div className="grid-container bottom-space">
      <h4 className="show-title">
        Reviews
      </h4>
        <div className="grid-x">
          {reviewsList}
        </div>
        <ReviewForm
          id={restaurantId}
          addNewReview={addNewReview}
        />
      </div>
    </div>
  )
}

export default RestaurantShowContainer
