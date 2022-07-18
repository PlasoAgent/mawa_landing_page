import React, { useState } from "react"
import Seo from "../components/seo"
import Slider from "../components/slider/slider"
import BrandDescription from "./../components/brand/brandDescription"
import NewsBox from "../components/newsBox/newsBox"
import EcoBugel from "../components/imageBox/imageBox"
import Agenda from "../components/imageBox/imageBox"
import VideoBox from "../components/videoBox/videoBox"
import Innovation from "../components/innovation/innovation"
//images//
import ecoBugel from "../images/mawa_eco_bugel.webp"
import mawaAgenda from "../images/mawa_agenda.webp"
import seoImage from "../images/slide_image1.png"
//Content//
import { ecoContent } from "../contents/ecoBugel"
import { agendaContent } from "../contents/agenda"

import LifeStyleBox from "../components/lifeStyleBox/lifeStyleBox"
import GrowthBox from "./../components/growthBox/growthBox"
import Popup from "../components/popup/popup"

const IndexPage = () => {
  const seo = {
    description:
      "Wieszaki na ubrania produkowane w Niemczech z metalu, drewna i tworzywa sztucznego - na bluzki, spódnice, spodnie i kurtki - wieszaki na ubrania dla monterów sklepów, tekstylnych, hotelarzy i klientów indywidualnych oraz kilka przydatnych akcesoriów: w katalogu MAWA znajdziesz szczegółowe opisy produktów i rekomendacje...",
    image: seoImage,
    title: "Home",
  }
  const params = new URLSearchParams(
    typeof window !== "undefined" && window.location.search
  )
  return (
    <div>
      <Seo description={seo.description} title={seo.title} image={seo.image} />
      <Slider time={4} />
      <BrandDescription />
      <NewsBox />
      <EcoBugel image={ecoBugel} content={ecoContent} />
      <VideoBox />
      <Innovation />
      <LifeStyleBox />
      <GrowthBox />
      <Agenda image={mawaAgenda} content={agendaContent} />
      {params.get("type") === "game" && <Popup />}
    </div>
  )
}

IndexPage.defaultProps = {
  path: "/",
}

export default IndexPage
