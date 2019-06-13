import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from '../components/image'
import Container from 'react-bootstrap/Container'
import Layout from '../components/layout'
import SEO from '../components/seo'
import GoogleMap from '../components/GoogleMap'

const IndexPage = () => (
  <Layout>

    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />

    <Jumbotron fluid className='mb-5'>
      <Image className={'img'} filename={'img-point007.jpg'} alt={''} />
    </Jumbotron>


    <Container>

      <div className='access-contents mt-5'>

        <div className='caption'>
          <h1 className='mb-5 text-muted title'>アクセス</h1>
        </div>

        <GoogleMap />

        <div className='description ml-3'>
          <h5 className='text-muted font-weight-bold mb-3'>アクセス</h5>
          <p className='mb-5'>近鉄布施駅　北口（スターバックスコーヒー側）降りて徒歩2分</p>
          <h5 className='text-muted font-weight-bold mb-3'>最寄駅</h5>
          <p className='mb-5'>布施駅（98m）  小路駅(大阪メトロ)（670m）  新深江駅（870m）</p>
          <h5 className='text-muted font-weight-bold mb-3'>バス停</h5>
          <p className='mb-5'>布施駅前バス停（120m）</p>
        </div>

      </div> {/* access-contents */}

    </Container>

  </Layout>
)

export default IndexPage
