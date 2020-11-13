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
    console.log(this.state.searchNews)
    console.log(this.state.filteredNews)
    return (
      <div>
        <input type="text" onChange={this.onSearch} ref={this.input} />
        Search area
        <TopNewsList news={this.state.filteredNews} />
      </div>
    )
  }
}

export default Search