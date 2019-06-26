import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const GlobalNavbar = (props) => (
  <Navbar expand='lg'>
    <Navbar.Brand href='/' className='ml-md-5'>{props.siteTitle}</Navbar.Brand>
    <Navbar.Toggle aria-controls='navbar_responsive' />
    <Navbar.Collapse id='navbar_responsive'>
      <Nav className='nav my-2 pr-3 text-right ml-auto' as='ul'>
        <Nav.Item className='li' as='li'>
          <Nav.Link href='/about'>当院について</Nav.Link>
        </Nav.Item>
        <Nav.Item className='li' as='li'>
          <Nav.Link href='/first-time'>初めての方へ</Nav.Link>
        </Nav.Item>
        <Nav.Item className='li' as='li'>
          <Nav.Link href='/service'>施術内容</Nav.Link>
        </Nav.Item>
        <Nav.Item className='li' as='li'>
          <Nav.Link href='/staff'>スタッフ</Nav.Link>
        </Nav.Item>
        <Nav.Item className='li' as='li'>
          <Nav.Link href='/faq'>よくある質問</Nav.Link>
        </Nav.Item>
        <Nav.Item className='li' as='li'>
          <Nav.Link href='/access'>アクセス</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default GlobalNavbar