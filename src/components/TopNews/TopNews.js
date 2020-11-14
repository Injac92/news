import React from "react"

import TopNewsList from "../TopNewsList/TopNewsList"

function TopNews(props) {
    const topText = props.lang === "us"
     ? "United States" : "Great Britain";
    return(
        <>
        <h2 className="top-header">Top news from {topText}</h2>
        <TopNewsList news={props.news}/>
        </>
    )
}
export default TopNews