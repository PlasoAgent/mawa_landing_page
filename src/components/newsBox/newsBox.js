import React from "react"
import GridBox from "../gridBox/gridBox"
import { content } from "../gridBox/content"
import { graphql, StaticQuery } from "gatsby"

const NewsBox = () => {
  return (
    <StaticQuery
      query={graphql`
        query newsData {
          news_1: file(relativePath: { eq: "newses/news_1.webp" }) {
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
          news_2: file(relativePath: { eq: "newses/news_2.webp" }) {
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
          news_3: file(relativePath: { eq: "newses/news_3.webp" }) {
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
          news_4: file(relativePath: { eq: "newses/news_4.webp" }) {
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
          news_5: file(relativePath: { eq: "newses/news_5.webp" }) {
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
          news_6: file(relativePath: { eq: "newses/news_6.webp" }) {
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
          news_7: file(relativePath: { eq: "newses/news_7.webp" }) {
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
          news_8: file(relativePath: { eq: "newses/news_8.webp" }) {
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
          news_9: file(relativePath: { eq: "newses/news_9.webp" }) {
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

export default NewsBox
