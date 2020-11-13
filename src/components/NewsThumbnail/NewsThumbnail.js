import React from "react";
import { Link } from "react-router-dom";
import SingleNews from "../SingleNews/SingleNews";


class NewsThumbnail extends React.Component {

  constructor() {
    super()

    this.state = {

      popUp: "none"
    }

    this.toggleSingleNews = this.toggleSingleNews.bind(this)

  }
  toggleSingleNews() {
    this.setState({
      popUp: "block"
    })
  }



  render() {

    //cutting long titles
    const slicedTitle =
      this.props.title.length > 40 ? this.props.title.slice(0, 40) + "..." : this.props.title;

    //putting dummy img if there isnt any img from API
    const emptyImg =
      this.props.imgurl ? <img src={this.props.imgurl} alt="" />
        : <img src="https://icon-library.com/images/no-image-available-icon/no-image-available-icon-6.jpg" alt="img doesnt exist" />

    return (
      <div className="thumbnail-container">
        {/* {this.state.popUp} */}
        <h3>{slicedTitle}</h3>
        {emptyImg}
        <p>{this.props.description}</p>
        <span className="read-more__button" onClick={this.toggleSingleNews}>More</span>
        <div className="pop-up" style={{ display: this.state.popUp }}>
          POPUP
          {this.props.title}
          <span>X</span>
        </div>
        
      </div>
    )
  }
}

export default NewsThumbnail