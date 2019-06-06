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

      <div className='service-contents'>

        <div className='service'>
          <h3>骨盤などの矯正（単発）</h3>
          <Row>
            <Col xs={12} md={8} className='mb-3'>
              <Image className={'img'} filename={'sample2.jpg'} alt={''} />
            </Col>
            <Col xs={12} md={4} className='mb-3'>
              <Image className={'img'} filename={'sample2.jpg'} alt={''} />
            </Col>
          </Row>
          <div className='description mt-4'>
            <p>新規で来られた方は、ほぼ全員と言っていいほど利用されている人気メニュー！</p>
            <p>「体の歪みは、不調のもと」と言われるほど骨格や骨盤が歪んでいると、身体に様々な影響を及ぼします。</p>
            <p>痛みを長引かせないためにも、歪んだ体をしっかり整えていき、凝り固まった筋肉もほぐしてきましょう。</p>
            <p>（痛みのような症状を改善へと導くのはもちろん、美容やダイエットにも効果的です！）</p>
            <p className='text-right'>1回： 2,000円</p>
            <p className='text-right'>1か月（30日間）受け放題： 5,400円</p>
            <p className='text-right'>（２回目以降から受け放題はご利用できます！）</p>
          </div>
        </div> {/* service */}

        <div className='service'>
          <h3>小顔リフト矯正</h3>
          <Row>
            <Col xs={12} md={4} className='mb-3'>
              <Image className={'img'} filename={'sample2.jpg'} alt={''} />
            </Col>
            <Col xs={12} md={4} className='mb-3'>
              <Image className={'img'} filename={'sample2.jpg'} alt={''} />
            </Col>
            <Col xs={12} md={4} className='mb-3'>
              <Image className={'img'} filename={'sample2.jpg'} alt={''} />
            </Col>
          </Row>
          <div className='description mt-4'>
            <p>ソフトな施術でエステを受けているような感覚！！</p>
            <p>お得な回数券もご用意しています！</p>
            <p>6／14よりスタートしリピーターが増えて、施術結果に満足していただける方も多くいらっしゃいます。</p>
            <p>患者様から「施術は痛い？」と聞かれることが多くあるのですが、「ほとんど痛みはないですよ」とお答えしています。</p>
            <p>また、受けていただいた方からも、「気持ちいい」や「スッキリした」というお言葉をいただくことが多いです。</p>
            <p className='text-right'>1回： 2,700円</p>
            <p className='text-right'>回数券（10回分）：　23,000円</p>
            <p className='text-right'>（約2回分もお得！）</p>
          </div>
        </div> {/* service */}

        <div className='service'>
          <h3>たった20分で腹筋運動！Eトレ</h3>
          <Row>
            <Col xs={6} md={6} className='mb-3'>
              <Image className={'img'} filename={'sample2.jpg'} alt={''} />
            </Col>
            <Col xs={6} md={6} className='mb-3'>
              <Image className={'img'} filename={'sample2.jpg'} alt={''} />
            </Col>
          </Row>
          <div className='description mt-4'>
            <p>ベッドに20分横になっているだけで腹筋運動6,000回！！</p>
            <p>普通では鍛えることが出来ないインナーマッスルをピンポイントで鍛えることが出来る！</p>
            <p>ほかにもシェイプアップモードや筋トレモードもご準備しています！</p>
            <p className='text-right'>価格2,700円 (税込)</p>
          </div>
        </div> {/* service */}

        <h5>【重要】自賠責保険の適用に関するご注意</h5>
        <div className='ml-3'>
          <p className='mb-0'><small className='text-muted'>施術者が保険会社に提出した証明書及び費用明細（レセプト）の内容に誤りがあった場合、</small></p>
          <p><small className='text-muted'>自賠責保険金の詐取として法的に罰せられることがありますので、 念のため施術を受けるご本人でもこれらの情報をご確認下さい。</small></p>
        </div>

      </div> {/* service-contents */}

    </Container>

  </Layout>
)

export default IndexPage
