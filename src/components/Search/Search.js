import React from "react"

import TopNewsList from "../TopNewsList/TopNewsList"

class Search extends React.Component {
  constructor(props) {
    super()

    this.state = {
      filteredNews: props.news,
    }
    this.input = React.createRef()
    this.onSearch = this.onSearch.bind(this)
  }

  componentWillReceiveProps(nextProp) {
    this.setState({
      filteredNews: this.props.news,
    })
    this.input.current.value = ""
  }

  onSearch = (event) => {
    //filtering titles and putting in state
    //maybe better option would be filtering on server side
    const filtered = this.props.news.filter((element) => {
      return element.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    })
    this.setState({
      filteredNews: filtered,
    })
  }

  render() {
    const searchText =
      this.props.lang === "us" ? "United States" : "Great Britain"
    return (
      <div className="search-container">
        <h2>Search top news from {searchText} by term:</h2>
        <input
          className="search__input"
          type="text"
          placeholder="Search term"
          onChange={this.onSearch}
          ref={this.input}
        />
        <TopNewsList news={this.state.filteredNews} />
      </div>
    )
  }
}

export default Search
