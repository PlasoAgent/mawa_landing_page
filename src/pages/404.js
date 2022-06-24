import * as React from "react"
import { graphql, Link } from "gatsby"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const NotFoundPage = ({ data }) => {
  // console.log(data)
  const browser = typeof window !== "undefined" && window
  return (
    browser && (
      <>
        <Seo title="404: Not found" />
        <div css={{ width: "100%", height: "100%" }}>
          <GatsbyImage image={getImage(data.slide_image1)} css={slideImage} />
        </div>
        <div
          css={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            "@media only screen and (max-width: 1024px)": {
              flexDirection: "column",
            },
          }}
        >
          <div
            css={{
              padding: "0px 20px",
              "@media only screen and (max-width: 1024px)": {
                padding: "20px 20px",
              },
            }}
          >
            <h1>404: Nie odnaleźliśmy takiej strony</h1>
            <p>
              Wpisałeś przekierowanie, które nie istnieje. Spróbuj ponownie lub
            </p>
            <Link to="/" css={{ color: "black", textDecoration: "none" }}>
              Przejdź do strony głównej
            </Link>
          </div>
          <div>
            <GatsbyImage image={getImage(data.slide_image2)} />
          </div>
        </div>
      </>
    )
  )
}

export const query = graphql`
  {
    slide_image1: file(relativePath: { eq: "slide_image3.png" }) {
      id
      childImageSharp {
        gatsbyImageData(
          blurredOptions: { width: 100 }
          placeholder: BLURRED
          transformOptions: { cropFocus: ATTENTION }
          height: 500
          quality: 100
        )
      }
    }
    slide_image2: file(relativePath: { eq: "404_image.webp" }) {
      id
      childImageSharp {
        gatsbyImageData(
          blurredOptions: { width: 100 }
          placeholder: BLURRED
          transformOptions: { cropFocus: ATTENTION }
          height: 500
          quality: 100
        )
      }
    }
  }
`

export default NotFoundPage

const slideImage = {
  width: "100%",
  height: "100%",
  position: "relative",
  objectFit: "cover",
  slideTitle: {
    textTransform: "uppercase",
    whiteSpace: "pre-line",
    width: "100%",
    color: "white",
    fontSize: "50px",
    position: "absolute",
    textAlign: "center",
    top: "55%",
    zIndex: 10,
    userSelect: "none",
    "@media only screen and (max-width: 900px)": {
      fontSize: "1.5em",
    },
  },
}
