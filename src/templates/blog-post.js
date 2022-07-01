import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import { s, colors } from "../style/index"
import ShareButtons from "../components/shareButtons/shareButtons"
import blogHeader from "../images/blogheader.webp"
import Img from "gatsby-image"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const image = data?.markdownRemark?.frontmatter?.image?.childImageSharp?.fluid
  const imageUrl = data?.markdownRemark?.frontmatter?.image?.publicURL
  const url = location.href
  // console.log(
  //   "DEBUGED:",
  //   url,
  //   post.frontmatter.title,
  //   post.frontmatter.description,
  //   imageUrl
  // )
  // const { previous, next } = data

  return (
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
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        url={url}
        image={imageUrl}
        type="article"
      />
      <article
        css={style.blogPost}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
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
  )
}

const style = {
  blogPost: {
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
    margin: "auto",
    "@media only screen and (max-width: 1200px)": {
      margin: "0 auto",
    },
    [s.sm_down]: { width: 600 },
    "@media only screen and (max-width: 600px)": {
      margin: 0,
      marginTop: "4rem !important",
      width: "100%",
    },
    "header h1": {
      margin: "0rem 0rem 1rem 0rem",
      fontSize: 38,
      [s.xs]: { fontSize: "24px" },
    },
    "header p": {
      fontSize: "16px",
      color: colors.brand + "important",
    },
    p: {
      letterSpacing: "0.2px",
      fontSize: 16,
      lineHeight: "28px",
      margin: "0 auto 20px",
    },
    "h1,h2,h3,h4,h5,h6": {
      margin: "26px 0 30px",
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
