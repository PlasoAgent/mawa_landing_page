import React from "react"
import logo from "../../../../images/mawa_logo.svg"
const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }
  return (
    <div css={style.card} key={card.id}>
      <div onClick={handleClick} onKeyDown={handleClick} aria-hidden="true">
        <img
          src={card.src}
          css={[style.cardFront, flipped && style.flipped]}
          alt=""
        />
        <img src={logo} css={style.cardBack} alt="" />
      </div>
    </div>
  )
}

export default Card

const style = {
  card: {
    position: "relative",

    img: {
      width: "150px",
      display: "block",
      border: "2px solid black",
      borderRadius: "6px",
      "@media only screen and (max-width: 1024px)": {
        width: "100px",
      },
      "@media only screen and (max-width: 500px)": {
        width: "75px",
      },
      "@media only screen and (max-width: 400px)": {
        width: "60px",
      },
    },
  },
  cardFront: {
    transform: "rotateY(90deg)",
    position: "absolute",
    transition: "all ease-in 0.2s",
    transitionDelay: "0.1s",
  },
  cardBack: {
    transition: "all ease-in 0.2s",
    transitionDelay: "0.1s",
  },
  flipped: {
    transform: "rotateY(0deg)",
  },
}
