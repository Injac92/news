import React from "react"
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

  componentWillReceiveProps(nextProps) {
    this.fetchData()
  }

  fetchData() {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.lang}&category=${this.props.routerProps.match.params.id}&apiKey=1218ee36b17d49d4a61027bc3474b134`
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
    return <div className="category-page">{categPage}</div>

  }
}
export default CategoryPage
