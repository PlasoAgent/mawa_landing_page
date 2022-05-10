import React from "react"

const FancyHeader = ({ text }) => {
  return <h2 css={style}>{text}</h2>
}

export default FancyHeader

const style = {
  margin: "2em 0 0 0",
  padding: "0.5em 0 0.8em",
  fontSize: "1.3em",
  textAlign: "center",
  fontWeight: "500",
  color: "#CBCBCB",
  textTransform: "uppercase",
  "::before": {
    content: '""',
    display: "inline-block",
    height: "2px",
    width: "5em",
    position: "relative",
    margin: "0 1em",
    borderTop: "1px #CBCBCB solid",
    bottom: "0.2em",
    "@media only screen and (max-width: 1024px)": {
      display: "none",
    },
  },
  "::after": {
    content: '""',
    display: "inline-block",
    height: "2px",
    width: "5em",
    position: "relative",
    margin: "0 1em",
    borderTop: "1px #CBCBCB solid",
    bottom: "0.2em",
    "@media only screen and (max-width: 1024px)": {
      content: '""',
      display: "block",
      height: "2px",
      width: "60%",
      position: "relative",
      margin: "1em auto 0em",
      borderTop: "solid 1px #a4a3a3",
      bottom: "0.2em",
    },
  },
}
