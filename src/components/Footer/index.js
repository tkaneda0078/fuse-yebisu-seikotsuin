import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GlobalNav from '../GlobalNav'
import Schedule from '../Schedule'
import Address from '../Address'

const Footer = () => (
  <footer className='navbar-fixed-bottom'>
    <Container>
      <GlobalNav />
      <Row>
        <Col>
          <Schedule />
        </Col>
        <Col>
          <Address />
          <p>リラク・ボディケア 接骨・整骨 整体 健康・美容サービスその他</p>
        </Col>
      </Row>
    </Container>
    <div className='text-center'>
      <p>© {new Date().getFullYear()}, Built with<a href='www.devbutze.com'>DevButze</a> </p>
    </div>
  </footer>
)

export default Footer
