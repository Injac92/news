import React from "react"

import NewsThumbnail from "../NewsThumbnail/NewsThumbnail"

function SingleNews(props) {
  const {url, title, urlToImage, description} = props
  return (
    <div>
      {title}
      <p>Single News</p>
      {/* <NewsThumbnail 
        key={url}
        title={title}
        imgurl={urlToImage}
        description={description}/> */}
    </div>
  )
}
export default SingleNews