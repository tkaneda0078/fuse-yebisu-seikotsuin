import React from 'react';
import Nav from 'react-bootstrap/Nav'

const Navbar = (props) => (
  <Nav className='navbar navbar-expand-lg navbar-light fixed-top py-3'>
    <div className='container'>
      <a className='navbar-brand js-scroll-trigger' href='#page-top'>{props.siteTitle}</a>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarResponsive'>
        <ul className='navbar-nav ml-auto my-2 my-lg-0'>
          <Nav.Item className='nav-item' as='li'>
            <a className='nav-link js-scroll-trigger' href='/about'>当院について</a>
          </Nav.Item>
          <Nav.Item className='nav-item' as='li'>
            <a className='nav-link js-scroll-trigger' href='/service'>施術内容</a>
          </Nav.Item>
          <Nav.Item className='nav-item' as='li'>
            <a className='nav-link js-scroll-trigger' href='/staff'>スタッフ</a>
          </Nav.Item>
          <Nav.Item className='nav-item' as='li'>
            <a className='nav-link js-scroll-trigger' href='/news'>お知らせ</a>
          </Nav.Item>
          <Nav.Item className='nav-item' as='li'>
            <a className='nav-link js-scroll-trigger' href='/question'>よくある質問</a>
          </Nav.Item>
          <Nav.Item className='nav-item' as='li'>
            <a className='nav-link js-scroll-trigger' href='/access'>アクセス</a>
          </Nav.Item>
        </ul>
      </div>
    </div>
  </Nav>
)

export default Navbar;
