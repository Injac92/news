import React from "react";
import TopNewsList from "../TopNewsList/TopNewsList";

class Search extends React.Component {
  constructor(props) {
    super()

    this.state = {
      filteredNews: props.news
    }
    this.input = React.createRef();
    this.onSearch = this.onSearch.bind(this)

  }
  componentWillReceiveProps(nextProp) {
    this.setState({
      filteredNews: this.props.news
    });
    this.input.current.value = ''
  }

  onSearch = event => {
    const filtered = this.props.news.filter(element => {
      console.log(element.title, event.target.value)
      return element.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    this.setState({
      filteredNews: filtered
    });
  };

  

  render() {
    const searchText = this.props.lang ==="us" ? "United States" : "Great Britain"
    console.log(this.state.searchNews)
    console.log(this.state.filteredNews)
    return (
      <div className="search-container">
        <h2>Search top news from {searchText} by term:</h2>
        <input className="search__input" type="text" placeholder="Search term" onChange={this.onSearch} ref={this.input} />
        <TopNewsList news={this.state.filteredNews} />
      </div>
    )
  }
}

export default Search