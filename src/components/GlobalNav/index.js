import React from 'react'

import Nav from 'react-bootstrap/Nav'

// TODO: class化
const GlobalNav = () => (
  <Nav justify as='ul' className='mx-1'>
    <Nav.Item as='li'>
      <Nav.Link href='/about'>当院について</Nav.Link>
    </Nav.Item>
    <Nav.Item as='li'>
      <Nav.Link href='/service'>施術内容</Nav.Link>
    </Nav.Item>
    <Nav.Item as='li'>
      <Nav.Link href='/staff'>スタッフ</Nav.Link>
    </Nav.Item>
    <Nav.Item as='li'>
      <Nav.Link href='/first-time'>初めての方へ</Nav.Link>
    </Nav.Item>
    <Nav.Item as='li'>
      <Nav.Link href='/faq'>よくある質問</Nav.Link>
    </Nav.Item>
    <Nav.Item as='li'>
      <Nav.Link href='/access'>アクセス</Nav.Link>
    </Nav.Item>
  </Nav>
)

export default GlobalNav