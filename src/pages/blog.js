import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Seo from "../components/seo"
import { s } from "../style/index"
import blogHeader from "../images/blogheader.webp"
import blogDeco from "../images/blogDeco.svg"
import blogDeco2 from "../images/blogDeco2.png"
//CONTEXT//
const BlogIndex = ({ data, location }) => {
  const elements_on_site = 9
  const [noOfElement, setNoOfElement] = useState(elements_on_site)

  const posts = data.allMarkdownRemark.nodes.slice(0, noOfElement)
  const allPostsLength = data.allMarkdownRemark.nodes.length

  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement)
  }
  const url = location.href
  return (
    <>
      <Seo title="Blog" />
      <div
        css={{
          position: "relative",
          overflow: "hidden",
          zIndex: "0",
          height: "11vh",
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
          justifyContent: "space-between",
          [s.md_middle]: {
            justifyContent: "center",
          },
        }}
      >
        <div
          css={{
            background: `url(${blogDeco})`,
            backgroundSize: "70px",
            width: 70,
            [s.md_middle]: {
              display: "none",
            },
          }}
        ></div>
        <div>
          <div css={description}>
            <h1>MAWA POLSKA BLOG</h1>
            <p>
              Zapraszamy do zapoznania się z naszymi nowściami ze świata
              najlepszych wieszaków!
            </p>
          </div>
          <div css={{ display: "flex", justifyContent: "center" }}>
            <section css={style.blogGrid}>
              {posts.map(post => {
                const title = post.frontmatter.title || post.fields.slug
                const image =
                  post.frontmatter.image.childImageSharp.fluid ||
                  post.fields.slug

                return (
                  <div css={style.articleWrapper}>
                    <div
                      css={{
                        width: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <Link to={"/blog" + post.fields.slug}>
                        <Img
                          fluid={image}
                          css={{
                            height: "230px !important",
                          }}
                        />
                      </Link>
                    </div>
                    <article
                      className="post-list-item"
                      itemScope
                      itemType="http://schema.org/Article"
                    >
                      <header>
                        <h2
                          css={{
                            fontSize: "24px",
                            margin: "10px 0px 0px 0px ",
                            display: "-webkit-box",
                            WebkitLineClamp: "2",
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            [s.md_only]: {
                              fontSize: "18px",
                            },
                          }}
                        >
                          <Link
                            to={"/blog" + post.fields.slug}
                            itemProp="url"
                            css={{
                              textDecoration: "none",
                              color: "#000",
                              ":visited": {
                                color: "#000",
                              },
                            }}
                          >
                            <span itemProp="headline">{title}</span>
                          </Link>
                        </h2>
                        <div
                          css={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 10,
                            gap: 10,
                          }}
                        >
                          <img
                            css={{ width: 16, height: 16 }}
                            src="https://img.icons8.com/android/24/000000/clock.png"
                            alt=""
                          />
                          <p
                            style={{
                              margin: 0,
                              [s.md_only]: { fontSize: "2px" },
                            }}
                          >
                            {post.frontmatter.date}
                          </p>
                        </div>
                      </header>
                      <section>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              post.frontmatter.description || post.excerpt,
                          }}
                          itemProp="description"
                          css={{
                            margin: "10px 0px 0px 0px ",
                            display: "-webkit-box",
                            WebkitLineClamp: "3",
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            [s.sm_down]: {
                              margin: "10px 0px 20px 0px ",
                            },
                          }}
                        />
                      </section>
                    </article>
                    <Link
                      to={"/blog" + post.fields.slug}
                      css={{
                        color: "#fff",
                        textDecoration: "none",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        [s.sm_down]: {
                          position: "unset",
                        },
                      }}
                    >
                      <div css={style.blogButton}>CZYTAJ WIĘCEJ</div>
                    </Link>
                  </div>
                )
              })}
            </section>
          </div>
          {allPostsLength > elements_on_site && allPostsLength > noOfElement && (
            <div
              css={{
                color: "#fff",
                textDecoration: "none",
                width: "100%",
                padding: "10px 0px 10px 0px",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                textAlign: "center",
                cursor: "pointer",
                marginBottom: "2rem",
              }}
              onClick={() => {
                loadMore()
              }}
            >
              ZAŁADUJ WIĘCEJ
            </div>
          )}
        </div>
        <div
          css={{
            background: `url(${blogDeco2})`,
            backgroundSize: "70px",
            width: 70,
            [s.md_middle]: {
              display: "none",
            },
          }}
        ></div>
      </div>
    </>
  )
}

export default BlogIndex
const style = {
  blogButton: {
    width: "100%",
    padding: "10px 0px 10px 0px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    textAlign: "center",
  },
  blogGrid: {
    display: "grid",
    gridTemplateColumns: "400px 400px 400px",
    gridTemplateRows: "450px",
    gap: "50px 10px",
    marginBottom: 50,
    [s.md_down]: {
      gridTemplateColumns: "300px 300px 300px",
      gridTemplateRows: "400px",
    },
    [s.sm_down]: {
      display: "inline-block",
      maxWidth: "960px",
      padding: "0px 20px",
    },
  },
  articleWrapper: {
    width: 400,
    height: 450,
    position: "relative",
    [s.md_down]: {
      width: 300,
      height: 400,
    },
    [s.sm_down]: {
      width: "100%",
      height: "auto",
      marginBottom: 50,
    },
  },
}
const description = {
  padding: "0px 10rem",

  h1: {
    textAlign: "center",
    fontSize: 32,
    paddingTop: "3rem",
    margin: 0,
    [s.sss]: {
      fontSize: "26px",
    },
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
