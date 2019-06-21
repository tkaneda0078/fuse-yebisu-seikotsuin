import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import SkeletalCorrection from '../components/Service/skeletalCorrection'
import SmallFaceCorrection from '../components/Service/smallFaceCorrection'
import ETraining from '../components/Service/eTraining'
import TrafficAccidentMedicalTreatment from '../components/Service/trafficAccidentMedicalTreatment'

const IndexPage = () => (
  <Layout>

    <SEO title='施術内容' keywords={[`gatsby`, `application`, `react`]} />

    <Jumbotron fluid className='mb-5'>
      <Image className={'img'} filename={'img-point007.jpg'} alt={''} />
    </Jumbotron>

    <Container>

      <div className='service-contents'>

        <h1 className='h1 mb-5 text-color'>施術内容</h1>

        <div className='medical-care-content'>
          <h4 className='mb-4 caption text-muted'>保険診療</h4>
          <figure>
            <Image className={'img'} filename={'service007.jpg'} alt={''} />
          </figure>
          <div className='description mb-5'>
            <p>姿勢のズレや歪みなどで生じた筋肉の硬さや筋肉の傷つきでできた硬さをほぐします。</p>
            <p>筋肉をほぐすことにより関節の可動域低下や痛みの原因である痛みを改善していきます。</p>
            <p>ストレッチや運動療法も加えながらの手技治療になります。</p>
          </div>
          <CardGroup>
            <Card border='light' className='rounded'>
              <Card.Body>
                <Card.Title className='text-center mb-3 text-color'>初診料・再診料</Card.Title>
                <div className='text-right'>
                  <Card.Text className='small'>3割負担　1,500円</Card.Text>
                  <Card.Text className='small'>2割負担　1,100円</Card.Text>
                  <Card.Text className='small'>1割負担　600円</Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Card border='light' className='rounded'>
              <Card.Body>
                <Card.Title className='text-center mb-3 text-color'>2回目</Card.Title>
                <div className='text-right'>
                  <Card.Text className='small'>3割負担　700円</Card.Text>
                  <Card.Text className='small'>2割負担　600円</Card.Text>
                  <Card.Text className='small'>1割負担　400円</Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Card border='light' className='rounded'>
              <Card.Body>
                <Card.Title className='text-center mb-3 text-color'>3回目以降</Card.Title>
                <div className='text-right'>
                  <Card.Text className='small'>3割負担　500円</Card.Text>
                  <Card.Text className='small'>2割負担　400円</Card.Text>
                  <Card.Text className='small'>1割負担　200円</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </CardGroup>
          <div className='description text-right mt-3'>
            <p className='text-color'>(再診料は最終来院日より1か月空いた場合)</p>
          </div>
        </div> {/* medical-care-content */}

        <div className='medical-treatment-content'>
          <h4 className='mb-4 caption text-muted'>自費治療</h4>
          <figure>
            <Image className={'img'} filename={'service008.jpg'} alt={''} />
          </figure>
          <div className='menu-contents'>
            <CardGroup>
              <Card className='rounded'>
                <Image className={'card-img rounded'} filename={'service001.jpg'} alt={''} />
                <Card.Body>
                  <Card.Title className='text-center mb-3'>ゑびす式骨格矯正</Card.Title>
                  <Card.Text className='small'>1回 2,000円</Card.Text>
                  <Card.Text className='small'>定額(1か月) 5,400円</Card.Text>
                  <Card.Text className='small'>(例…3/5に購入の場合、4/4まで有効)</Card.Text>
                </Card.Body>
                <Card.Footer bsPrefix className='text-center p-md-3'>
                  <a href='#skeletal_correction' className='btn btn-outline-info w-100'>ゑびす式骨格矯正について</a>
                </Card.Footer>
              </Card>

              <Card className='rounded'>
                <Image className={'card-img rounded'} filename={'service005.jpg'} alt={''} />
                <Card.Body>
                  <Card.Title className='text-center mb-3'>小顔矯正</Card.Title>
                  <Card.Text className='small'>1回 2,700円</Card.Text>
                  <Card.Text className='small'>トライアル(3回券) 7,500円</Card.Text>
                  <Card.Text className='small'>5回券 12,000円</Card.Text>
                  <Card.Text className='small'>10回券 23,000円</Card.Text>
                </Card.Body>
                <Card.Footer bsPrefix className='text-center p-md-3'>
                  <a href='#small_face_correction' className='btn btn-outline-info w-100' >小顔矯正について</a>
                </Card.Footer>
              </Card>

              <Card className='rounded'>
                <Image className={'card-img rounded'} filename={'service006.jpg'} alt={''} />
                <Card.Body>
                  <Card.Title className='text-center mb-3'>腹筋運動「Eトレ」</Card.Title>
                  <Card.Text className='small'>1回 2,700円</Card.Text>
                  <Card.Text className='small'>トライアル 5,400円</Card.Text>
                  <Card.Text className='small'>24回券 39,800円</Card.Text>
                  <Card.Text className='small'>36回券 59,700円</Card.Text>
                  <Card.Text className='small'>48回券 79,600円</Card.Text>
                </Card.Body>
                <Card.Footer bsPrefix className='text-center p-md-3'>
                  <a href='#e_training' className='btn btn-outline-info w-100'>Eトレについて</a>
                </Card.Footer>
              </Card>
            </CardGroup>
            <div className='description ml-4 text-right'>
              <h5 className='mb-3'>延長施術</h5>
              <div className='fee ml-md-5'>
                <p>5分　　540円　/　15分　1,620円</p>
                <p>10分　1,080円　/　20分　2,160円</p>
                <p></p>
              </div>
              <p className='text-color m-0 ml-5'>もちろん20分以上の延長もOK!</p>
              <p className='ml-5'>※当院では50分延長が多いです。</p>
            </div>
          </div> {/* menu-contents */}
        </div> {/* medical-treatment-content */}

        {/* ゑびす式骨格矯正 */}
        <SkeletalCorrection />

        {/* 小顔矯正 */}
        <SmallFaceCorrection />

        {/* Eトレ */}
        <ETraining />

        {/* 交通事故治療 */}
        <TrafficAccidentMedicalTreatment />

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
