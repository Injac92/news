import React from "react"
import Test from "./Test"

export default {
  title: "TestStory",
  component: Test,
}

const TemplateTest = (args) => <Test {...args} />

export const test = TemplateTest.bind({})