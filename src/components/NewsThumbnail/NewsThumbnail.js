import React from "react";

function NewsThumbnail(props) {
  //sutting long titles
  const slicedTitle =
  props.title.length > 40 ? props.title.slice(0, 40) + "..." : props.title;

  //putting dummy img if there isnt any img from API
  const emptyImg = 
  props.imgurl ? <img src={props.imgurl} alt=""/>
   : <img src="https://icon-library.com/images/no-image-available-icon/no-image-available-icon-6.jpg" alt="img doesnt exist"/>

  return(
    <div className="thumbnail-container">
      <h3>{slicedTitle}</h3>
      {emptyImg}
      <p>{props.description}</p>
    </div>
  )
}

export default NewsThumbnail