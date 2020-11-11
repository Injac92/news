import React from "react"

import TopNewsList from "../TopNewsList/TopNewsList"

function TopNews(props) {
    return(
        <TopNewsList news={props.news}/>
    )
}
export default TopNews