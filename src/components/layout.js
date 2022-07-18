import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import CookieConstants from "../components/cookiesConsent/cookiesConsent"

const getWithExpiry = () => {
  const itemStr = localStorage.getItem("jdc_consent")
  if (!itemStr) {
    return
  }
  const item = JSON.parse(itemStr)
  const now = new Date()
  if (now.getTime() > item.expiry) {
    localStorage.removeItem("jdc_consent")
    return console.log("Your consent expire")
  }
  return
}

const Layout = ({ children }) => {
  getWithExpiry()
  const [cookieConsent, setCookieConsent] = useState(
    localStorage.getItem("jdc_consent")
  )
  console.log(cookieConsent)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        {cookieConsent === null && (
          <CookieConstants setCookieConsent={setCookieConsent} />
        )}
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
