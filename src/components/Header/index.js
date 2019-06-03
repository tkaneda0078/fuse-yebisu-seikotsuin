import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Navbar from '../Navbar'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      siteTitle: props.siteTitle,
      currentPosition: 0,
      headerClass: 'header hidden'
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', event => this.watchCurrentPosition(), true)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll')
  }

  scrollTop() {
    return Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop);
  }

  /**
   * 現在位置を見る
   * スクロール位置が10より大きい場合header背景色を変更する
   */
  watchCurrentPosition() {
    if (this.scrollTop() > 10) {
      this.setState({ headerClass: 'header' })
    } else {
      this.setState({ headerClass: 'header hidden' })
    }
  }

  render() {
    return (
      <header className={this.state.headerClass}>
        <Navbar siteTitle={this.state.siteTitle} />
      </header>
    )
  }

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
