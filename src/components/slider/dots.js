import React from "react"
import arrowDownIcon from "../../images/arrowdown.svg"

const Dots = ({ activeIndex, onclick, imageSlider }) => {
  return (
    <div css={allDots.container}>
      <div css={allDots}>
        {imageSlider.map((slide, index) => (
          <span
            key={index}
            css={
              activeIndex === index
                ? [allDots.dot, allDots.active]
                : allDots.dot
            }
            onClick={() => onclick(index)}
          ></span>
        ))}
      </div>
      <div css={arrowDown}>
        <a href="#start">
          <img src={arrowDownIcon} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Dots

const allDots = {
  container: {
    width: "100%",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    top: "85%",
    justifyContent: "center",
    zIndex: "200",
  },
  dot: {
    cursor: "pointer",
    height: "1.5rem",
    width: "1.5rem",
    margin: "0px 3px",
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: "30%",
    display: "inline-block",
    ":hover": {
      backgroundColor: "#e61c1c",
    },
  },
  active: { backgroundColor: "#e61c1c" },
  width: "100%",
  justifyContent: "center",
  display: "flex",
  marginBottom: "1em",
}
const arrowDown = {
  textAlign: "center",
  display: "inline-block",
  width: "100%",
  zIndex: 900,
  cursor: "pointer",
  img: {
    animationName: "topbottom",
    animationDuration: "3s",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
    minHeight: "2em",
    width: "2em",
    height: "auto",
    "@keyframes topbottom": {
      "0%": {
        transform: "translate(0, -0.5em)",
      },
      "50%": {
        transform: "translate(0, 0em)",
      },
      "100%": {
        transform: "translate(0, -0.5em)",
      },
    },
  },
}
