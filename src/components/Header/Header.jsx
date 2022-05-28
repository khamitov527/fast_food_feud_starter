import * as React from "react"
import { appInfo } from "../../constants"
import "./Header.css"

export function Header() {
  return (
    <header className="header">
      <h1 className="title">{appInfo.title}</h1>
      <h4 className="tagline">{appInfo.tagline}</h4>
      <p className="description">{appInfo.description}</p>
    </header>
  )
}

export default Header
