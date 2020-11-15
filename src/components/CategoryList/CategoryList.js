import React from "react"

import apiKey from "../../constants"
import NewsThumbnail from "../NewsThumbnail/NewsThumbnail"
import Slider from "react-slick"

class CategoryList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      news: [],
      slideListSize: 5,
      moreButton: "none",
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  //fetching data from api when props changes
  //deprecated lifecycle method
  componentWillReceiveProps(nextProps) {
    this.fetchData()
  }
  fetchData() {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.lang}&category=${this.props.category}&apiKey=${apiKey}&pageSize=${this.state.slideListSize}&page=0`
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
    //slider settings - default and responsive
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      arrows: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    }

    const categArray = this.state.news.map((item, index) => {
      return (
        <NewsThumbnail
          key={item.url}
          title={item.title}
          imgurl={item.urlToImage}
          more={this.state.moreButton}
        />
      )
    })
    return <Slider {...settings}>{categArray}</Slider>
  }
}

export default CategoryList
