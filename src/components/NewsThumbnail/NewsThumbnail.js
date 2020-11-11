import React from "react";
import { Link } from "react-router-dom";
import SingleNews from "../SingleNews/SingleNews";


function NewsThumbnail(props) {
  console.log(props)
  //sutting long titles
  const slicedTitle =
  props.title.length > 40 ? props.title.slice(0, 40) + "..." : props.title;

  //putting dummy img if there isnt any img from API
  const emptyImg = 
  props.imgurl ? <img src={props.imgurl} alt=""/>
   : <img src="https://icon-library.com/images/no-image-available-icon/no-image-available-icon-6.jpg" alt="img doesnt exist"/>

  let showSingleNews = false
  function toggleSingleNews(){
    showSingleNews = !showSingleNews
    alert("sadfsd")
  }

  return(
    <div className="thumbnail-container">
      <h3>{slicedTitle}</h3>
      {emptyImg}
      <p>{props.description}</p>
      {/* <Link to={{pathname: "/news/1", test: props}}>More</Link> */}
      <span onClick={toggleSingleNews}>More</span>
      {showSingleNews ? 
      <SingleNews props={props} /> : null}
    </div>
  )
}

export default NewsThumbnail