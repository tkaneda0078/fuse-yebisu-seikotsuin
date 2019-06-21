import React from 'react'
import { Link } from 'gatsby'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from '../image'

const Faq = (props) => (
  <Container>
    <ListGroup variant='flush'>
      {
        props.faqData.map((data, i) => {
          let pointLeft = 12,
            pointRight = 12;
          if (data.img || data.url) {
            pointLeft = 7;
            pointRight = 5;
          }
          return <ListGroup.Item key={i}>
            <div className='faq-content'>
              <Row className='mb-5'>
                <Col sm={pointLeft}>
                  <Row>
                    <Col>
                      <div className='question'>
                        <i className='fab fa-quora fa-2x' />
                        <p className='ml-4'>{data.question}</p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className='answer'>
                        <i className='fa fa-font fa-2x' />
                        <p className='ml-4'>{data.answer}</p>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col sm={pointRight}>
                  {data.img && <Image className={'img'} filename={data.img} alt={''} />}
                  {data.url && <Link className='btn btn-outline-info w-100 btn-postion mt-3' to={data.url}>{data.linkTitle}</Link>}
                </Col>
              </Row>
            </div>
          </ListGroup.Item>
        })
      }
    </ListGroup>
  </Container>
)

export default Faq