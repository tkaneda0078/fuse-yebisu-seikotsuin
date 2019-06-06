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
    <Jumbotron fluid />

    <Container>

      <div className='staff-contents'>

        <div className='profile'>
          <div className='img-wrap'>
            <Image className={'img'} filename={'sample2.jpg'} alt={''} />
          </div>
          <div className='description mt-4'>
            <h2>金田　俊行</h2>
            <h4 className='mb-5'>院長</h4>
            <div className='text-muted'>
              <p className='mb-0 font-weight-bold'>得意なこと</p>
              <p>施術全般お任せください。頭重感もご相談ください。</p>
              <p className='mb-0 font-weight-bold'>趣味・マイブーム</p>
              <p>ゴルフ</p>
            </div>
          </div>
          <div className='sub-description mt-5 text-left'>
            <p className='h2 mb-4 font-weight-bold'>“YES！！！ゑびす整骨院“</p>
            <div className='text-justify'>
              <p className='mb-0'>
                はじめました！！布施で一番【笑顔】が多い整骨院を作ります！！この業界で約10年勤め多くの方に支えられ、
                この度自身のゑびす整骨院を開院することが出来ました。
              </p>
              <p className='mb-0'>
                院に来られる方は皆さん一緒ではありません。一人ひとりに耳と心を傾け、どうしたら解決できるのか一緒に考えましょう。
              </p>
              <p className='mb-0'>
                そして解決したときに一緒に喜べる環境を作ります！
                それが私の願う【笑顔】です。どんなことでも必ずご相談ください。一緒に頑張りましょう！
              </p>
            </div>
          </div>
        </div> {/* profile */}

        <div className='profile'>
          <div className='img-wrap'>
            <Image className={'img'} filename={'sample2.jpg'} alt={''} />
          </div>
          <div className='description mt-4'>
            <h2>池田　大典</h2>
            <h4 className='mb-5'>仕事人</h4>
            <div className='text-muted'>
              <p className='mb-0 font-weight-bold'>得意なこと</p>
              <p>40肩のスペシャリスト</p>
              <p className='mb-0 font-weight-bold'>趣味・マイブーム</p>
              <p>肩いじり</p>
            </div>
          </div>
          <div className='sub-description mt-5 text-left'>
            <p className='h2 mb-4 font-weight-bold'>“ 今日を愛する、ゑびす“</p>
            <div className='text-justify'>
              <p className='mb-0'>
                肩のことならお任せください！！！肩だけですよ！！！
              </p>
              <p className='mb-0'>
                肩以外はできません！！！冗談です！
              </p>
              <p className='mb-0'>
                多くの方に笑顔を届けて楽しい明日に！！！
                肩以外でも、どんなことでもご相談ください。
              </p>
            </div>
          </div>
        </div> {/* profile */}

        <div className='profile'>
          <div className='img-wrap'>
            <Image className={'img'} filename={'sample2.jpg'} alt={''} />
          </div>
          <div className='description mt-4'>
            <h2>石神　良太</h2>
            <h4 className='mb-5'>柔道整復師・鍼灸師</h4>
            <div className='text-muted'>
              <p className='mb-0 font-weight-bold'>得意なこと</p>
              <p>腰痛・美容鍼</p>
              <p className='mb-0 font-weight-bold'>趣味・マイブーム</p>
              <p>ゴルフ</p>
            </div>
          </div>
          <div className='sub-description mt-5 text-left'>
            <p className='h2 mb-4 font-weight-bold'>“YES！！！ゑびす整骨院“</p>
            <div className='text-justify'>
              <p className='mb-0'>
                はじめまして、石神です。
              </p>
              <p className='mb-0'>
                皆さまひとり1人の悩みを一緒に笑顔に！！！笑顔で過ごせるサポートをしていきます！
              </p>
            </div>
          </div>
        </div> {/* profile */}

        <div className='img-list'>
          <Row>
            <Col sm={3} className='mb-3'>
              <Image className={'img'} filename={'sample2.jpg'} alt={''} />
            </Col>
            <Col sm={6} className='mb-3'>
              <Image className={'img'} filename={'sample2.jpg'} alt={''} />
            </Col>
            <Col sm={3} className='mb-3'>
              <Image className={'img'} filename={'sample2.jpg'} alt={''} />
            </Col>
          </Row>
        </div> {/* img-list */}

      </div> {/* staff-contents */}

    </Container>

  </Layout>
)

export default IndexPage
