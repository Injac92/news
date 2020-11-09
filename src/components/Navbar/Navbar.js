import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <ul>
          <Link to="/">
            <li className="navbar-items">
              Top News
            </li>
          </Link>
          <Link to="/categories">
            <li className="navbar-items">
              Categories
            </li>
          </Link>
          <Link to="/search">
            <li className="navbar-items">
              Search
            </li>
          </Link>
        </ul>
      </div>
      <div className="navbar__right">
        <span>GB</span>
        <span>US</span>
      </div>
    </div>
  )
}

export default Navbar
