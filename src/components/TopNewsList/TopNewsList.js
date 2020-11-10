import React from "react";
import NewsThumbnail from "../NewsThumbnail/NewsThumbnail";

function TopNewsList(props) {
  //iterating through state object from App component
  const newArray = props.news.map((item, index) => {
    return (
      <NewsThumbnail
        key={item.url}
        title={item.title}
        imgurl={item.urlToImage}
        description={item.description}
      />
    )
  })
  return <div className="newslist-container">{newArray}</div>
}

export default TopNewsList