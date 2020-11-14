import { BrowserRouter } from "react-router-dom"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const routing = [
  (Story) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  ),
]
