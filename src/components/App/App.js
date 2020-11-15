import React from "react"
import { Switch, Route } from "react-router-dom"

import apiKey from "../../constants"
import Navbar from "../Navbar/Navbar"
import TopNews from "../TopNews/TopNews"
import CategoriesHolder from "../CategoriesHolder/CategoriesHolder"
import Search from "../Search/Search"
import CategoryPage from "../CategoryPage/CategoryPage"
import ErrorPage from "../ErrorPage/ErrorPage"

class App extends React.Component {
  constructor(props) {
    super()
    //initialising state
    this.state = {
      news: [],
      lang: "us",
    }

    this.langUS = this.langUS.bind(this)
    this.langGB = this.langGB.bind(this)
    this.fetchTopNewsData = this.fetchTopNewsData.bind(this)
  }

  //language change functions
  langGB() {
    this.setState({ lang: "gb" }, () => {
      this.fetchTopNewsData()
    })
  }
  langUS() {
    this.setState({ lang: "us" }, () => {
      this.fetchTopNewsData()
    })
  }

  fetchTopNewsData() {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.state.lang}&apiKey=${apiKey}`
    )
      .then((response) => {
        //konversion json to js
        return response.json()
      })
      .then((data) => {
        //putting data from API to state
        this.setState({
          news: data.articles,
        })
      })
      .catch((error) => console.log(error))
  }

  componentDidMount() {
    //bring data from api
    this.fetchTopNewsData()
  }

  render() {
    return (
      <div className="app-container">
        <Navbar toGB={this.langGB} toUS={this.langUS} lang={this.state.lang} />

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <TopNews news={this.state.news} lang={this.state.lang} />
                </div>
              )
            }}
          />

          <Route
            exact
            path="/categories"
            render={() => {
              return <CategoriesHolder lang={this.state.lang} />
            }}
          />

          <Route
            exact
            path="/search"
            render={() => {
              return (
                <Search
                  lang={this.state.lang}
                  news={this.state.news}
                  key={this.state.news}
                />
              )
            }}
          />

          <Route
            path="/categories/:id"
            render={(routerProps) => {
              return (
                <CategoryPage
                  routerProps={routerProps}
                  lang={this.state.lang}
                />
              )
            }}
          />

          <Route component={ErrorPage} />
        </Switch>
      </div>
    )
  }
}

export default App
