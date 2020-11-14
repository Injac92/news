import React from "react";
import NewsThumbnail from "../NewsThumbnail/NewsThumbnail";
import Slider from "react-slick";

class CategoryList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      news: []
    }

  }
  componentDidMount() {
    this.fetchData();
  }

  // componentDidUpdate(){

  // }
  
  componentWillReceiveProps(nextProps) {
    this.fetchData();
  }
  fetchData() {
    fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.lang}&category=${this.props.category}&apiKey=f0ebec092bbe46329bf986f0523d8a63`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          news: data.articles
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    //slider setting - default and responsive
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      arrows: true,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    };

    const categArray = this.state.news.slice(0, 8).map((item, index) => {
      return (

        <NewsThumbnail
          key={item.url}
          title={item.title}
          imgurl={item.urlToImage}
        />

      )
    })
    return (
      <Slider {...settings}>
        {categArray}
      </Slider>
    )
  }
}

export default CategoryList