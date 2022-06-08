import React, { useState } from "react"
import shopIcon from "../../images/mawa_shop.png"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getImage } from "gatsby-plugin-image"

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
    <StaticQuery
      query={graphql`
        {
          slide_image1: file(relativePath: { eq: "slide_image1.png" }) {
            id
            childImageSharp {
              gatsbyImageData(
                blurredOptions: { width: 100 }
                placeholder: BLURRED
                transformOptions: { cropFocus: CENTER }
                layout: FULL_WIDTH
              )
            }
          }
          slide_image2: file(relativePath: { eq: "slide_image2.jpg" }) {
            id
            childImageSharp {
              gatsbyImageData(
                blurredOptions: { width: 100 }
                placeholder: BLURRED
                transformOptions: { cropFocus: CENTER }
                layout: FULL_WIDTH
              )
            }
          }
          slide_image3: file(relativePath: { eq: "slide_image3.png" }) {
            id
            childImageSharp {
              gatsbyImageData(
                blurredOptions: { width: 100 }
                placeholder: BLURRED
                transformOptions: { cropFocus: CENTER }
                layout: FULL_WIDTH
              )
            }
          }
          slide_image4: file(relativePath: { eq: "slide_image4.png" }) {
            id
            childImageSharp {
              gatsbyImageData(
                blurredOptions: { width: 100 }
                placeholder: BLURRED
                transformOptions: { cropFocus: CENTER }
                layout: FULL_WIDTH
              )
            }
          }
        }
      `}
      render={data => (
        <section>
          <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            aria-hidden="true"
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
                <GatsbyImage
                  image={getImage(data[slide.urls])}
                  css={slideImage}
                />
                {/* <img src={data[slide.urls]} alt="" css={slideImage} /> */}
                <h2 css={slideImage.slideTitle}>{slide.title}</h2>
              </div>
            ))}
          </div>
          <div css={mawaShop}>
            <a href="https://sklep.mawa-polska.pl/">
              <span>Kliknij tutaj, aby przejść do sklepu</span>
              <img src={shopIcon} alt="" />
            </a>
          </div>
        </section>
      )}
    />
  )
}

export default SliderContent
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
    textTransform: "uppercase",
    whiteSpace: "pre-line",
    width: "100%",
    color: "white",
    fontSize: "50px",
    position: "absolute",
    textAlign: "center",
    top: "55%",
    zIndex: 10,
    userSelect: "none",
    "@media only screen and (max-width: 900px)": {
      fontSize: "1.5em",
    },
  },
}
