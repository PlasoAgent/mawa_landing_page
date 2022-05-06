import { DomainVerification } from "@mui/icons-material"
import React from "react"
import SchenkPhoto from "../../images/MAWAHome_FrSchenk.png"
import mawaBrand from "../../images/mawa_brand_century.jpg"
import data from "./content"

const BrandDescription = ({}) => {
  return (
    <section css={{ maxWidth: "1700px", margin: "auto" }}>
      <div css={container}>
        <div css={photoBox}>
          <img src={SchenkPhoto} alt="" />
        </div>
        <div css={descriptionBox}>
          <h1>{data.title}</h1>
          {data.description.map((e, key) => (
            <p key={key}>{e.paragraph}</p>
          ))}
          <div>
            <img src={mawaBrand} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandDescription

const container = {
  width: "100%",
  padding: "1.5em 3em",
  margin: "0 auto 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  transition: "opacity .5s ease-in-out",
  boxSizing: "border-box",
  zIndex: 10,
  "@media only screen and (max-width: 1024px)": {
    flexDirection: "column",
  },
}
const photoBox = {
  width: "50%",
  padding: "2rem",
  img: {
    width: "100%",
    height: "auto",
  },
  "@media only screen and (max-width: 1024px)": {
    width: "100%",
    padding: 0,
  },
}
const descriptionBox = {
  width: "50%",
  padding: "2rem",
  fontSize: "1.2em",
  fontWeight: "300",
  lineHeight: "1.5em",
  h1: {
    fontSize: "1.5em",
    padding: "1em 0",
    margin: "0",
    textAlign: "left",
    fontWeight: "400",
  },
  "@media only screen and (max-width: 1024px)": {
    width: "100%",
    padding: 0,
  },
}
