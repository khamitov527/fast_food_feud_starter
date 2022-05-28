import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, onClick = () => {}, onClose = () => {}}) {

  const buttonClassName = isActive ? "active" : ""

  return (
    <button className={`chip ${buttonClassName}`} onClick={onClick}>
      <p className="label">{label}</p>
      <span className="close" role="button" onClick={onClose}>{`X`}</span>
    </button>
  )
}

export default Chip
