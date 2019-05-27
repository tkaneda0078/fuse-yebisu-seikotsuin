import React from 'react'

import Nav from 'react-bootstrap/Nav'

// TODO: class化
const GlobalNav = () => (
  <Nav justify defaultActiveKey="/home" as="ul">
    <Nav.Item as="li">
      <Nav.Link href="/home">当院について</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link eventKey="link-2">ポリシー</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link eventKey="link-2">施術内容</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link eventKey="link-1">スタッフ紹介</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link eventKey="link-2">お知らせ</Nav.Link>
    </Nav.Item>
  </Nav>
)

export default GlobalNav