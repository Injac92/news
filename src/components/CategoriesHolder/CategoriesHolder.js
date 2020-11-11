import React from "react";
import CategoryList from "../CategoryList/CategoryList";

class CategoriesHolder extends React.Component {

  constructor() {
    super()

    this.state = {
      categoryName: [
        "entertainment",
        "science",
      ],
      newscategory1: [],
      newscategory2: [],
    }

  }

  componentDidMount() {

    
    
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.state.categoryName[0]}&apiKey=cac4b57a2551410db1064d0b97086522`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          newscategory1: data.articles
        });
      })
      .catch(error => console.log(error));

    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.state.categoryName[1]}&apiKey=cac4b57a2551410db1064d0b97086522`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          newscategory2: data.articles
        });
      })
      .catch(error => console.log(error));


  }

  render() {
    console.log(this.state.category)
    console.log(this.state.categoryName)



    return (
      <div>
        <h2>{this.state.categoryName[0]}</h2>
        
        <div className="category-section">
          <CategoryList
            newscategory={this.state.newscategory1}
          />
        </div>

        <h2>{this.state.categoryName[1]}</h2>
        <div className="category-section">
          <CategoryList
            newscategory={this.state.newscategory2}
          />
        </div>
      </div>
    )
  }

}
export default CategoriesHolder