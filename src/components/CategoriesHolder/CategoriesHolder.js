import React from "react";
import CategoryList from "../CategoryList/CategoryList";

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
        "technology"
      ],
    }

  }

  render() {
    return (
      <>
        {this.state.categoryNames.map((category, index) => {
          return (
            <>
              <h2>{category}</h2>
              <div className="category-section">
                <CategoryList category={category} lang={this.props.lang} key={index} />
              </div>
            </>
          )
        })}
      </>
    )
  }

}
export default CategoriesHolder