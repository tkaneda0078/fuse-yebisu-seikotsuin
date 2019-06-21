import React from 'react'
import Nav from 'react-bootstrap/Nav'

const Navbar = (props) => (
  <Nav className='nav navbar navbar-expand-lg navbar-light fixed-top py-3'>
    <div className='container'>
      <a className='navbar-brand js-scroll-trigger' href='/'>{props.siteTitle}</a>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarResponsive'>
        <ul className='navbar-nav ml-auto my-2 my-lg-0'>
          <Nav.Item className='nav-item' as='li'>
            <Nav.Link href='/about' className='js-scroll-trigger'>当院について</Nav.Link>
          </Nav.Item>
          <Nav.Item className='nav-item' as='li'>
            <Nav.Link href='/first-time' className='js-scroll-trigger'>初めての方へ</Nav.Link>
          </Nav.Item>
          <Nav.Item className='nav-item' as='li'>
            <Nav.Link href='/service' className='js-scroll-trigger'>施術内容</Nav.Link>
          </Nav.Item>
          <Nav.Item className='nav-item' as='li'>
            <Nav.Link href='/staff' className='js-scroll-trigger'>スタッフ</Nav.Link>
          </Nav.Item>
          <Nav.Item className='nav-item' as='li'>
            <Nav.Link href='/faq' className='js-scroll-trigger'>よくある質問</Nav.Link>
          </Nav.Item>
          <Nav.Item className='nav-item' as='li'>
            <Nav.Link href='/access' className='js-scroll-trigger'>アクセス</Nav.Link>
          </Nav.Item>
        </ul>
      </div>
    </div>
  </Nav>
)

export default Navbar
