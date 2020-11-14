import React from "react"
import App from "../components/App/App"

export default {
  title: "AppStory",
  component: App,
}

const TemplateApp = (args) => <App {...args} />

export const app = TemplateApp.bind({})
