import React, { useState, useEffect } from 'react'
import RestaurantShow from './RestaurantShow'
import ReviewTile from './ReviewTile'

const ReviewsContainer = props =>{
  const [reviews, setReviews] = useState([])

  useEffect(()=> {
    fetch(`/api/v1/restaurants/${props.pageId}`, {
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
    .then(parsedReviews => {
      setReviews(parsedReviews.review)
    })
    .catch(error => console.error(`Error in fetch: ${errorMessage}`))
  }, [])

  const reviewsList = reviews.map(review => {
    return (
      <ReviewTile
      key={review.id}
      rating={review.rating}
      description={review.description}
      timestamp={review.created_at}
      />
    )
  })

  return(
    <div>
      {reviewsList}
    </div>
  )
}

export default ReviewsContainer
