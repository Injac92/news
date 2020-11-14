import React from "react"
import { Link } from "react-router-dom"
import CategoryList from "../CategoryList/CategoryList"

class CategoriesHolder extends React.Component {
  constructor(props) {
    super()

    this.state = {
      categoryNames: [
        "entertainment",
        "general",
        "health",
        "science",
        "sport",
        "technology",
      ],
    }
  }

  componentDidMount() {}

  render() {
    return (
      <div className="category-container">
        {this.state.categoryNames.map((category, index) => {
          return (
            <>
              <Link to={`categories/${category + ""}`}>
                <h2>Top {category} news</h2>
              </Link>
              <div className="category-section">
                <CategoryList
                  category={category}
                  key={index}
                  lang={this.props.lang}
                />
              </div>
            </>
          )
        })}
      </div>
    )
  }
}
export default CategoriesHolder
