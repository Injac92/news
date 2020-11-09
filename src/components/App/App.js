import React from "react";
import { Switch, Route } from "react-router-dom";
import TopNewsList from "../TopNewsList/TopNewsList";

import Navbar from "../Navbar/Navbar";

class App extends React.Component {
  constructor(props) {
    super()
    //initialising state
    this.state = {
      news: []
    }
  }

  componentDidMount() {
    //bring data from api
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=0192c8a932d94d0c9d50c5aa7c0bde08")
    .then(response => {
      //konversion json to js
      return response.json();
    })
    .then(data => {
      //putting data from API to state 
      //(substituting, not updating previous condition of state)[method]
      this.setState({
        news: data.articles
      });
    })
    .catch(error => console.log(error));
  }

  render() {
    console.log(this.state.news)
    return (
      
      <Switch>
        <Route
          exact path="/" 
          render={() => {
            return(
              <div>
                <Navbar />
                <TopNewsList news ={this.state.news}/>
              </div>
            )
          }}
        />

        <Route
          exact path="/categories" 
          render={() => {
            return(
              <div>
              <Navbar />
              <p>categories</p>
              </div>
            )
          }}
        />

        <Route
          exact path="/search" 
          render={() => {
            return(
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
