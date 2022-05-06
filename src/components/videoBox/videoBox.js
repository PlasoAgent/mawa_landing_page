import React from "react"
import GridBox from "../gridBox/gridBox"
import content from "./content"
import video_1 from "../../videos/video_1.mp4"
import video_2 from "../../videos/video_2.mp4"
import video_3 from "../../videos/video_3.mp4"
import placeholder_1 from "../../videos/placeholder_1.jpg"
import placeholder_2 from "../../videos/placeholder_2.jpg"
import placeholder_3 from "../../videos/placeholder_3.jpg"
const videos = {
  video_1: { video_1, placeholder_1 },
  video_2: { video_2, placeholder_2 },
  video_3: { video_3, placeholder_3 },
}

const VideoBox = ({}) => {
  return <GridBox data={videos} content={content} />
}
export default VideoBox
