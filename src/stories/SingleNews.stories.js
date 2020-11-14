import React from "react"
import SingleNews from "../components/SingleNews/SingleNews"

export default {
  title: "SingleNewsStory",
  component: SingleNews,
}

const TemplateSingleNews = (args) => <SingleNews {...args} />

export const singleNews = TemplateSingleNews.bind({})
