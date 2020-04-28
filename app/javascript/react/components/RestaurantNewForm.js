import React, { useState } from 'react'
import _ from "lodash"
import { Link } from 'react-router-dom'

import ErrorList from "./ErrorList"

const RestaurantNewForm = props => {
  const [errors, setErrors] = useState({})
  const [newFormPayload, setNewFormPayload] = useState({
    name: "",
    address: "",
    neighborhood: "",
    phone: "",
    url: ""
  })

  const handleInputChange = event => {
    setNewFormPayload({
      ...newFormPayload,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name", "address", "neighborhood", "phone", "url"]
    requiredFields.forEach(field => {
      if (newFormPayload[field].trim() === "") {
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
      props.addNewRestaurant(newFormPayload)
      setNewFormPayload({
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
      <form onSubmit={handleSubmit}>
        <ErrorList errors={errors} />
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
        <label className="neighborhood">
          Neighborhood:
          <input
            name="neighborhood"
            id="neighborhood"
            type="text"
            onChange={handleInputChange}
            value={newFormPayload.neighborhood}
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

      <div className="button-group">
        <input className="button" type="submit" value="Add New Restaurant" />
      </div>
      <Link to="/">Back to Home</Link>
      </form>
    )
  }

export default RestaurantNewForm
