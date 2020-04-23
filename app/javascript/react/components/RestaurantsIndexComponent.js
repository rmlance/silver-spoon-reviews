import React, { useState, useEffect } from 'react'

import RestaurantTile from './RestaurantTile'

const RestaurantsIndexComponent = props => {
    const [restaurants, setRestaurants] = useState([])

    useEffect(()=> {
    fetch('/api/v1/restaurants', {
        credentials: "same-origin"
    })
        .then(response => {
        if(response.ok) {
            return response
        } else {
            let errorMessage = `${response.status} (${response.statusText})`
                error = new Error(errorMessage)
            throw(error)
        }
    })
    .then(response => response.json())
    .then(parsedRestaurantData => setRestaurants(parsedRestaurantData))
    .catch(error => console.error(`Error in fetch: ${errorMessage}`))
    }, [])

    const restaurantsList = restaurants.map(restaurant => {
        return (
            <RestaurantTile
            key={restaurant.id}
            restaurant={restaurant}
            />
        )
    })

    return (
    <div>
        {restaurantsList}
    </div>
    )
}

export default RestaurantsIndexComponent