import PropTypes from 'prop-types'
import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'

const Header = () => (
  <header>
    <Jumbotron fluid>
      <div className='container'>
        <h1 className='display-4'>Fluid jumbotron</h1>
        <p className='lead'>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </Jumbotron>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
