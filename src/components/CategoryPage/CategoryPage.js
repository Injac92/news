import React from "react"

import apiKey from "../../constants"
import NewsThumbnail from "../NewsThumbnail/NewsThumbnail"

class CategoryPage extends React.Component {
  constructor(props) {
    super()
    this.state = {
      news: [],
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  //fetching data from api when props changes
  //deprecated lifecycle method
  componentWillReceiveProps(nextProps) {
    this.fetchData()
  }

  fetchData() {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.lang}&category=${this.props.routerProps.match.params.id}&apiKey=${apiKey}`
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({
          news: data.articles,
        })
      })
      .catch((error) => console.log(error))
  }

  render() {
    const categPage = this.state.news.map((item, index) => {
      return (
        <NewsThumbnail
          key={item.url}
          title={item.title}
          imgurl={item.urlToImage}
          description={item.description}
          content={item.content}
        />
      )
    })
    return (
      <div className="category-page-container">
        <h2>All {this.props.routerProps.match.params.id} news</h2>
        <div className="category-page-grid">{categPage}</div>
      </div>
    )
  }
}
export default CategoryPage
