import React from "react"
import FancyHeader from "../typography/fancyHeading"
import image from "../../images/mawa_top100.webp"
import icon from "../../images/arrow.svg"
const Innovation = ({}) => {
  const arrows = [
    { text: "Innowacyjny sukces" },
    { text: "Innowacje dla klimatu" },
    { text: "Innowacyjne procesy i \norganizacja" },
    { text: "Orientacja zewnętrzna i \notwarte innowacje" },
    { text: "Promowanie innowacji \nTOP-Zarządzanie" },
  ]
  return (
    <section>
      <FancyHeader
        text={"MAWA WŚRÓD 100 NAJWIĘKSZYCH INNOWATORÓW W NIEMCZECH"}
      />
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
        Zapaleni dla NOWOŚCI
      </h3>
      <div css={style.container}>
        <div css={style.rowRight}>
          <div css={style.topRowLeft}>
            <a href="https://www.top100.de/die-top-innovatoren/2021/mawa-gmbh.html">
              <img src={image} alt="" css={style.mainImage} />
            </a>
          </div>
          <div css={style.topRowRight}>
            <p>
              <strong>MAWA</strong> w styczniu 2021 roku została uznana za
              jednego z <strong>TOP 100 innowatorów w Niemczech.</strong>
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
            TOP 100 to jedyny niemiecki konkurs innowacyjności, w którym
            nagradza się średnie przedsiębiorstwa za zarządzanie innowacjami i
            ich sukcesy.{" "}
          </p>
          <p>
            TOP 100 nie przyznaje więc nagród poszczególnym produktom, ale
            przygląda się wszystkim etapom procesu innowacji, opierając się na
            naukowo uzasadnionej analizie około 120 kryteriów w pięciu
            kategoriach.
          </p>
          <p>
            W ten sposób mierzy się nie tylko wyniki innowacyjne, ale także
            potencjał innowacyjny tkwiący w przedsiębiorstwie.
          </p>
          <p>MAWA zdołała zwyciężyć wśród dużej liczby uczestniczących firm.</p>
          <p>
            Dlatego z dumą przyjmujemy tę wspaniałą nagrodę dla siebie, dla
            naszych pracowników i dla naszych partnerów!
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
      padding: "0em calc(1% + 2em)",
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
