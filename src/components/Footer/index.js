import React from 'react'
import { MDBIcon, MDBContainer } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

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
        <Col sm={6} className='pr-xl-5'>
          <Image className={'img rounded'} filename={'img-shop001.jpg'} alt={''} />
        </Col>
        <Col sm={6}>
          <Row>
            <Col>
              <Schedule />
              <Address />
              <div className='social-contents'>
                <MDBContainer>
                  <Row>
                    <Col sm={6} className='w-50'>
                      <div className='btn-line'>
                        <a href='https://line.me/R/ti/p/%40zgb4818u'>
                          <span>
                            <div className='line-icon' />
                            友だち追加
                          </span>
                        </a>
                      </div>
                    </Col>
                    <Col sm={6} className='my-1 w-25'>
                      <a className='ins-ic' href='https://www.instagram.com/fuseebisu2951/'>
                        <MDBIcon className='icon fa-2x' fab icon='instagram' />
                      </a>
                    </Col>
                  </Row>
                </MDBContainer>
              </div>
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
