import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#1f1c1c`,
      WebkitBoxShadow: `0px 2px 5px 0px rgba(30, 47, 31, 1)`,
      MozBoxShadow: `0px 2px 5px 0px rgba(30, 47, 31, 1)`,
      boxShadow: `0px 2px 5px 0px rgba(30, 47, 31, 1)`,
      color: `white`,
      height: `5.35rem`,
      marginBottom: `1.45rem`,
      position: `fixed`,
      textAlign: `center`,
      width: `100vw`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
