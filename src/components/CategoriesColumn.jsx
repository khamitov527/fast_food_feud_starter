import * as React from "react"
import { useState } from "react"
import { createDataSet } from "../data/dataset"
import Chip from "./Chip/Chip"
import "../App.css"

const { data, categories, restaurants } = createDataSet()

export function CategoriesColumn() {

    //const [selectedItem, setSelectedItem] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState(null)

    const selectCategory = (category) => {
        //setSelectedItem(null)
        setSelectedCategory(category)
    }

    return (
        <div className="CategoriesColumn col">
            <div className="categories options">
                <h2 className="title">Categories</h2>
                {categories.map((category) => (
                    <Chip 
                    label={category} 
                    key={category}
                    onClick={() => selectCategory(category)}
                    isActive={selectedCategory === category}
                    />
                ))}
            </div>
        </div>
    )
  }
  
  export default CategoriesColumn