import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

import Layout from '../components/layout'
import SEO from '../components/seo'
import GoogleMap from '../components/GoogleMap'

const IndexPage = () => (
  <Layout>

    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <Jumbotron fluid />

    <Container>

      <div className='access-contents'>

        <div className='ml-3'>
          <h3>大阪府東大阪市長堂1丁目2-9</h3>
          <p className='h5 font-weight-bold'>アクセス</p>
          <p className=''>近鉄布施駅　北口（スターバックスコーヒー側）降りて徒歩2分</p>
          <p className='h5 font-weight-bold'>最寄駅</p>
          <p className=''>布施駅（98m）  小路駅(大阪メトロ)（670m）  新深江駅（870m）</p>
          <p className='h5 font-weight-bold'>バス停</p>
          <p className=''>布施駅前バス停（120m）</p>
        </div>

        <GoogleMap />

      </div> {/* access-contents */}

    </Container>

  </Layout>
)

export default IndexPage
