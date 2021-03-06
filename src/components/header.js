import * as React from "react"
import logo from "../images/mawa_logo.svg"
import logoClaim from "../images/mawa_claim_w.svg"
import original from "../images/mawa_original.svg"
import mig from "../images/mawa_mig.svg"
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout"
import { Link } from "gatsby"
const Header = () => {
  const [selectedSite, setSelectedSite] = React.useState(
    typeof window !== "undefined" && window.location.pathname
  )
  const [isTop, setIsTop] = React.useState(
    selectedSite === "/" ? "large" : "small"
  )
  const [open, setOpen] = React.useState(false)
  // React.useEffect(() => {
  //   return history.listen(location => {
  //     if (history.action === "PUSH") {
  //       setLocationKeys([location.key])
  //     }

  //     if (history.action === "POP") {
  //       if (locationKeys[1] === location.key) {
  //         setLocationKeys(([_, ...keys]) => keys)

  //         setSelectedSite(
  //           typeof window !== "undefined" && window.location.pathname
  //         )
  //       } else {
  //         setLocationKeys(keys => [location.key, ...keys])

  //         setSelectedSite(
  //           typeof window !== "undefined" && window.location.pathname
  //         )
  //       }
  //     }
  //   })
  // }, [locationKeys])

  React.useEffect(() => {
    window.addEventListener(
      "hashchange",
      function () {
        console.log("Hash was changed!")
      },
      false
    )
  })
  React.useEffect(() => {
    selectedSite === "/" && setIsTop("large")
  }, [selectedSite])
  React.useEffect(() => {
    selectedSite === "/"
      ? (window.onscroll = () =>
          window.pageYOffset === 0 ? setIsTop("large") : setIsTop("small"))
      : setIsTop("small")

    return () => (window.onscroll = null)
  }, [isTop, selectedSite])
  const hamburgerHandler = () => {
    open ? setOpen(false) : setOpen(true)
  }
  return (
    <header css={[header, header[isTop]]}>
      <Link
        to="/"
        onClick={() => {
          setSelectedSite("/")
        }}
      >
        <div css={header[isTop].logo}>
          <img src={logo} alt="" />
        </div>
      </Link>
      <div css={header[isTop].logoClaim}>
        <img src={logoClaim} alt="" />
      </div>
      {/* <div
        css={{ position: "absolute", top: 15, right: 15 }}
        onClick={hamburgerHandler}
      >
        <img src={hamburger} css={{ width: 30, height: 30 }} />
      </div> */}
      <div
        css={{
          position: "absolute",
          top: 20,
          right: 15,
          "@media only screen and (max-width: 426px)": {
            top: 15,
          },
        }}
        onClick={hamburgerHandler}
      >
        <div
          css={[
            hamburger_style,
            open === true ? hamburger_style.open : hamburger_style.close,
          ]}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        css={[
          header[isTop].mobile,
          open ? header[isTop].mobile.open : header[isTop].mobile.close,
        ]}
      >
        <Link
          to={"/"}
          onClick={() => {
            setSelectedSite("/")
          }}
        >
          <p>Start</p>
        </Link>
        <a href="https://sklep.mawa-polska.pl/">
          <ShoppingCartCheckoutIcon />
          <p>Sklep</p>
        </a>
        <Link
          to={"/blog"}
          onClick={() => {
            setSelectedSite("blog")
          }}
        >
          <p>Blog</p>
        </Link>
      </div>
      <nav>
        <Link
          to={"/"}
          onClick={() => {
            setSelectedSite("/")
          }}
        >
          <p>Start</p>
        </Link>
        <a href="https://sklep.mawa-polska.pl/">
          <ShoppingCartCheckoutIcon />
          <p>Sklep</p>
        </a>
        <Link
          to={"/blog"}
          onClick={() => {
            setSelectedSite("blog")
          }}
        >
          <p>Blog</p>
        </Link>
      </nav>
      <div css={header[isTop].origin}>
        <img src={original} alt="" />
      </div>
      <div css={header[isTop].mig}>
        <a href="https://sklep.mawa-polska.pl/made-in-germany/">
          <img src={mig} alt="" />
        </a>
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
      paddingTop: "65px",
      backgroundColor: "rgba(0,0,0,0.8)",
      width: "100%",
      position: "fixed",
      top: 0,
      zIndex: 60,
      open: {
        opacity: 1,
        transition: "opacity 0.3s ease-in",
      },
      close: {
        opacity: 0,
        transition: "opacity 0.3s ease-in",
        display: "none !important",
      },
      a: {
        display: "flex",
        margin: "0 2em 0 0",
        textDecoration: "none",
        alignItems: "center",
        opacity: "0.7",
        color: "#fff",
        transition: "1s",
        textTransform: "uppercase",
        width: "100%",
        borderTop: "1px solid #444",
        backgroundColor: "rgba(0,0,0,0.8)",
        padding: "16px",
        ":last-child": {
          borderBottom: "1px solid #444",
        },
        ":hover": {
          opacity: 1,
        },
        p: {
          margin: 0,
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
        width: "100%",
        display: "block",
        position: "fixed",
      },
    },
    nav: {
      margin: "auto",
      padding: "0.5em 0 0 0",
      width: "min-content",
      display: "flex",
      flexDirection: "row",
      gap: 25,
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
        fontSize: "20px",
        ":nth-child(2)": {
          fontSize: "30px",
        },
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
      paddingTop: "65px",
      backgroundColor: "rgba(0,0,0,0.8)",
      width: "100%",
      position: "fixed",
      top: 0,
      zIndex: 60,
      open: {
        opacity: 1,
        transition: "opacity 0.3s ease-in",
      },
      close: {
        opacity: 0,
        transition: "opacity 0.3s ease-in",
        display: "none !important",
      },
      a: {
        display: "flex",
        margin: "0 2em 0 0",
        textDecoration: "none",
        alignItems: "center",
        opacity: "0.7",
        color: "#fff",
        transition: "1s",
        textTransform: "uppercase",
        width: "100%",
        borderTop: "1px solid #444",
        backgroundColor: "rgba(0,0,0,0.8)",
        padding: "16px",
        ":last-child": {
          borderBottom: "1px solid #444",
        },
        ":hover": {
          opacity: 1,
        },
        p: {
          margin: 0,
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
        width: "100%",
        display: "block",
        position: "fixed",
      },
    },
    nav: {
      margin: "0 5.5em 0 0",
      padding: "0",
      height: "4em",
      float: "right",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "row",
      gap: "25px",
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
        display: "none",
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
        zIndex: 8,
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
  close: {
    display: "none !important",
  },
}
const hamburger_style = {
  width: "30px",
  height: "22px",
  position: "relative",
  WebkitTransform: "rotate(0deg)",
  MozTransform: "rotate(0deg)",
  OTransform: "rotate(0deg)",
  transform: "rotate(0deg)",
  WebkitTransition: ".5s ease-in-out",
  MozTransition: ".5s ease-in-out",
  OTransition: ".5s ease-in-out",
  transition: ".5s ease-in-out",
  cursor: "pointer",
  zIndex: 999,
  "@media only screen and (min-width: 1024px)": {
    display: "none",
  },

  close: {
    span: {
      display: "block",
      position: "absolute",
      height: "4px",
      width: "50%",
      background: "#ffffff",
      opacity: "0.7",
      WebkitTransform: "rotate(0deg)",
      MozTransform: "rotate(0deg)",
      OTransform: "rotate(0deg)",
      transform: "rotate(0deg)",
      WebkitTransition: ".25s ease-in-out",
      MozTransition: ".25s ease-in-out",
      OTransition: ".25s ease-in-out",
      transition: ".25s ease-in-out",
      zIndex: 999999999999,
      ":nth-child(even)": {
        left: "50%",
        borderRadius: "0 4px 4px 0",
      },
      ":nth-child(odd)": {
        left: "0px",
        borderRadius: "4px 0 0 4px",
      },
      ":nth-child(1)": {
        top: "0px",
      },
      ":nth-child(2)": {
        top: "0px",
      },
      ":nth-child(3)": {
        top: "9px",
      },
      ":nth-child(4)": {
        top: "9px",
      },
      ":nth-child(5)": {
        top: "18px",
      },
      ":nth-child(6)": {
        top: "18px",
      },
    },
  },
  open: {
    span: {
      display: "block",
      position: "absolute",
      height: "4.5px",
      width: "50%",
      background: "#ffffff",
      WebkitTransform: "rotate(0deg)",
      MozTransform: "rotate(0deg)",
      OTransform: "rotate(0deg)",
      transform: "rotate(0deg)",
      WebkitTransition: ".25s ease-in-out",
      MozTransition: ".25s ease-in-out",
      OTransition: ".25s ease-in-out",
      transition: ".25s ease-in-out",
      zIndex: 999999999999,
      ":nth-child(even)": {
        left: "50%",
        borderRadius: "0 4.5px 4.5px 0",
      },
      ":nth-child(odd)": {
        left: "0px",
        borderRadius: "4.5px 0 0 4.5px",
      },
      ":nth-child(1)": {
        WebkitTransform: "rotate(45deg)",
        MozTransform: "rotate(45deg)",
        OTransform: "rotate(45deg)",
        transform: "rotate(45deg)",
        left: "2.5px",
        top: "3.5px",
      },
      ":nth-child(2)": {
        WebkitTransform: "rotate(-45deg)",
        MozTransform: "rotate(-45deg)",
        OTransform: "rotate(-45deg)",
        transform: "rotate(-45deg)",
        left: "calc(50% - 2.5px)",
        top: "3.5px",
      },
      ":nth-child(3)": {
        left: "-50%",
        opacity: "0",
        top: "9px",
      },
      ":nth-child(4)": {
        left: "100%",
        opacity: "0",
        top: "9px",
      },
      ":nth-child(5)": {
        WebkitTransform: "rotate(-45deg)",
        MozTransform: "rotate(-45deg)",
        OTransform: "rotate(-45deg)",
        transform: "rotate(-45deg)",
        left: "2.5px",
        top: "14.5px",
      },
      ":nth-child(6)": {
        WebkitTransform: "rotate(45deg)",
        MozTransform: "rotate(45deg)",
        OTransform: "rotate(45deg)",
        transform: "rotate(45deg)",
        left: "calc(50% - 2.5px)",
        top: "14.5px",
      },
    },
  },
}
