import * as React from "react"
import { useState } from "react"
import { createDataSet } from "../data/dataset"
import Chip from "./Chip/Chip"
import NutritionalLabel from "./NutritionalLabel/NutritionalLabel"
import "../App.css"

const { data, categories, restaurants } = createDataSet()

export function MenuDisplay() {

    const [selectedItem, setSelectedItem] = useState(null)

    const currentMenuItems = data.filter((item) => {
      return (item.food_category ===  selectedCategory && item.restaurant === selectedRestaurant)
    })

    return (
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {currentMenuItems.map((item) => (
              <Chip 
                label={item.item_name}
                key={item.item_name}
                onClick={() => setSelectedItem(item)}
                isActive={selectedItem && selectedItem.item_name === item.item_name}
                />
            ))}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">{
            selectedItem ? <NutritionalLabel item={selectedItem} /> : null
          }</div>
        </div>
    )
  }
  
  export default MenuDisplay