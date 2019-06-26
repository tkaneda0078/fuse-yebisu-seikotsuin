import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>

    <SEO title='当院について' keywords={[`整骨院`, `当院について`, `布施`]} />

    <Jumbotron fluid>
      <Image className={'img'} filename={'img-point006.jpg'} alt={''} />
    </Jumbotron>

    <Container>

      <div className='about-contents'>

        <h1 className='h1 my-5 text-color'>当院について</h1>

        <div className='caption mb-5'>
          <p className='h4'>老若男女問わず</p><br />
          <p className='h4'>患者様一人ひとりのお気持ちに寄り添います。</p>
        </div>

        <div className='policy-content'>
          <figure>
            <Image className={'img'} filename={'service001.jpg'} alt={''} />
          </figure>
          <div className='description'>
            <p>業界歴10年のスタッフが、患者様一人ひとりのお悩みにお応えします。</p>
            <p>身体の軸や土台となる箇所の矯正施術、歪んだ体・お顔に徹底アプローチします。</p>
            <p>長年の痛みや不調もお任せください。</p>
            <p>当院では、小顔リフト矯正をはじめ、身体の土台や軸となる部分を矯正する施術も行っております。</p>
          </div>
        </div>

        <Container className='image-contents'>
          <Row>
            <Col>
              <Image className={'big-img'} filename={'img-shop001.jpg'} alt={''} />
            </Col>
          </Row>
        </Container>

        <div className='concept-contents'>
          <div className='concept mb-5'>
            <figure>
              <Image className={'img'} filename={'img-point006.jpg'} alt={''} />
            </figure>
            <div className='description'>
              <h4 className='mb-4'>布施で一番【笑顔】が多い整骨院</h4>
              <p>この業界に勤めて約10年。有難いことに、これまでたくさんの方々に支えられ「布施　ゑびす整骨院」を開院することができました。</p>
              <p>地域の皆様が元気な体で、笑顔あふれる生活をお送りできますよう、精一杯サポートさせていただきます。</p>
              <p>些細なことでも構いません。体に気になることがございましたら、何なりとご相談ください。</p>
            </div>
          </div>

          <div className='concept mb-5'>
            <figure>
              <Image className={'img'} filename={'img-shop002.jpg'} alt={''} />
            </figure>
            <div className='description'>
              <h4 className='mb-4'>ホッと一息つける温かみのある院内</h4>
              <p>院内は、白と緑を基調とした清潔感あふれる空間となっています。また、開放感のある広々とした院内で、初めてご来院される方も女性の方もリラックスしてお過ごしいただけます。</p>
              <p>心も体も落ち着ける環境を整えていますので、気を楽にしてお越しください。</p>
            </div>
          </div>
        </div> {/* concept-contents */}

        <Container className='image-contents'>
          <Row>
            <Col sm={8} className='mb-3'>
              <Image className={'img'} filename={'img-point004.jpg'} alt={''} />
            </Col>
            <Col sm={4} className='mb-3'>
              <Image className={'img'} filename={'img-point003.jpg'} alt={''} />
            </Col>
          </Row>
        </Container>

      </div>

    </Container>

  </Layout>
)

export default IndexPage
