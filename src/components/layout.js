/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          height: `85vh`,
          margin: `0 auto`,
          maxWidth: 960,
          padding: `6.3rem 1.0875rem 1.45rem`,
        }}
      >
        <main
          style={{
            minHeight: `80vh`,
            margin: `0 1rem`
          }}
        >{children}</main>
        <footer
          style={{
            color: `white`,
            marginBottom: `0.5rem`
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a
            style={{
              color: `white`
            }}
            href="https://www.gatsbyjs.org"
          >
            Gatsby
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
