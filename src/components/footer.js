import React from "react"
//img
import mawa_shop from "../images/mawa_shop.svg"
import mawa_boc from "../images/mawa_boc.png"
import mawa_top100 from "../images/mawa_top100.jpg"
//icons
import insta from "../images/insta.svg"
import facebook from "../images/facebook_logo.svg"
import printerest from "../images/pinterest_logo.svg"
import youtube from "../images/mawa_youtube.svg"

const info =
  "MAWA Polska\nWenedów 3\n75-847 Koszalin\nPolska\nTelefon: 660 200 016, 94 342 32 72"
const Footer = ({}) => {
  return (
    <div css={style}>
      <div css={style.footerTop}>
        <div css={style.footerTop.topLeft}>
          © {new Date().getFullYear()} MAWA GmbH
        </div>
        <div css={style.footerTop.topRigth}>
          <a href="https://mawa-polska.pl/polityka-prywatnosci/">
            Polityka Prywatności
          </a>
          <a href="https://mawa-polska.pl/regulamin/">Regulamin</a>
        </div>
      </div>
      <div css={style.footerLeft}>
        <div css={style.footerLeft.column1}>
          {info}
          <a href="mailto:office@plaso-agentur.de">info@mawa-polska.pl</a>
        </div>
      </div>
      <div css={style.footerRight}>
        <div css={style.footerRight.column1}>
          <div>
            <p>
              {
                "Zamów tutaj\nbezpośrednio dla Ciebie\nwieszaki do użytku prywatnego"
              }
            </p>
          </div>
          <div>
            <a href="https://mawa-polska.pl/" target="_blank">
              <img src={mawa_shop} alt="" />
            </a>
          </div>
          <div>
            <img src={mawa_boc} alt="" />
          </div>
          <div>
            <a href="https://www.top100.de/die-top-innovatoren/2021/mawa-gmbh.html">
              <img src={mawa_top100} alt="" />
            </a>
          </div>
        </div>
        <div css={style.footerRight.column2}>
          <div>
            <a
              href="https://www.instagram.com/accounts/login/?next=/mawa_original/"
              target="_blank"
            >
              <img src={insta} alt="" />
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/MAWA.Original/" target="_blank">
              <img src={facebook} alt="" />
            </a>
          </div>
          <div>
            <a href="https://www.pinterest.de/mawa_original/" target="_blank">
              <img src={printerest} alt="" />
            </a>
          </div>
          <div>
            <a
              href="https://www.youtube.com/channel/UCXGWBTzTI_I7rt3fWBab7uA"
              target="_blank"
            >
              <img src={youtube} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
const style = {
  display: "flex",
  flexWrap: "wrap",
  padding: "0.5em 3em 2em",
  boxSizing: "border-box",
  width: "100%",
  margin: "0 auto",
  justifyContent: "left",
  alignItems: "flex-start",
  backgroundColor: "#333",
  whiteSpace: "pre-line",
  footerTop: {
    display: "block",
    width: "100%",
    color: "#fff",
    padding: "1em 0em",
    boxSizing: "border-box",
    fontSize: "1.2em",
    fontWeight: "300",
    borderBottom: "1px #ff0f00 solid",
    topLeft: {
      float: "left",
      "@media only screen and (max-width: 900px)": {
        float: "none",
        width: '100%',
        margin: '0 0 1em',
      },
    },
    topRigth: {
      float: "right",
      a: {
        color: "#fff",
        padding: "0 0 0 2em",
        fontSize: "0.9em",
        fontWeight: "300",
        border: "none",
        textDecoration: "none",
        outline: "none",
        "@media only screen and (max-width: 900px)": {
          display: "block",
          gap:'20px',
          padding: "0.8em 0 !important",
          width: "100%",
        },
      },
      "@media only screen and (max-width: 900px)": {
        float: "none",
      },
    },
    "@media only screen and (max-width: 1300px)": {
      textAlign: "center",
    },
  },
  footerLeft: {
    display: "block",
    width: "50%",
    float: "left",
    color: "#fff",
    padding: "1em 0 0 0em",
    boxSizing: "border-box",
    fontSize: "1em",
    fontWeight: "300",
    column1: {
      display: "block",
      width: "50%",
      float: "left",
      color: "#fff",
      padding: "1em 1em 1em 0",
      WebkitBoxSizing: "border-box",
      MozBoxSizing: "border-box",
      boxSizing: "border-box",
      lineHeight: "1.6em",
      a: {
        display: "inline-block",
        color: "#fff",
        clear: "left",
        padding: "0.3em 0 0",
        margin: "0 0 0.2em",
        textTransform: "uppercase",
        border: "none",
        textDecoration: "none",
        outline: "none",
      },
      "@media only screen and (max-width: 1300px)": {
        width: "100%",
      },
    },
    "@media only screen and (max-width: 1300px)": {
      width: "100%",
      textAlign: "center",
    },
  },
  footerRight: {
    display: "block",
    width: "50%",
    float: "left",
    color: "#fff",
    padding: "0 0em 0 0",
    boxSizing: "border-box",
    textAlign: "right",
    fontSize: "1em",
    column1: {
      color: "#fff",
      boxSizing: "border-box",
      lineHeight: "1.5em",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      margin: "1em 0 2em",
      div: {
        padding: "0.5em 0 0 0",
        img: {
          display: "block",
          padding: "0em 0 0em 3em",
          boxSizing: "border-box",
          height: "5em",
          width: "auto",
        },
      },
      "@media only screen and (max-width: 1300px)": {
        flexDirection: "column",
        textAlign: "center",
        div: {
          padding: "1em 0 1em 0",
          img: {
            padding: 0,
          },
        },
      },
    },
    column2: {
      color: "#fff",
      boxSizing: "border-box",
      lineHeight: "1.5em",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      margin: "1em 0 2em",
      div: {
        padding: "0.5em 0 0 0",
        img: {
          padding: "1em",
          width: "2.5em",
          height: "auto",
        },
      },
      "@media only screen and (max-width: 1300px)": {
        justifyContent: "center",
      },
    },
    "@media only screen and (max-width: 1300px)": {
      width: "100%",
    },
  },
}
