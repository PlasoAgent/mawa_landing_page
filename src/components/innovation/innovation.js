import React from "react"
import FancyHeader from "../typography/fancyHeading"
import image from "../../images/mawa_top100.webp"
import icon from "../../images/arrow.svg"
const Innovation = ({}) => {
  const arrows = [
    { text: "Innovationserfolg" },
    { text: "Innovationsklima" },
    { text: "Innovative Prozesse und \nOrganisation" },
    { text: "Außenorientierung und \nOpen Innovation" },
    { text: "Innovationsförderndes \nTOP-Management" },
  ]
  return (
    <section>
      <FancyHeader text={"MAWA UNTER DEN TOP 100 INNOVATOREN IN DEUTSCHLAND"} />
      <h3
        css={{
          fontSize: "1.4em",
          margin: "0em",
          padding: "0 2em",
          boxSizing: "border-box",
          textAlign: "center",
          fontWeight: "300",
          "@media only screen and (max-width: 1024px)": {
            fontSize: "1.3em",
            margin: "0 0 2em",
            fontWeight: "300",
          },
        }}
      >
        Wir brennen für das NEUE
      </h3>
      <div css={style.container}>
        <div css={style.rowRight}>
          <div css={style.topRowLeft}>
            <img src={image} alt="" css={style.mainImage} />
          </div>
          <div css={style.topRowRight}>
            <p>
              <strong>MAWA</strong> wurde im Januar 2021 als einer der{" "}
              <strong>TOP 100 Innovatoren in Deutschland</strong> ausgezeichnet.
            </p>
            {arrows.map((e, i) => (
              <div
                key={i}
                css={{
                  margin: "0em 0 0 0.2em",
                  padding: "0",
                  display: "flex",
                  flexDirection: "row",
                  gap: "0.5em",
                }}
              >
                <img src={icon} alt="" />
                <p>{e.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div css={style.rowLeft}>
          <p>
            Als einziger deutscher Innovationswettbewerb zeichnet TOP 100
            mittelständische Unternehmen für ihr Innovationsmanagement und ihren
            Innovationserfolg aus.{" "}
          </p>
          <p>
            Als einziger deutscher Innovationswettbewerb zeichnet TOP 100
            mittelständische Unternehmen für ihr Innovationsmanagement und ihren
            Innovationserfolg aus.{" "}
          </p>
          <p>
            Als einziger deutscher Innovationswettbewerb zeichnet TOP 100
            mittelständische Unternehmen für ihr Innovationsmanagement und ihren
            Innovationserfolg aus.{" "}
          </p>
          <p>
            Als einziger deutscher Innovationswettbewerb zeichnet TOP 100
            mittelständische Unternehmen für ihr Innovationsmanagement und ihren
            Innovationserfolg aus.{" "}
          </p>
          <p>
            Als einziger deutscher Innovationswettbewerb zeichnet TOP 100
            mittelständische Unternehmen für ihr Innovationsmanagement und ihren
            Innovationserfolg aus.{" "}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Innovation

const style = {
  container: {
    width: "100%",
    padding: "1.5em 3em",
    margin: "0 auto 0",
    maxWidth: "1600px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    transition: "opacity .5s ease-in-out",
    boxSizing: "border-box",
    "@media only screen and (max-width: 1300px)": {
      padding: "1em 3em ",
    },
    "@media only screen and (max-width: 1024px)": {
      padding: "0 1em ",
    },
  },
  mainImage: {
    width: "100%",
    height: "auto",
    padding: "0",
  },
  rowRight: {
    padding: "0 3em 0 0",
    width: "50%",
    float: "right",
    margin: "0em",
    boxSizing: "border-box",
    "@media only screen and (max-width: 1400px)": {
      padding: "0 2em 0 0",
    },
    "@media only screen and (max-width: 1024px)": {
      padding: "0 1em 0 0",
    },
    "@media only screen and (max-width: 900px)": {
      padding: 0,
      width: "100%",
    },
  },
  rowLeft: {
    padding: "0 0 0 3em",
    width: "50%",
    float: "left",
    margin: "0em",
    boxSizing: "border-box",
    p: {
      padding: "0 0 0.5em",
      lineHeight: "1.5em",
      margin: "0",
      fontSize: "1.2em",
      fontWeight: "300",
      hyphens: "none",
    },
    "@media only screen and (max-width: 1400px)": {
      padding: "0 0 0 2em",
    },
    "@media only screen and (max-width: 1024px)": {
      padding: "0 0 0 1em",
    },

    "@media only screen and (max-width: 900px)": {
      padding: 0,
      width: "100%",
    },
  },
  topRowLeft: {
    width: "40%",
    float: "left",
    margin: "0",
    padding: "0em 1em 0 0",
    boxSizing: "border-box",
    "@media only screen and (max-width: 1024px)": {
      width: "60%",
    },
  },
  topRowRight: {
    width: "55%",
    float: "right",
    fontSize: "1em",
    padding: "3em 0em 0 0",
    whiteSpace: "pre-line",
    boxSizing: "border-box",
    p: {
      padding: "0 0 0.5em",
      lineHeight: "1.5em",
      margin: "0",
      fontSize: "1.2em",
      fontWeight: "300",
      hyphens: "none",
      strong: {
        fontWeight: 400,
      },
    },
    "@media only screen and (max-width: 1300px)": {
      width: "100%",
      float: "left",
      fontSize: "1em",
      p: {
        fontSize: "1.1em",
      },
    },
  },
}
