import React from "react"
import Game from "./popUpTypes/game/game"
const Popup = ({ popupType }) => {
  return (
    <div css={style}>
      <Game />
    </div>
  )
}

export default Popup

const style = {
  height: "100vh",
  width: "100vw",
  top: 0,
  position: "fixed",
  backgroundColor: "rgba(0,0,0,0.8)",
  zIndex: 999999999999,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}
