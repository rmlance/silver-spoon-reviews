import React from 'react'

const ReviewTile = props => {

  return (
    <div className="cell review-style medium-11 small-10">
        <p>Rating: {props.rating}/5</p>
        <p>Review: {props.description}</p>
    </div>
  )
}

export default ReviewTile
