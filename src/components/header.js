import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div className="m-0 m-auto max-w-4xl"
      style={{ padding: `1.45rem 1.0875rem`, }}
    >
      <div className="float-left">
        <Link to="/">
          <h4 className="inline mr-4 floating-outline cursor-pointer">
            Name/Logo
          </h4>
        </Link>
      </div>
      <div className="float-right">
        <Link to="/about">
          <h4 className="inline mr-4 floating-outline cursor-pointer">
          about
          </h4>
        </Link>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/aaron-y-chan/">
          <h4 className="inline floating-outline cursor-pointer">
            contact
          </h4>
        </a>
      </div>
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
