import React from "react"

class NewsThumbnail extends React.Component {
  constructor() {
    super()

    this.state = {
      popUp: "none",
    }

    this.openSingleNews = this.openSingleNews.bind(this)
    this.closeSingleNews = this.closeSingleNews.bind(this)
  }
  openSingleNews() {
    this.setState({
      popUp: "block",
    })
  }

  closeSingleNews() {
    this.setState({
      popUp: "none",
    })
  }

  render() {
    //cutting long titles
    const slicedTitle =
      this.props.title.length > 40
        ? this.props.title.slice(0, 40) + "..."
        : this.props.title

    //putting dummy img if there isnt any img from API
    const emptyImg = this.props.imgurl ? (
      <img src={this.props.imgurl} alt="" />
    ) : (
      <img
        src="https://icon-library.com/images/no-image-available-icon/no-image-available-icon-6.jpg"
        alt="img doesnt exist"
      />
    )

    return (
      <div className="thumbnail-container">
        <h3>{slicedTitle}</h3>
        {emptyImg}
        <p>{this.props.description}</p>
        <span className="read-more__button" onClick={this.openSingleNews}>
          More
        </span>

        {/* Pop-up/modal for news details */}
        <div className="pop-up-container" style={{ display: this.state.popUp }}>
          <div className="pop-up-content">
            <h2>{this.props.title}</h2>
            <div className="pop-up-flex">
              <div className="pop-up-img">{emptyImg}</div>
              <p className="padding-0">{this.props.content}</p>
            </div>
            <p className="padding-0">
              <span className="close__button" onClick={this.closeSingleNews}>
                Close
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsThumbnail
