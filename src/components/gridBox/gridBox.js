import React from "react"
import FancyHeader from "../typography/fancyHeading"
import Grid from "./news/grid"

const GridBox = ({ content, data }) => {
  return (
    <section>
      <FancyHeader text={content.title} />
      <h3 css={style.h3}>{content.desc}</h3>
      <div css={style}>
        {content.features.map((feature, key) => (
          <Grid
            feature={feature}
            data={data}
            key={key}
            isVideo={content?.isVideo}
          />
        ))}
      </div>
    </section>
  )
}
export default GridBox

const style = {
  padding: "1.5em 3em",
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  maxWidth: "1520px",
  gridGap: "20px",
  margin: "auto",
  h3: {
    fontSize: "1.4em",
    margin: "0em",
    padding: "0 2em",
    boxSizing: "border-box",
    textAlign: "center",
    fontWeight: "300",
    "@media only screen and (max-width: 1024px)": {
      fontSize: "1.3em",
      margin: "0 0 2em",
      fontWeight: "300",
    },
  },

  "@media only screen and (max-width: 1024px)": {
    gridTemplateColumns: "repeat(1,1fr)",
    gridTemplateRows: "repeat(1, minmax(200px, auto))",
  },
}
