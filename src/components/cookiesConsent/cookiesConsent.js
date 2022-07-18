import React, { useState } from "react"
import cookie from "../../images/cookie.svg"

import Button from "./button"
import Switcher from "./switch"
const CookiesPopUp = ({ setCookieConsent }) => {
  const [open, setOpen] = useState(false)
  const storageType = localStorage
  const consentPropName = "jdc_consent" //key
  const ttl = 2592000 // how much time to expire
  const now = new Date()
  const saveConsentToStorage = value => {
    storageType.setItem(
      consentPropName,
      JSON.stringify({
        value: value,
        expiry: now.getTime() + ttl,
      })
    )
  }
  return (
    <div css={[style.container, open && { height: "100vh" }]}>
      <div css={[style.wrapper, open && { padding: "20%" }]}>
        {!open ? (
          <>
            {" "}
            <div css={{ textAlign: "right" }}>
              <span
                onClick={() => {
                  saveConsentToStorage(1)
                  setCookieConsent(1)
                }}
              >
                x
              </span>
            </div>
            <div css={style.content}>
              <img css={style.image} src={cookie} alt="" />
              <div>
                <p>
                  Na naszej stronie stosujemy pliki cookies, które są zapisywane
                  na dysku urządzenia końcowego użytkownika w celu ułatwienia
                  nawigacji oraz dostosowanie do preferencji użytkownika.
                  Szczegółowe informacje o plikach cookies znajdziesz w Polityce
                  prywatności.
                </p>
                <a
                  css={{ color: "#ff0f00", margin: 0 }}
                  href="https://sklep.mawa-polska.pl/polityka-prywatnosci/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Zapoznaj się
                </a>
              </div>
            </div>
            <div css={style.buttons}>
              <Button
                text={"Ustawienia plików cookies"}
                func={() => {
                  setOpen(open ? false : true)
                }}
              />
              <Button
                text={"Odmawiam"}
                func={() => {
                  saveConsentToStorage(0)
                  setCookieConsent(0)
                }}
              />
              <Button
                text={"Akceptuje"}
                func={() => {
                  saveConsentToStorage(1)
                  setCookieConsent(1)
                }}
              />
            </div>
          </>
        ) : (
          <div
            css={{
              background: "white",
              height: "300px",
              width: "500px",
              borderRadius: "15px",
              padding: "20px",
            }}
          >
            <div
              onClick={() => {
                setOpen(open ? false : true)
              }}
              css={{ fontSize: "20px", textAlign: "right" }}
            >
              <span css={{ color: "black !important" }}>x</span>
            </div>
            <h3>
              Zaznacz do jakich celów możemy zapisywać cookie na twoim
              urządzeniu:
            </h3>
            <div
              css={{
                display: "flex",
                width: "160px",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <h4>Reklama</h4>
              <Switcher />
            </div>
            <div
              css={{
                display: "flex",
                width: "160px",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <h4>Analityka</h4>
              <Switcher />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CookiesPopUp

const style = {
  container: {
    width: "100%",
    background: "rgb(0, 0, 0 ,0.8)",
    position: "fixed",
    bottom: 0,
    left: 0,
    zIndex: 9999,
  },
  wrapper: {
    maxWidth: "500px",
    padding: "25px",
    margin: "auto",
    transition: "all 0.5s ease-out",
    img: {
      width: 50,
      height: 50,
    },
    p: {
      color: "white",
      margin: "0 0 5px 0",
    },
    span: {
      color: "white",
      fontSize: "20px",
      margin: "0 0 5px 0",
      cursor: "pointer",
    },
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
  },
  buttons: {
    marginTop: "25px",
    display: "flex",
    justifyContent: "space-between",
  },
}
