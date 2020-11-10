import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import TopNewsList from "../TopNewsList/TopNewsList";
import CategoriesHolder from "../CategoriesHolder/CategoriesHolder";

class App extends React.Component {
  constructor(props) {
    super()
    //initialising state
    this.state = {
      news: [],
      newsgb: [],
      lang: true
    }

    this.langUS = this.langUS.bind(this)
    this.langGB = this.langGB.bind(this)
  }

  langGB() {
    this.setState({ lang: false })
  }
  langUS() {
    this.setState({ lang: true })
  }

    componentDidMount() {
    //bring data from api
    //fetch(`https://...country=${this.state.lang}&apiKey...`)
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=0192c8a932d94d0c9d50c5aa7c0bde08`)
      .then(response => {
        //konversion json to js
        return response.json();
      })
      .then(data => {
        //putting data from API to state 
        this.setState({
          news: data.articles
        });
      })
      .catch(error => console.log(error));

    fetch(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=0192c8a932d94d0c9d50c5aa7c0bde08`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          newsgb: data.articles
        });
      })
      .catch(error => console.log(error));

  }
  // generally maybe better solution would be using
  // componentDidUpdate instead fetching both APIs

  render() {
    console.log("rendered")
    console.log(this.state.lang)
    return (

      <Switch>
        <Route
          exact path="/"
          render={() => {



            const chosenLang =
              this.state.lang ? <TopNewsList news={this.state.news} />
                : <TopNewsList news={this.state.newsgb} />

            return (
              <div>
                {/* <button onClick={this.langUS}>US</button>
                <button onClick={this.langGB}>GB</button> */}
                <Navbar
                  toGB={this.langGB}
                  toUS={this.langUS}
                />
                {chosenLang}
              </div>
            )
          }}
        />

        <Route
          exact path="/categories"
          render={() => {
            return (
              <div>
                <Navbar />
                <CategoriesHolder />
              </div>
            )
          }}
        />

        <Route
          exact path="/search"
          render={() => {
            return (
              <div>
                <Navbar />
                <p>search</p>
              </div>
            )
          }}
        />
        {/* dont forget to create dummy error page! */}
        <Route component={Error} />
      </Switch>
    )
  }

}

export default App
