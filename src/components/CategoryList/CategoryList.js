import React from "react";
import NewsThumbnail from "../NewsThumbnail/NewsThumbnail";

function CategoryList(props) {

  const categArray = props.newscategory.slice(0, 3).map((item, index) => {
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
    )
  })
  return <div className="categories-container">
    {/* <Slider> */}
    {categArray}
    {/* </Slider> */}
    </div>

}

export default CategoryList