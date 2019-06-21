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

    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />

    <Jumbotron fluid className='mb-5'>
      <Image className={'img'} filename={'img-point007.jpg'} alt={''} />
    </Jumbotron>

    <Container>

      <div className='first-time-contents'>

        <h1 className='h1 mb-5 text-color'>初めての方へ</h1>

        <div className='description mb-5'>
          <p>はじめて当院をご利用いただく方へ、ご来院から順に流れをご説明いたします。</p>
        </div>

        <Row className='my-5'>
          <Col sm={6}>
            <figure>
              <Image className={'img'} filename={'first-time001.jpg'} alt={''} />
            </figure>
          </Col>
          <Col sm={6}>
            <div className='description mt-4'>
              <h5 className='text-color mb-4'>受付</h5>
              <div className='ml-3'>
                <p>来院されましたら保険証を提示していただきます。</p>
                <p>問診票のご記入をお願い致します。</p>
              </div>
            </div>
          </Col>
        </Row>
        <div className='text-center'>
          <i className='icon fas fa-angle-double-down fa-3x' />
        </div>
        <Row className='my-5'>
          <Col sm={6}>
            <figure>
              <Image className={'img'} filename={'first-time002.jpg'} alt={''} />
            </figure>
          </Col>
          <Col sm={6}>
            <div className='description mt-4'>
              <h5 className='text-color mb-4'>問診・検査・姿勢のチェック</h5>
              <div className='ml-3'>
                <p>問診票を元にカラダの不調がでている箇所や日頃の生活習慣、痛みなどをお伺いして姿勢のチェック、検査などを行います。</p>
              </div>
            </div>
          </Col>
        </Row>
        <div className='text-center'>
          <i className='icon fas fa-angle-double-down fa-3x' />
        </div>
        <Row className='my-5'>
          <Col sm={6}>
            <figure>
              <Image className={'img'} filename={'first-time003.jpg'} alt={''} />
            </figure>
          </Col>
          <Col sm={6}>
            <div className='description mt-4'>
              <h5 className='text-color mb-4'>施術</h5>
              <div className='ml-3'>
                <p>問診で分かった症状の原因である場所にアプローチしつつお身体の状態を整えます。</p>
                <p>説明をさせていただき納得していただいて、症状に合った施術をしていきます。</p>
              </div>
            </div>
          </Col>
        </Row>
        <div className='text-center'>
          <i className='icon fas fa-angle-double-down fa-3x' />
        </div>
        <Row className='my-5'>
          <Col sm={6}>
            <figure>
              <Image className={'img'} filename={'first-time004.jpg'} alt={''} />
            </figure>
          </Col>
          <Col sm={6}>
            <div className='description mt-4'>
              <h5 className='text-color mb-4'>施術後のカウンセリング</h5>
              <div className='ml-3'>
                <p>施術後の状態を確認していただきます。</p>
                <p>今後の治療計画などを決め来院ペースなどを話し合います。</p>
                <p>また、プライベートでの注意点アドバイスをお伝えします。</p>
              </div>
            </div>
          </Col>
        </Row>
        <div className='text-center'>
          <i className='icon fas fa-angle-double-down fa-3x' />
        </div>
        <div className='description mt-4'>
          <h5 className='text-color mb-4'>お会計・次回のご予約</h5>
          <div className='ml-3'>
            <p>お会計をして次回のご予約をお取りいただいて終わりになります。</p>
          </div>
        </div>

      </div> {/* first-time-contents */}

    </Container>

  </Layout>
)

export default IndexPage
