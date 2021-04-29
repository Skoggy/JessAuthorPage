import * as React from "react"
import PropTypes from "prop-types"

import styled from 'styled-components';
import Nav from './Nav';




const Header = ({ siteTitle }) => (
  <header>

    <Nav />
    <div>
      <h1>
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
