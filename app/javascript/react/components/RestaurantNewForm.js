import React, { useState } from 'react'

const RestaurantNewForm = props => {
  const [newFormPayload, setNewFormPayload] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    url: "",
    image_url: "",
    rating: ""
  })

  const handleInputChange = event => {
    setNewFormPayload({
      ...newFormPayload,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  // valid submission method

  const handleSubmit = event => {
    event.preventDefault()
    // if valid move on else raise errors
    props.addNewRestaurant(newFormPayload)
    setNewFormPayload({
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      url: "",
      image_url: "",
      rating: ""
    })
  }

  return(
    <form onSubmit={handleSubmit}>
      <label className="name">
        Name:
        <input
          name="name"
          id="name"
          type="text"
          onChange={handleInputChange}
          value={newFormPayload.name}
        />
      </label>
      <label className="address">
        Street Address:
        <input
          name="address"
          id="address"
          type="text"
          onChange={handleInputChange}
          value={newFormPayload.address}
        />
      </label>
      <label className="city">
        City:
        <input
          name="city"
          id="city"
          type="text"
          onChange={handleInputChange}
          value={newFormPayload.city}
        />
      </label>
      <label className="state">
        State:
        <input
          name="state"
          id="state"
          type="text"
          onChange={handleInputChange}
          value={newFormPayload.state}
        />
      </label>
      <label className="zip">
        Zip Code:
        <input
          name="zip"
          id="zip"
          type="text"
          onChange={handleInputChange}
          value={newFormPayload.zip}
        />
      </label>
      <label className="phone">
        Phone Number:
        <input
          name="phone"
          id="phone"
          type="text"
          onChange={handleInputChange}
          value={newFormPayload.phone}
        />
      </label>
      <label className="url">
        Website:
        <input
          name="url"
          id="url"
          type="text"
          onChange={handleInputChange}
          value={newFormPayload.url}
        />
      </label>
      <label className="image_url">
        Image (optional):
        <input
          name="image_url"
          id="image_url"
          type="text"
          onChange={handleInputChange}
          value={newFormPayload.image_url}
        />
      </label>
      <label className="rating">
        Rating:
        <input
          name="rating"
          id="rating"
          type="text"
          onChange={handleInputChange}
          value={newFormPayload.rating}
        />
      </label>

      <div className="button-group">
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>

  )
}

export default RestaurantNewForm
