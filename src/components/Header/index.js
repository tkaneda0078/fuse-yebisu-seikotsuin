import PropTypes from 'prop-types'
import React from 'react'

import Navbar from '../Navbar'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Header = (props) => (
  <header>
    <Navbar siteTitle={props.siteTitle}/>
    <Jumbotron fluid />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
