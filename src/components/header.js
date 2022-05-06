import * as React from "react"
import logo from "../images/mawa_logo.svg"
import logoClaim from "../images/mawa_claim_w.svg"
import original from "../images/mawa_original.svg"
import mig from "../images/mawa_mig.svg"
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout"

const Header = ({}) => {
  const [isTop, setIsTop] = React.useState("large")
  React.useEffect(() => {
    window.onscroll = () =>
      window.pageYOffset === 0 ? setIsTop("large") : setIsTop("small")
    return () => (window.onscroll = null)
  }, [isTop])
  return (
    <header css={[header, header[isTop]]}>
      <div css={header[isTop].logo}>
        <img src={logo} alt="" />
      </div>
      <div css={header[isTop].logoClaim}>
        <img src={logoClaim} alt="" />
      </div>
      <div css={header[isTop].mobile}>
        <a href="https://mawa-polska.pl/">
          <ShoppingCartCheckoutIcon />
          <p>Sklep</p>
        </a>
      </div>
      <nav>
        <a href="https://mawa-polska.pl/">
          <ShoppingCartCheckoutIcon />
          <p>Sklep</p>
        </a>
      </nav>
      <div css={header[isTop].origin}>
        <img src={original} alt="" />
      </div>
      <div css={header[isTop].mig}>
        <img src={mig} alt="" />
      </div>
    </header>
  )
}

export default Header

