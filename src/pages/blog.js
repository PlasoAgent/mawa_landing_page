import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Seo from "../components/seo"
import { s } from "../style/index"
//CONTEXT//
const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  const url = location.href
  console.log(url)
  return (
    <>
      <Seo title="Blog" />
      <div css={description}>
        <h1>Blogi</h1>
        <p>Opis Blogów</p>
      </div>
      <div css={{ display: "flex", justifyContent: "center" }}>
        <section css={style.blogGrid}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            const image =
              post.frontmatter.image.childImageSharp.fluid || post.fields.slug

            return (
              <div css={style.articleWrapper}>
                <div css={{ width: 352, height: 248.15, overflow: "hidden" }}>
                  <Link to={"/blog" + post.fields.slug}>
                    <Img fluid={image} />
                  </Link>
                </div>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </div>
            )
          })}
        </section>
      </div>
    </>
  )
}

export default BlogIndex
const style = {
  blogGrid: {
    display: "grid",
    gridTemplateColumns: "400px 400px 400px",
    gridTemplateRows: "400px 400px",
    gap: "15px 10px",
  },
  articleGlobal: {},
  articleWrapper: { width: 300, height: 300 },
}
const description = {
  padding: "0px 10rem",

  h1: {
    textAlign: "center",
    fontSize: 32,
    paddingTop: "9rem",
    margin: 0,
    [s.xs]: { paddingTop: 6 + "rem" },
  },
  p: {
    opacity: 0.6,
    margin: "1rem 0rem 5rem",
    textAlign: "center",
    [s.sm_down]: {
      margin: "1rem 0rem 2.5rem",
    },
  },
  [s.sm_down]: {
    padding: "0px 5rem",
  },
  [s.xs]: {
    padding: "0px 1rem",
  },
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD MMMM YYYY", locale: "pl")
          title
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
    }
  }
`
