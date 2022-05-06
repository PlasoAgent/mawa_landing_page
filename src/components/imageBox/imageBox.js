import React from "react"
import FancyHeader from "./../typography/fancyHeading"
const ImageBox = ({ image, content }) => {
  return (
    <section css={{ maxWidth: "1700px", margin: "auto" }}>
      {content.title && <FancyHeader text={content?.title} />}

      <div
        css={{
          width: "100%",
          padding: "1.5em 3em",
          margin: "0 auto 0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          transition: "opacity .5s ease-in-out",
          boxSizing: "border-box",
          zIndex: 10,
          "@media only screen and (max-width: 1024px)": {
            flexDirection: "column",
          },
        }}
      >
        <div css={photoBox}>
          <img src={image} alt="" />
        </div>
        <div css={descriptionBox}>
          {content.innerTitle && (
            <p>
              <strong css={{ fontWeight: "400" }}>{content?.innerTitle}</strong>
            </p>
          )}
          {content.text.map(paragraph => (
            <p>{paragraph.inner}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
export default ImageBox

const photoBox = {
  width: "50%",
  padding: "2rem",
  img: {
    width: "100%",
    height: "auto",
  },
  "@media only screen and (max-width: 1024px)": {
    width: "100%",
    padding: 0,
  },
}
const descriptionBox = {
  width: "50%",
  padding: "2rem",
  fontSize: "1.2em",
  fontWeight: "300",
  lineHeight: "1.5em",
  h1: {
    fontSize: "1.5em",
    padding: "1em 0",
    margin: "0",
    textAlign: "left",
    fontWeight: "400",
  },
  "@media only screen and (max-width: 1300px)": {
    fontSize: "1.1em",
  },
  "@media only screen and (max-width: 1024px)": {
    width: "100%",
    padding: 0,
  },
}
