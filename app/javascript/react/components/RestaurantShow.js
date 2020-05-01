import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantShow = props => {

  const handleDelete = event => {
    event.preventDefault()
    props.deleteRestaurant(props.restaurant)
  }

  return(
    <div>
    <div className="callout plate center-this">
      <div className="grid-container">
          <h3 className="show-title">{props.restaurant.name}</h3>
          <div className="grid-x space-down">
            <div className="cell medium-4">
              <h5>Address:</h5>
              <p>{props.restaurant.address}</p>
              <h5>Neighborhood:</h5>
              <p>{props.restaurant.neighborhood}</p>
            </div>
            <div className="cell medium-4">
              <h5>Phone Number:</h5>
              <p>{props.restaurant.phone}</p>
              <h5>Website:</h5>
              <p>{props.restaurant.url}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
      <Link to={`/restaurants/${props.id}/edit`}>Edit This Restaurant</Link><br />
      <button className="button-color" onClick={handleDelete}>Delete This Restaurant</button><br />
      <Link to="/">Back to Home</Link>
      </div>
    </div>
  )
}

export default RestaurantShow
