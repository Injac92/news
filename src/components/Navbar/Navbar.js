import React from "react"
import { Link } from "react-router-dom"

class Navbar extends React.Component {

  //no need for constructor
  //class component only for event handler
  render() {
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
          <span onClick={this.props.toGB} style={{color: this.props.lang =="gb" ? "red" : "white"}}>GB</span>
          <span onClick={this.props.toUS} style={{color: this.props.lang =="us" ? "red" : "white"}}>US</span>
        </div>
      </div>
    )
  }
}

export default Navbar
