import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from '../image'

const Staff = () => (
  <Container className='staff-contents' fluid>
    <Row>
      <Col>
        <Image className={'staff-img img-circle'} filename={'sample2.jpg'} alt={''} />
      </Col>
      <Col>
        <Image className={'staff-img'} filename={'sample2.jpg'} alt={''} />
      </Col>
      <Col>
        <Image className={'staff-img'} filename={'sample2.jpg'} alt={''} />
      </Col>
    </Row>
  </Container>
)

export default Staff