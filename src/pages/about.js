import React from 'react'
import { Link } from 'gatsby'

import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>

    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <Jumbotron fluid />

    <Container>

      <div className='about-contents'>
        <h1>老若男女問わず、患者様一人ひとりのお気持ちに寄り添います</h1>
        <div className='policy-content'>
          <figure>
            <Image className={'policy-img'} filename={'sample2.jpg'} alt={''} />
          </figure>
          <div className='policy-caption'>
            <p>業界歴10年のスタッフが、患者様一人ひとりのお悩みにお応えします</p>
            <p>歪んだ体・お顔に徹底アプローチ！</p>
            <p>長年の痛みや不調もお任せください◎</p>
            <p>当院では、小顔リフト矯正をはじめ、身体の土台や軸となる部分を矯正する施術も行っております。</p>
          </div>
        </div>
      </div>

    </Container>

  </Layout>
)

export default IndexPage
