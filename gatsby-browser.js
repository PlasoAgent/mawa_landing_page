import "./src/style/layout.css"
import React from "react"
import Layout from "./src/components/layout"

export const wrapRootElement = props => {
  return <Layout>{props.element}</Layout>
}
