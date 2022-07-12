import Card from "./card"
import React, { useState, useEffect } from "react"
import image1 from "../../../../images/game/frs.webp"
import image2 from "../../../../images/game/khc.webp"
import image3 from "../../../../images/game/kr.png"
import image4 from "../../../../images/game/ls.webp"
import image5 from "../../../../images/game/pk.webp"
import image6 from "../../../../images/game/wood.webp"

const cardImages = [
  { src: image1, matched: false },
  { src: image2, matched: false },
  { src: image3, matched: false },
  { src: image4, matched: false },
  { src: image5, matched: false },
  { src: image6, matched: false },
]
const Game = () => {
  const [cards, setCards] = useState([])
  // console.log(cards)
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [isWin, setIsWin] = useState(false)
  // shuffle
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }))

    setCards(shuffleCards)
    setTurns(0)
  }
  const checkWin = arr => {
    // console.log(arr)
    // console.log(arr?.every(element => console.log(element.matched)))
    return arr?.every(element => element.matched === true)
  }
  // handle a choice
  const handleChoice = card => {
    choiceOne && choiceOne.id !== card.id
      ? setChoiceTwo(card)
      : setChoiceOne(card)
    //not here
  }
  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])
  useEffect(() => {
    shuffleCards()
  }, [])
  useEffect(() => {
    setIsWin(checkWin(cards))
  }, [cards])
  //reset choices & increase turns
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }
  return (
    <div css={style.gameContainer}>
      {!isWin ? (
        <>
          <h1>Magic Match</h1>
          <button onClick={shuffleCards}>Nowa Gra</button>
          <div css={style.cardGrid}>
            {cards.map(card => (
              <Card
                card={card}
                id={card.id}
                handleChoice={handleChoice}
                flipped={
                  card === choiceOne || card === choiceTwo || card.matched
                }
                disabled={disabled}
              />
            ))}
          </div>
          <div css={{ color: "white" }}>Tury: {turns}</div>
        </>
      ) : (
        <p
          css={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          WYGRAŁEŚ TWÓJ KOD RABATOWY TO:{" "}
          <b
            css={{
              color: "#e61c1c",
              fontSize: 24,
              margin: 16,
              textShadow: "1px 1px 0px #ffffff25",
            }}
          >
            MAWA5
          </b>
        </p>
      )}
    </div>
  )
}

export default Game

const style = {
  gameContainer: {
    maxWidth: "860px",
    margin: "40px auto",
    textAlign: "center",
    h1: {
      color: "white",
    },
    button: {
      background: "none",
      border: "2px solid #fff",
      padding: "6px 12px",
      borderRadius: "4px",
      color: "#fff",
      fontWeight: "bold",
      cursor: "pointer",
      fontSize: "1em",
      ":hover": {
        background: "#c23866",
        color: "white",
      },
    },
  },
  cardGrid: {
    margin: "40px 0px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridGap: "20px",
  },
}
