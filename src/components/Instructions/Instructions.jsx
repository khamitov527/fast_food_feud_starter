import * as React from "react"
import { appInfo } from "../../constants"
import "./Instructions.css"

export function Instructions(props) {
  return (
    <aside className="instructions">
      <p>{appInfo.instructions.start}</p>
    </aside>
  )
}

export default Instructions
