import React, { useState } from "react"
import Dots from "./dots"
import SliderContent from "./sliderContent"
import { imageSlider } from "./imageSlider"
import { useEffect } from "react"

const Slider = ({ time, customCss }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const len = imageSlider.length - 1
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
    }, time * 1000)
    return () => clearInterval(interval)
  }, [activeIndex, time, len])
  return (
    <div css={[sliderContainer, customCss]}>
      <SliderContent
        activeIndex={activeIndex}
        imageSlider={imageSlider}
        setActiveIndex={setActiveIndex}
        len={len}
      />
      <Dots
        activeIndex={activeIndex}
        imageSlider={imageSlider}
        onclick={activeIndex => setActiveIndex(activeIndex)}
      />
    </div>
  )
}

export default Slider

const sliderContainer = {
  height: "100vh",
  width: "100%",
  position: "relative",
  margin: "auto",
}
