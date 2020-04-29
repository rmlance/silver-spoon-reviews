import React from 'react'

const ReviewTile = props => {

  return (
    <div>
      <ul>
        <li>Rating: {props.rating}</li>
        <li>Review: {props.description}</li>
      </ul>
    </div>
  )
}

export default ReviewTile
