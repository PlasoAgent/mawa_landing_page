import React from "react"

const GameButton = ({ popupActive, setPopupActive, setPopupType }) => {
  return (
    <button
      css={{ position: "fixed", bottom: "1em", right: 0, zIndex: 9999 }}
      onClick={() => {
        popupActive ? setPopupActive(false) : setPopupActive(true)
        setPopupType("game")
      }}
    >
      GAME
    </button>
  )
}

export default GameButton
