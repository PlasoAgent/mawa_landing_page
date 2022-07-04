import React, { useRef, useEffect, useState } from "react"
import { graphql, Link } from "gatsby"
import Seo from "../components/seo"
import { s, colors } from "../style/index"
import ShareButtons from "../components/shareButtons/shareButtons"
import blogHeader from "../images/blogheader.webp"
import Img from "gatsby-image"
import facebook_image from "../images/socials/facebook_mawa.webp"
import insta_image from "../images/socials/insta_mawa.webp"
import pinterest_image from "../images/socials/pinterest_mawa.webp"
//CONTENT
import { content } from "./content/content"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const image = data?.markdownRemark?.frontmatter?.image?.childImageSharp?.fluid
  const imageUrl = data?.markdownRemark?.frontmatter?.image?.publicURL
  const url = location.href
  const images = {
    facebook: facebook_image,
    instagram: insta_image,
    pinterest: pinterest_image,
  }
  const scrollingDiv = useRef(null)
  const [startPosition, setStartPosition] = useState(0)
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    })
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
      // Add event listener
      window.addEventListener("resize", handleResize)
      // Call handler right away so state gets updated with initial window size
      handleResize()
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize)
    }, []) // Empty array ensures that effect is only run on mount
    return windowSize
  }
  const size = useWindowSize()
  useEffect(() => {
    setStartPosition(scrollingDiv.current.offsetHeight)
  }, [size])

  return (
    <>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        url={url}
        image={imageUrl}
        type="article"
      />
      <div>
        <div
          css={{
            position: "relative",
            overflow: "hidden",
            zIndex: "0",
            height: "20vh",
            width: "100%",
            paddingTop: "50px",
          }}
        >
          <img
            src={blogHeader}
            alt=""
            css={{
              position: "absolute",
              top: "0px",
              left: "0px",
              minHeight: "20vh",
              width: "100%",
              objectFit: "cover",
              height: "2vh",
            }}
          />
        </div>
        <div
          css={{
            display: "flex",
            gap: "150px",
            justifyContent: "center",
            padding: "1.5em 3em",
            [s.sm_down]: {
              flexDirection: " column",
            },
            [s.md_middle]: {
              gap: "70px",
            },
          }}
        >
          <article
            css={style.blogPost}
            itemScope
            itemType="http://schema.org/Article"
          >
            <header ref={scrollingDiv}>
              <h1 itemProp="headline">{post.frontmatter.title}</h1>
              <div
                css={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <img
                  css={{ width: 16, height: 16 }}
                  src="https://img.icons8.com/android/24/000000/clock.png"
                  alt=""
                />
                <p style={{ margin: 0 }}>{post.frontmatter.date}</p>
              </div>
            </header>
            <Img css={{ marginBottom: 1 + "rem" }} fluid={image} />

            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
              css={{
                marginBottom: "1rem",
              }}
            />
            <div css={{ borderBottom: "3px solid " + colors.brand }} />
            <footer>
              <ShareButtons title={post.frontmatter.title} url={url} />
            </footer>
          </article>
          <div
            css={{
              height: "700px",
              width: "100%",
              maxWidth: "375px",
              position: "sticky",
              top: 67,
              marginTop: `${startPosition}px`,
              [s.sm_down]: {
                margin: "1rem auto 0px",
                maxWidth: "600px",
                height: "auto",
              },
            }}
          >
            {content.map((social, id) => {
              return (
                <div
                  key={id}
                  css={{ position: "relative", marginBottom: "20px" }}
                >
                  <Link
                    to={social.url}
                    css={{
                      color: "#fff",
                      textDecoration: "none",
                      width: "100%",
                      [s.sm_down]: {
                        position: "unset",
                      },
                    }}
                  >
                    <div
                      css={{
                        width: "100%",
                        padding: "10px 0px 10px 0px",
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        textAlign: "center",
                      }}
                    >
                      {social.title}
                    </div>
                  </Link>
                  <div css={{ width: "100%" }}>
                    <img
                      src={images[social.image]}
                      alt=""
                      css={{ width: "100%" }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {/* <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
      </div>
    </>
  )
}

const style = {
  blogPost: {
    span: {
      marginLeft: 0 + "!important",
    },
    h1: { fontSize: "2rem" },
    strong: {
      color: colors.brand,
    },
    a: {
      color: "#6bb53a",
    },
    "a:hover": {
      color: "#6bb53a",
    },
    "ol, ul": {
      margin: "5px 0px 5px 2rem",
    },
    width: 800,
    "@media only screen and (max-width: 1200px)": {
      margin: "0 auto",
    },
    [s.sm_down]: { width: 600 },
    "@media only screen and (max-width: 700px)": {
      margin: 0,
      width: "100%",
    },
    "header h1": {
      margin: "0rem 0rem 1rem 0rem",
      fontSize: 38,
      [s.xs]: { fontSize: "18px" },
    },
    "header p": {
      fontSize: "16px",
      color: colors.brand + "important",
      [s.xs]: { fontSize: "14px" },
    },
    p: {
      letterSpacing: "0.2px",
      fontSize: 16,
      lineHeight: "28px",
      margin: "0 auto 20px",
    },

    "h1,h2,h3,h4,h5,h6": {
      margin: "26px 0 30px",
      [s.xs]: { fontSize: "18px" },
    },
  },
  blogPostNav: {
    ul: {
      margin: "0px",
    },
  },
}
export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY", locale: "pl")
        description
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
