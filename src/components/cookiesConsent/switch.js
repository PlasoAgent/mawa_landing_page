import React, { useState } from "react"

const CookieButton = ({ text, func }) => {
  const [checked, setChecked] = useState(true)
  console.log(checked)
  return (
    <label class="switch" css={style.input}>
      <input
        type="checkbox"
        onClick={() => {
          setChecked(checked ? false : true)
        }}
      />
      <span
        class="slider round"
        css={[
          style.slider,
          checked && {
            backgroundColor: "#ff0f00",
            boxShadow: "0 0 1px #2196F3",
            ":before": {
              WebkitTransform: "translateX(26px)",
              MsTransform: "translateX(26px)",
              transform: "translateX(26px)",
            },
          },
        ]}
      ></span>
    </label>
  )
}

export default CookieButton

const style = {
  slider: {
    position: "absolute",
    cursor: "pointer",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "#ccc",
    WebkitTransition: ".4s",
    transition: ".4s",
    borderRadius: "34px",
    ":before": {
      position: "absolute",
      borderRadius: "50%",
      content: '""',
      height: "26px",
      width: "26px",
      left: "5px",
      bottom: "2px",
      backgroundColor: "white",
      WebkitTransition: ".4s",
      transition: ".4s",
    },
  },
  input: {
    position: "relative",
    display: "inline-block",
    width: "60px",
    height: "34px",
    input: {
      opacity: "0",
      width: "0",
      height: "0",
    },
  },
}
