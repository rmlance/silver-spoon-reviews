import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantShow = props =>{

  return(
    <div>
    <div className="callout plate center-this">
      <div className="grid-container">
          <h3 className="show-title">{props.restaurant.name}</h3>
          <div className="grid-x space-down">
            <div className="cell medium-4">
              <h5>Address:</h5>
              <p>{props.restaurant.address}</p>
              <p>{props.restaurant.neighborhood}</p>
            </div>
            <div className="cell medium-4">
              <p>Phone Number: {props.restaurant.phone}</p>
              <p>URL: {props.restaurant.url}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
      <Link to="/restaurants/${props.restaurant.id}/edit">Edit This Restaurant</Link><br />
      <Link to="/">Back to Home</Link>
      </div>
    </div>
  )
}

export default RestaurantShow
