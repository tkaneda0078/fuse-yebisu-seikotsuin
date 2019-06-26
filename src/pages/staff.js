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

    <SEO title='スタッフ' keywords={[`スタッフ`, `整骨院`, `布施`]} />

    <Jumbotron fluid>
      <Image className={'img'} filename={'img-point007.jpg'} alt={''} />
    </Jumbotron>

    <Container>

      <div className='staff-contents'>

        <h1 className='h1 my-5 text-color'>スタッフ</h1>

        <div className='profile'>
          <div className='description text-left'>
            <h2 className='name'>金田　俊行</h2>
            <p className='mb-5'>院長（業界歴 10年）</p>
            <div className='text-muted mb-4'>
              <h6 className='mb-0 font-weight-bold'>得意なこと</h6>
              <p>施術全般お任せください。頭重感もご相談ください。</p>
              <h6 className='mb-0 font-weight-bold'>趣味・マイブーム</h6>
              <p>ゴルフはじめました！！</p>
            </div>
            <p className='h2 mb-4 font-weight-bold'>YES！！！ゑびす整骨院</p>
            <div className='text-justify mb-4'>
              <p className='mb-0'>布施で一番「笑顔」が多い整骨院を作ります！</p>
              <p className='mb-0'>この業界で約10年勤め多くの方に支えられ、この度自身のゑびす整骨院を開院することが出来ました。</p>
              <p className='mb-0'>当院に来られる方は皆さん一緒ではありません。一人ひとりに耳と心を傾け、どうしたら解決できるのか一緒に考えましょう。</p>
              <p className='mb-0'>そして、解決したときに一緒に喜べる環境を作ります！それが私の願う「笑顔」です。どんなことでも必ずご相談ください。</p>
              <p className='mb-0'>一緒に頑張りましょう！</p>
            </div>
          </div>
          <div className='img-wrap'>
            <Image className={'img'} filename={'staff001.jpg'} alt={''} />
          </div>
          <Row className='mt-5 mb-5'>
            <Col md={{ span: 3, offset: 0 }} className='second mb-5'>
              <Image className={'img second-img'} filename={'staff001_002.jpg'} alt={''} />
            </Col>
            <Col md={{ span: 7, offset: 1 }} className='third mb-5 mt-4'>
              <Row>
                <Col sm={5} className='mb-4'>
                  <Image className={'img third-img'} filename={'staff001_001.jpg'} alt={''} />
                </Col>
                <Col sm={7}>
                  <div className='sub-description text-left'>
                    <h6 className='font-weight-bold'>経歴</h6>
                    <p className='mb-0'>学生時代をアメリカンフットボールに情熱を注ぎこみ、高校時代に全国制覇。大学時代には関西1部リーグ3位を経験。</p>
                    <p className='mb-0'>その後、サラリーマンの傍ら高校生や大学のコーチを勤める。その後、脱サラし10年の修行を積み開業！！</p>
                    <p className='mb-0'>アメフト日本一の経験から登りつめるための身体づくり・身体のケア・メンタル術を知り尽くし、そのノウハウを一般の方でもわかりやすくかつ実践できる【ゑびすメソッド】を作り上げ、このゑびす整骨院で伝えている。</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div> {/* profile */}

        <div className='profile'>
          <div className='description text-left'>
            <h2 className='name'>池田 大典</h2>
            <p className='mb-5'>仕事人（業界歴 7年）</p>
            <div className='text-muted mb-4'>
              <h6 className='mb-0 font-weight-bold'>得意なこと</h6>
              <p>40肩のスペシャリスト</p>
              <h6 className='mb-0 font-weight-bold'>趣味・マイブーム</h6>
              <p className='mb-0'>肩いじり</p>
              <p className='mb-0'>肩のことならお任せください！！！肩だけですよ！！！肩以外はできません！！！冗談です！</p>
              <p className='mb-0'>多くの方に笑顔を届けて楽しい明日に！！！肩以外でも、どんなことでもご相談ください。</p>
            </div>
          </div>
          <div className='img-wrap'>
            <Image className={'img'} filename={'staff002.jpg'} alt={''} />
          </div>
          <Row className='mt-5 mb-5'>
            <Col md={{ span: 3, offset: 0 }} className='second mb-5'>
              <Image className={'img second-img'} filename={'staff002_001.jpg'} alt={''} />
            </Col>
            <Col md={{ span: 7, offset: 1 }} className='third mb-5'>
              <Row>
                <Col sm={5} className='mb-4'>
                  <Image className={'img third-img'} filename={'staff002.jpg'} alt={''} />
                </Col>
                <Col sm={7}>
                  <div className='sub-description text-left'>
                    <h6 className='font-weight-bold'>経歴</h6>
                    <p className='mb-0'>学生時代をアメリカンフットボールに情熱を注ぎこみ、高校時代に全国制覇。大学時代には関西1部リーグ3位を経験。</p>
                    <p className='mb-0'>その後、サラリーマンの傍ら高校生や大学のコーチを勤める。その後、脱サラし10年の修行を積み開業！！</p>
                    <p className='mb-0'>アメフト日本一の経験から登りつめるための身体づくり・身体のケア・メンタル術を知り尽くし、そのノウハウを一般の方でもわかりやすくかつ実践できる【ゑびすメソッド】を作り上げ、このゑびす整骨院で伝えている。</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div> {/* profile */}

        <div className='profile'>
          <div className='description text-left'>
            <h2 className='name'>石神 良太</h2>
            <p className='mb-5'>柔道整復師・鍼灸師（業界歴 10年）</p>
            <div className='text-muted mb-4'>
              <h6 className='mb-0 font-weight-bold'>得意なこと</h6>
              <p>腰痛・美容鍼</p>
              <h6 className='mb-0 font-weight-bold'>趣味・マイブーム</h6>
              <p>ゴルフ</p>
            </div>
            <div className='text-justify mb-4'>
              <p className='mb-0'>はじめまして、石神です。</p>
              <p className='mb-0'>皆さまひとり1人の悩みを一緒に笑顔に変えていきましょう！！！</p>
              <p className='mb-0'>笑顔で過ごせるサポートを心掛けていきます！</p>
            </div>
          </div>
          <div className='img-wrap'>
            <Image className={'img'} filename={'staff003.jpg'} alt={''} />
          </div>
          <Row className='mt-5 mb-5'>
            <Col md={{ span: 3, offset: 0 }} className='second mb-5'>
              <Image className={'img second-img'} filename={'staff003_001.jpg'} alt={''} />
            </Col>
            <Col md={{ span: 7, offset: 1 }} className='third mb-5'>
              <Row>
                <Col sm={5} className='mb-4'>
                  <Image className={'img third-img'} filename={'staff003.jpg'} alt={''} />
                </Col>
                <Col sm={7}>
                  <div className='sub-description text-left'>
                    <h6 className='font-weight-bold'>経歴</h6>
                    <p className='mb-0'>学生時代をアメリカンフットボールに情熱を注ぎこみ、高校時代に全国制覇。大学時代には関西1部リーグ3位を経験。</p>
                    <p className='mb-0'>その後、サラリーマンの傍ら高校生や大学のコーチを勤める。その後、脱サラし10年の修行を積み開業！！</p>
                    <p className='mb-0'>アメフト日本一の経験から登りつめるための身体づくり・身体のケア・メンタル術を知り尽くし、そのノウハウを一般の方でもわかりやすくかつ実践できる【ゑびすメソッド】を作り上げ、このゑびす整骨院で伝えている。</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div> {/* profile */}

        <div className='img-list'>
          <Row>
            <Col sm={3} className='mb-3'>
              <Image className={'img'} filename={'staff-all001.jpg'} alt={''} />
            </Col>
            <Col sm={6} className='mb-3'>
              <Image className={'img'} filename={'staff-all003.jpg'} alt={''} />
            </Col>
            <Col sm={3} className='mb-3'>
              <Image className={'img'} filename={'staff-all002.jpg'} alt={''} />
            </Col>
          </Row>
        </div> {/* img-list */}

      </div> {/* staff-contents */}

    </Container>

  </Layout>
)

export default IndexPage
