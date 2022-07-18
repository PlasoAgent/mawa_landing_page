import React from "react"

const CookieButton = ({ text, func }) => {
  return (
    <div css={style} onClick={func}>
      {text}
    </div>
  )
}

export default CookieButton

const style = {
  color: "#fff",
  padding: "10px",
  background: "#ff0f00",
  borderRadius: "5px",
  width: "fit-content",
  cursor: "pointer",
}
