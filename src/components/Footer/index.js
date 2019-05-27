import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GlobalNav from '../GlobalNav'
import Schedule from '../Schedule'
import Address from '../Address'
import Image from '../image'

const Footer = () => (
  <footer className='footer navbar-fixed-bottom'>
    <Container>
      <GlobalNav />
      <Row>
        <Col>
          <Image className={'footer-img rounded'} filename={'sample2.jpg'} alt={''} />
        </Col>
        <Col>
          <Row>
            <Col>
              <Schedule />
              <Address />
              <p>リラク・ボディケア 接骨・整骨 整体 健康・美容サービスその他</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className='text-center mt-5'>
        <p>© {new Date().getFullYear()}, Built with<a href='www.devbutze.com'>DevButze</a> </p>
      </div>
    </Container>
  </footer>
)

export default Footer
