import React, { useState } from "react"
import shopIcon from "../../images/mawa_shop.png"
import arrowDownIcon from "../../images/arrowdown.svg"

const SliderContent = ({ activeIndex, imageSlider, setActiveIndex, len }) => {
  const [startX, setStartX] = useState(null)
  const [isDown, setIsDown] = useState(false)
  const [x, setX] = useState(null)

  const handleMouseDown = e => {
    setIsDown(true)
    setStartX(e.pageX)
    setX(e.pageX)
  }
  const handleMouseMove = e => {
    if (!isDown) return
    setX(e.pageX)
  }
  const handleMouseUp = e => {
    setIsDown(false)
    if (startX - x > 10) {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
    } else if (startX - x < -10) {
      setActiveIndex(activeIndex === 0 ? len : activeIndex - 1)
    }
  }
  const handleMouseLeave = e => {
    setIsDown(false)
  }
  const handleTouchStart = e => {
    setIsDown(true)
    setX(e.changedTouches[0].screenX)
    setStartX(e.changedTouches[0].screenX)
  }
  const handleTouchEnd = e => {
    setIsDown(false)
    if (startX - x > 10) {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
    } else if (startX - x < -10) {
      setActiveIndex(activeIndex === 0 ? len : activeIndex - 1)
    }
  }
  const handleTouchMove = e => {
    if (!isDown) return
    setX(e.changedTouches[0].screenX)
  }
  return (
    <section>
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        css={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: "1",
        }}
      ></div>
      <div>
        {imageSlider.map((slide, index) => (
          <div
            key={index}
            css={[
              slides,
              index === activeIndex ? slides.active : slides.inactive,
            ]}
          >
            <img src={slide.urls} alt="" css={slideImage} />
            <h2 css={slideImage.slideTitle}>{slide.title}</h2>
          </div>
        ))}
      </div>
      <div css={mawaShop}>
        <a href="https://mawa-polska.pl/">
          <span>Kliknij tutaj, aby przejść do sklepu</span>
          <img src={shopIcon} alt="" />
        </a>
      </div>
      <div css={arrowDown}>
        <img src={arrowDownIcon} alt="" />
      </div>
    </section>
  )
}

export default SliderContent
const arrowDown = {
  position: "absolute",
  textAlign: "center",
  bottom: "2em",
  display: "block",
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
const mawaShop = {
  position: "absolute",
  right: "1em",
  bottom: "1em",
  zIndex: 999,
  width: "10em",
  a: {
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
    color: "#fff",
  },
  span: {
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "20px",
    textShadow: "1px 2px #000",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  "@media only screen and (max-width: 425px)": {
    bottom: "7em",
    right: "1em",
    width: "6em",
    span: {
      fontSize: "15px",
    },
  },
}
const slides = {
  active: {
    opacity: 1,
  },
  inactive: {
    opacity: 0,
  },
  height: "100vh",
  width: "100%",
  position: "relative",
  position: "absolute",
  left: 0,
  transition: "opacity 2s ease-in-out",
}
const slideImage = {
  width: "100%",
  height: "100%",
  position: "relative",
  objectFit: "cover",
  slideTitle: {
    width: "100%",
    color: "white",
    fontSize: "50px",
    position: "absolute",
    textAlign: "center",
    top: "40%",
    zIndex: 10,
    userSelect: "none",
  },
}
