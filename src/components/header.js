import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  max-width: 100vw;
  top: 0;
  left: 0;
  margin: 0 auto;
  padding: 1rem;
  z-index: 20;
  background: var(--navbar);
  box-shadow: 0 0.5rem 2rem var(--shadow-color);
  -webkit-transition: background 0.2s ease-out;
  transition: background 0.2s ease-out;

  @media only screen and (max-width: 80em) {
    .jVnzUF {
      margin-right:4rem;
    }
  }
`

const StyledLink = styled(Link)`
  
`

const Header = ({ siteTitle }) => (
  <StyledNav>
    <StyledLink
      to="/"
      style={{
        color: `gray`,
        textDecoration: `none`,
      }}
     >
      {siteTitle}
    </StyledLink>
  </StyledNav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;