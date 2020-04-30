import React from 'react'

const ReviewTile = props => {

  return (
    <div className="cell medium-5 small-5">
        <p>Rating: {props.rating}</p>
        <p>Review: {props.description}</p>
    </div>
  )
}

export default ReviewTile
