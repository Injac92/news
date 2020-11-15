import React from "react"
import ReactDOM from "react-dom"
import { HashRouter } from "react-router-dom"
import "./index.scss"
import App from "./components/App/App.js"
import reportWebVitals from "./reportWebVitals"

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
)

reportWebVitals()
