import React from "react"
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share"

// const ShareButtons = ({ title, url, twitterHandle, tags }) => {
const ShareButtons = ({ title, url }) => {
  return (
    <div
      css={{
        width: "100%",
        paddingTop: "1rem",
        borderTop: "2px solid #ff0f00 ",
      }}
    >
      <FacebookShareButton css={style.shareButton} url={url} title={title}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>

      <TwitterShareButton url={url} css={style.shareButton} title={title}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>

      <LinkedinShareButton url={url} css={style.shareButton}>
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>

      <RedditShareButton url={url} css={style.shareButton} title={title}>
        <RedditIcon size={32} round={true} />
      </RedditShareButton>

      <WhatsappShareButton url={url} css={style.shareButton} title={title}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
    </div>
  )
}
const style = {
  shareButton: {
    margin: "0px 10px 0px 10px",
    ":first-of-type": {
      margin: "0px 10px 0px 0px",
    },
  },
}
export default ShareButtons
