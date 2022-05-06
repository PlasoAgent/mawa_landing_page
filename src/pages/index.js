import * as React from "react"
import Seo from "../components/seo"
import Slider from "../components/slider/slider"
import FancyHeader from "../components/typography/fancyHeading"
import BrandDescription from "./../components/brand/brandDescription"
import NewsBox from "../components/newsBox/newsBox"
import EcoBugel from "../components/imageBox/imageBox"
import Agenda from "../components/imageBox/imageBox"
import VideoBox from "../components/videoBox/videoBox"
import Innovation from "../components/innovation/innovation"
//images//
import ecoBugel from "../images/mawa_eco_bugel.webp"
import mawaAgenda from "../images/mawa_agenda.webp"
//Content//
import ecoContent from "../contents/ecoBugel"
import agendaContent from "../contents/agenda"

import LifeStyleBox from "../components/lifeStyleBox/lifeStyleBox"
import GrowthBox from "./../components/growthBox/growthBox"

const IndexPage = ({}) => (
  <div>
    <Slider time={4} />
    <BrandDescription />
    <NewsBox />
    <EcoBugel image={ecoBugel} content={ecoContent} />
    <VideoBox />
    <Innovation />
    <LifeStyleBox />
    <GrowthBox />
    <Agenda image={mawaAgenda} content={agendaContent} />
  </div>
)

export default IndexPage
