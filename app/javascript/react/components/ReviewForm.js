import React, { useState } from 'react'
import _ from "lodash"
import { Link } from 'react-router-dom'
import ErrorList from './ErrorList'

const ReviewForm = props => {
  const [errors, setErrors] = useState({})
  const [newFormPayload, setNewFormPayload] = useState({
    rating: "",
    description: ""
  })

  const handleInputChange = event => {
    setNewFormPayload({
      ...newFormPayload,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["rating"]
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
      props.addNewReview(newFormPayload)
      setNewFormPayload({
        rating: "",
        description: ""
      })
      setErrors({})
    }
  }

  return (
    <div>
    <h4 className="show-title">Leave Your Review Below</h4>
      <form onSubmit={handleSubmit}>
        <ErrorList errors={errors} />
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
        <label className="description">
          Enter your review here:
          <input
            name="description"
            id="description"
            type="text"
            onChange={handleInputChange}
            value={newFormPayload.description}
          />
        </label>
      <div className="button-group">
        <input className="button" type="submit" value="Submit Review" />
      </div>
      </form>
    </div>
  )
}

export default ReviewForm
