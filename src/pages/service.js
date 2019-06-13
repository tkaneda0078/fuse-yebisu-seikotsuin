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

      <div className='service-contents'>

        <div id='skeletal_correction' className='service'>
          <h2 className='mb-4 caption'>ゑびす式骨格矯正</h2>
          <div className='description mb-4'>
            <p className=''>ゑびす式骨格矯正のメリット</p>
            <ul>
              <li>当院の骨盤矯正は<span className='text-danger'>即効性のある矯正です。</span></li>
              <li><span className='text-danger'>たった一度の施術で驚くほどの効果を実感</span>することができます。</li>
              <li>ダイナミックな矯正スタイルですが、当院では80歳の方でも矯正を受けています。</li>
              <li><span className='text-danger'>産後の骨盤矯正にも絶大な効果を発揮</span>します。</li>
            </ul>
          </div>
          <figure>
            <Image className={'img mb-5'} filename={'service001.jpg'} alt={''} />
          </figure>
          <h4 className='mb-4 caption'>なぜ矯正をしなければいけないのか？</h4>
          <div className='description mb-4'>
            <p>骨盤と背骨は人間の根本的な土台です。</p>
            <p>この骨盤や背骨に歪みが生じることによりと全身に悪影響を及ぼし、症状となって出現します。</p>
            <p>また、骨盤は内臓の受け皿でもあるので、ゆがみを生じていれば、内臓の活動が落ち、免疫力や代謝の低下に繋がります。</p>
          </div>
          <figure>
            <Image className={'img mb-5'} filename={'service002.jpg'} alt={''} />
          </figure>
          <div className='description mb-4'>
            <p>逆に骨盤が正しい位置で安定すれば、内臓の活動が活発になり、免疫力や代謝が上がるので、</p>
            <p>それだけでダイエット効果もあり、健康な身体を手に入れることができます。</p>
            <p>また骨盤を直す前に、姿勢だけを正そうとして背筋を伸ばして胸を張り、</p>
            <p>腰が反り返ってしまう状態になっている人が多く、筋肉の痛みにつながっていることが多いのです。</p>
          </div>
          <figure>
            <Image className={'img mb-5'} filename={'service003.jpg'} alt={''} />
          </figure>
        </div> {/* service */}

        <div id='small_face_correction' className='service'>
          <h2 className='caption'>小顔リフト矯正</h2>
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
          <h2 className='caption'>たった20分で腹筋運動！Eトレ</h2>
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
