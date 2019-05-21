import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const News = () => (
  <Container className='news-contents'>
    <Row>
      <Col sm={3}>
        <div className='news-title'>
          <h2>nwes</h2>
        </div>
      </Col>
      <Col sm={9}>
        <ListGroup className='news-list' variant='flush'>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  </Container>
)

export default News