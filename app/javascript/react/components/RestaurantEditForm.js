import React, { useState } from 'react'
import _ from "lodash"
import { Link } from 'react-router-dom'

import ErrorList from "./ErrorList"

const RestaurantEditForm = props =>{
  const [errors, setErrors] = useState({})
  const [editFormPayload, setEditFormPayload] = useState({
    name: "",
    address: "",
    neighborhood: "",
    phone: "",
    url: ""
  })

  const handleInputChange = event => {
    setEditFormPayload({
      ...editFormPayload,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name", "address", "neighborhood", "phone"]
    requiredFields.forEach(field => {
      if (editFormPayload[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (validForSubmission()) {
      props.editRestaurant(editFormPayload)
      setEditFormPayload({
        name: "",
        address: "",
        neighborhood: "",
        phone: "",
        url: ""
      })
      setErrors({})
    }
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <ErrorList errors={errors} />
        <label className="name">
          Name:
          <input
            name="name"
            id="name"
            type="text"
            onChange={handleInputChange}
            value={editFormPayload.name}
          />
        </label>
        <label className="address">
          Street Address:
          <input
            name="address"
            id="address"
            type="text"
            onChange={handleInputChange}
            value={editFormPayload.address}
          />
        </label>
        <label className="neighborhood">
          Neighborhood:
          <input
            name="neighborhood"
            id="neighborhood"
            type="text"
            onChange={handleInputChange}
            value={editFormPayload.neighborhood}
          />
        </label>
        <label className="phone">
          Phone Number:
          <input
            name="phone"
            id="phone"
            type="text"
            onChange={handleInputChange}
            value={editFormPayload.phone}
          />
        </label>
        <label className="url">
          Website:
          <input
            name="url"
            id="url"
            type="text"
            onChange={handleInputChange}
            value={editFormPayload.url}
          />
        </label>

        <div className="button-group">
          <input className="button" type="submit" value="Update Restaurant" />
        </div>
      </form>
    <Link to={`/restaurants/${props.id}`}>Back to Details</Link><br />
    <Link to="/">Back to Home</Link>
  </div>
  )
}

export default RestaurantEditForm