const header = {
  large: {
    background: "rgba(0,0,0,0.5)",
    borderBottom: "3px solid #ff0f00",
    mobile: {
      width: "100%",
      display: "block",
      position: "fixed",
      top: "0",
      zIndex: 60,
      a: {
        display: "flex",
        margin: "0 2em 0 0",
        textDecoration: "none",
        float: "right",
        alignItems: "center",
        opacity: "0.7",
        color: "#fff",
        transition: "1s",
        textTransform: "uppercase",
        width: "min-content",
        ":hover": {
          opacity: 1,
        },
      },

      svg: {
        display: "flex",
        fontSize: "20px",
      },
      p: {
        fontSize: "20px",
      },
      "@media only screen and (min-width: 1024px)": {
        display: "none",
      },
    },
    nav: {
      margin: "auto",
      padding: "0.5em 0 0 0",
      width: "min-content",
      a: {
        display: "flex",
        textDecoration: "none",
        alignItems: "center",
        margin: "auto",
        opacity: "0.7",
        color: "#fff",
        transition: "1s",
        textTransform: "uppercase",
        ":hover": {
          opacity: 1,
        },
      },

      svg: {
        display: "flex",
        fontSize: "36px",
      },
      p: {
        fontSize: "36px",
      },
      "@media only screen and (max-width: 1024px)": {
        display: "none",
      },
    },
    logo: {
      width: "8em",
      height: "auto",
      display: "block",
      margin: "2em auto 0",
      transition: "all 0.5s ease-in-out",
      img: {
        width: "100%",
        height: "auto",
        margin: "4% 0 1em 0",
        boxSizing: "border-box",
      },
      "@media only screen and (max-width: 425px)": {
        width: "5em",
        height: "auto",
        display: "block",
        margin: "2em auto 0",
      },
    },
    logoClaim: {
      width: "19em",
      height: "auto",
      display: "block",
      margin: "0 auto",
      img: {
        width: "100%",
        height: "auto",
        margin: 0,
        padding: 0,
      },
      "@media only screen and (max-width: 1024px)": {
        width: "18em",
        margin: "0 auto 1em",
      },
      "@media only screen and (max-width: 425px)": {
        width: "14em",
        margin: "0 auto 2em",
      },
    },
    origin: {
      display: "block",
      position: "absolute",
      bottom: "-1.8em",
      left: "-2em",
      width: "13em",
      height: "auto",
      margin: "0 auto",
      zIndex: 30,
      img: {
        width: "100%",
        height: "auto",
        margin: 0,
        padding: 0,
      },
      "@media only screen and (max-width: 425px)": {
        bottom: "-1em",
        left: "-1.5em",
        width: "8em",
      },
    },
    mig: {
      display: "block",
      position: "absolute",
      bottom: "-4em",
      right: "1em",
      width: "9em",
      height: "auto",
      margin: "0 auto",
      zIndex: 30,
      img: {
        width: "100%",
        height: "auto",
        margin: "0",
        padding: "0",
      },
      "@media only screen and (max-width: 425px)": {
        bottom: "-2.5em",
        right: "0.5em",
        width: "6.5em",
      },
    },
  },
  small: {
    background: "rgba(0,0,0,0.8)",
    borderBottom: "3px solid #ff0f00",
    boxShadow: "0px 1px 3px 0px rgb(0 0 0 / 20%)",
    height: "64px",
    mobile: {
      display: "none",
    },
    nav: {
      margin: "0 5.5em 0 0",
      padding: "0",
      height: "4em",
      float: "right",
      boxSizing: "border-box",
      a: {
        display: "flex",
        margin: "0.3rem",
        textDecoration: "none",
        alignItems: "center",
        opacity: "0.7",
        color: "#fff",
        transition: "1s",
        fontSize: "1em",
        textTransform: "uppercase",
        ":hover": {
          opacity: 1,
        },
      },
      "@media only screen and (max-width: 1024px)": {
        margin: "0 0.2em 0 0",
      },
    },
    logo: {
      display: "block",
      position: "absolute",
      top: "0.5em",
      left: "3em",
      width: "6.5em",
      height: "auto",
      margin: 0,
      padding: 0,
      transition: "all 0.5s ease-in-out",
      img: {
        width: "100%",
        height: "auto",
        boxSizing: "border-box",
        margin: 0,
      },

      "@media only screen and (max-width: 1400px)": {
        left: "1em",
      },
      "@media only screen and (max-width: 1300px)": {
        left: "1em",
        top: "1em",
        width: "6em",
      },
      "@media only screen and (max-width: 1024px)": {
        left: "1.5em",
        top: "1.3em",
        width: "6em",
      },
      "@media only screen and (max-width: 425px)": {
        left: "1em",
        top: 0,
        width: "4em",
        zIndex: 1000,
      },
    },
    logoClaim: {
      display: "block",
      position: "absolute",
      left: "12em",
      top: "0.8em",
      width: "16em",
      height: "auto",
      img: {
        width: "100%",
        height: "auto",
        margin: 0,
        padding: 0,
      },
      "@media only screen and (max-width: 1400px)": {
        width: "13em",
        left: "9em",
      },
      "@media only screen and (max-width: 1300px)": {
        width: "12em",
        left: "8.5em",
        top: "1em",
      },
      "@media only screen and (max-width: 425px)": {
        width: "9em",
        left: "6em",
        top: "1em",
      },
    },
    origin: {
      display: "block",
      position: "absolute",
      bottom: "-7em",
      left: "-1.2em",
      width: "11em",
      height: "auto",
      margin: "0 auto",
      img: {
        width: "100%",
        height: "auto",
        margin: 0,
        padding: 0,
      },
      "@media only screen and (max-width: 1400px)": {
        width: "10em",
        left: "-2.2em",
        bottom: "-6em",
      },
      "@media only screen and (max-width: 425px)": {
        width: "8em",
        left: "-2em",
        bottom: "-3em",
      },
    },
    mig: {
      display: "block",
      position: "absolute",
      bottom: "-6.5em",
      right: "1em",
      width: "8em",
      height: "auto",
      margin: "0 auto",
      img: {
        width: "100%",
        height: "auto",
        margin: 0,
        padding: 0,
      },
      "@media only screen and (max-width: 425px)": {
        width: "5em",
        right: "1em",
        bottom: "-3.8em",
      },
    },
    "@media only screen and (max-width: 425px)": {
      height: "55px",
    },
  },
  float: "left",
  width: "100%",
  position: "fixed",
  zIndex: 2000,
  transition: "all 0.5s ease-in-out",
  img: {
    transition: "all 0.5s ease-in-out",
  },
}
