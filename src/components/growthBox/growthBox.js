import React from "react"
import GridBox from "../gridBox/gridBox"
import content from "./content"
import { graphql, StaticQuery } from "gatsby"

const GrowthBox = ({}) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          image_1: file(relativePath: { eq: "mawa_eco.webp" }) {
            id
            childImageSharp {
              gatsbyImageData(
                width: 900
                height: 600
                blurredOptions: { width: 100 }
                placeholder: BLURRED
                transformOptions: { cropFocus: CENTER }
                aspectRatio: 0.7
              )
            }
          }
          image_2: file(relativePath: { eq: "mawa_skin.webp" }) {
            id
            childImageSharp {
              gatsbyImageData(
                width: 900
                height: 600
                blurredOptions: { width: 100 }
                placeholder: BLURRED
                transformOptions: { cropFocus: CENTER }
                aspectRatio: 0.7
              )
            }
          }
          image_3: file(relativePath: { eq: "mawa_fsc.webp" }) {
            id
            childImageSharp {
              gatsbyImageData(
                width: 900
                height: 600
                blurredOptions: { width: 100 }
                placeholder: BLURRED
                transformOptions: { cropFocus: CENTER }
                aspectRatio: 0.7
              )
            }
          }
        }
      `}
      render={data => <GridBox data={data} content={content} />}
    />
  )
}

export default GrowthBox
