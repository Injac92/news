import React from "react";
import TopNewsList from "../TopNewsList/TopNewsList";

class Search extends React.Component {
  constructor(props) {
    super()

    this.state = {
      searchNews: props.news,
      filteredNews: props.news
    }

    this.onSearch = this.onSearch.bind(this)

  }

  onSearch = event => {
    const filtered = this.state.searchNews.filter(element => {
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
    console.log(this.state.searchNews)
    console.log(this.state.filteredNews)
    return (
      <div>
        <input type="text" onChange={this.onSearch}/>
        Search area
        <TopNewsList news={this.state.filteredNews} />
      </div>
    )
  }
}

export default Search