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
    fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.lang}&category=${this.props.category}&apiKey=6366134eeaf642709f19eff34dfaa561`)
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
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,//true
      autoplaySpeed: 4000,
      pauseOnHover: true
    };


    const categArray = this.state.news.slice(0, 7).map((item, index) => {
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