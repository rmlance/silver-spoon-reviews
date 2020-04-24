import React from 'react'

const RestaurantTile = props => {

  return (
    <div  className="cell callout text-center medium-4">
      <h3>
        {props.restaurant.name}
        </h3>
    </div>
  )
}

export default RestaurantTile
