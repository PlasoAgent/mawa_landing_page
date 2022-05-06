import React from "react"

const Dots = ({ activeIndex, onclick, imageSlider }) => {
  return (
    <div css={allDots}>
      {imageSlider.map((slide, index) => (
        <span
          key={index}
          css={
            activeIndex === index ? [allDots.dot, allDots.active] : allDots.dot
          }
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  )
}

export default Dots

const allDots = {
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
  position: "absolute",
  display: "flex",
  top: "85%",
  justifyContent: "center",
  zIndex: "200",
}
