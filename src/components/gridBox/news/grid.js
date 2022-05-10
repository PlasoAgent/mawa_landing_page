import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { getImage } from "gatsby-plugin-image"
import decoration from "../../../images/mawa_new.svg"
const Grid = ({ feature, data, isVideo }) => {
  return (
    <div css={style}>
      {isVideo ? (
        <div>
          <video
            poster={Object.values(data[feature.video])[1]}
            css={{ width: "100%", height: "auto" }}
            width={100}
            height={100}
            controls
            noCookie
            className="video-embed-item"
          >
            <source
              src={Object.values(data[feature.video])[0]}
              type="video/mp4"
            />
          </video>
        </div>
      ) : (
        <div>
          <div css={[style.deco, feature?.isNew && style.deco.isActive]}>
            <img src={decoration} alt="" />
          </div>
          <GatsbyImage image={getImage(data[feature?.image])} />
        </div>
      )}
      <div css={style.description}>
        <p css={style.title}>
          <strong css={{ fontWeight: "400" }}>{feature?.title}</strong>
        </p>
        <p css={style.innerText}>{feature?.description}</p>
      </div>
    </div>
  )
}
export default Grid

const style = {
  maxWidth: "500px",
  position: "relative",
  title: {
    textTransform: "uppercase",
    fontSize: "1.1em",
    lineHeight: "1.3em",
    margin: "0.5em 0",
    strong: {
      fontWeight: "400",
    },
  },
  innerText: { fontSize: "1.1em", lineHeight: "1.7em" },
  img: {
    width: "100%",
    padding: "0",
  },
  deco: {
    maxWidth: "9em",
    position: "absolute",
    top: "-20px",
    left: "-21px",
    zIndex: 200,
    visibility: "hidden",
    isActive: {
      visibility: "visible",
    },
  },
  description: {
    fontWeight: "300",
  },
  "@media only screen and (max-width: 1024px)": {
    maxWidth: "100%",
  },
}
