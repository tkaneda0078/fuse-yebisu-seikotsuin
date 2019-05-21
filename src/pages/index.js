import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <div className='main-contents'>
      <figure className='main-img'>
        <Image className={'img'} filename={'sample2.jpg'} alt={''} />
      </figure>
      <div className='main-txt'>
        <h2>title</h2>
        <p>This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.</p>
      </div>
    </div>
    <div>
      <CardGroup>
        <Card className='rounded'>
          <Image className={'card-img rounded'} filename={'sample2.jpg'} alt={''} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className='rounded'>
          <Image className={'card-img rounded'} filename={'sample2.jpg'} alt={''} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className='rounded'>
          <Image className={'card-img rounded'} filename={'sample2.jpg'} alt={''} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  </Layout>
)

export default IndexPage
