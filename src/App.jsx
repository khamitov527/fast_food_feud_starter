import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset"
import Header from "./components/Header/Header" 
import Instructions from "./components/Instructions/Instructions"
import RestaurantsRow from "./components/RestaurantsRow"
import MenuDisplay from "./components/MenuDisplay"
import { appInfo } from "./constants"
import "./App.css"



export function App() {
  return (
    <main className="App">
      <CategoriesColumn />
      <div className="container">
        <Header />
        <RestaurantsRow />
        <Instructions />
        <MenuDisplay />
        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
