import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from '../image'
import Figure from 'react-bootstrap/Figure'

class Staff extends Component {
  constructor() {
    super();
    this.state = {
      profiles: [
        {
          name: '金田　俊行',
          position: '院長',
          image: 'sample2.jpg'
        },
        {
          name: '池田　大典',
          position: '仕事人',
          image: 'sample2.jpg'
        },
        {
          name: '石神　良太',
          position: '柔道整復師・鍼灸師',
          image: 'sample2.jpg'
        }
      ]
    };
  }

  render() {
    return (
      <Container className='staff-contents'>
        <Row>
          {
            this.state.profiles.map(profile => (
              <Col className='text-center'>
                <Figure>
                  <Image className={'staff-img img-circle'} filename={profile.image} alt={''} />
                  <Figure.Caption className='text-center mt-3'>
                    <h4>
                      <p className='mb-2'>{profile.position}</p>
                      <p>{profile.name}</p>
                    </h4>
                  </Figure.Caption>
                </Figure>
              </Col>
            ))
          }
        </Row>
      </Container>
    )
  }

}

export default Staff