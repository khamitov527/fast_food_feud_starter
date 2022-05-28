import * as React from "react"
import { useState } from "react"
import { createDataSet } from "../data/dataset"
import Chip from "./Chip/Chip"
import "../App.css"

const { data, categories, restaurants } = createDataSet()

export function RestaurantsRow() {
    
    //const [selectedItem, setSelectedItem] = useState(null)
    const [selectedRestaurant, setSelectedRestaurant] = useState(null)

    const selectRestaurant = (restaurant) => {
        //setSelectedItem(null)
        setSelectedRestaurant(restaurant)
    }

    return (
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">{
            restaurants.map((restaurant) => (
              <Chip 
                label={restaurant} 
                key={restaurant}
                onClick={() => selectRestaurant(restaurant)} 
                isActive={selectedRestaurant === restaurant}  
              />
            ))
          }</div>
        </div>
    )
  }
  
  export default RestaurantsRow