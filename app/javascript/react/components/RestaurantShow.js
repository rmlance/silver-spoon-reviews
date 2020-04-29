import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantShow = props =>{

  return(
    <div>
      <div className="grid-container">
        <div className="callout">
          <h3>{props.restaurant.name}</h3>
          <div className="callout address grid-x">
            <div className="cell medium-5">
              <h5>Address:</h5>
              <p>{props.restaurant.address}</p>
              <p>{props.restaurant.neighborhood}</p>
            </div>
            <div className="cell medium-5">
              <p>Phone Number: {props.restaurant.phone}</p>
              <p>URL: {props.restaurant.url}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
      <Link to="/restaurants/new">Add a Restaurant</Link><br />
      <Link to="/">Back to Home</Link>
      </div>
    </div>
  )
}

export default RestaurantShow
