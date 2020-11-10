import React from "react";
import NewsThumbnail from "../NewsThumbnail/NewsThumbnail";

function CategoryList(props) {
 const n = 3;
  const categArray = props.newscategory.map((item, index) => {
    while (index < 5){
    return (
      <>
        
       <NewsThumbnail
        key={item.url}
        title={item.title}
        imgurl={item.urlToImage}
        
      /> 
      </>
      

      // <div>
      //   <h3 key={index}>{item.title}</h3>
        
      // </div>
    )}
  })
  return <div className="categories-container">{categArray}</div>

}

export default CategoryList