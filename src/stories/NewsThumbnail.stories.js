import React from "react"
import NewsThumbnail from "../components/NewsThumbnail/NewsThumbnail"

export default {
  title: "NewsStory",
  component: NewsThumbnail,
}

const TemplateNews = (args) => <NewsThumbnail {...args} />

export const app = TemplateNews.bind({})