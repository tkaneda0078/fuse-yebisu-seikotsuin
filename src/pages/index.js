import React from 'react'
import { Link } from 'gatsby'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Media from 'react-bootstrap/Media'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import News from '../components/News'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <Jumbotron fluid />

    <div className='main-contents'>
      <figure className='main-img'>
        <Image className={'img'} filename={'sample2.jpg'} alt={''} />
      </figure>
      <div className='main-txt'>
        <h2>患者様一人ひとりのお気持ちに寄り添います。</h2>
        <p>ゑびす整骨院は、</p>
        <p>地域の皆様が元気な体で、笑顔あふれる生活をお送りできますよう、精一杯サポートさせていただきます。</p>
      </div>
    </div>

    <div className='sub-contents'>
      <ul>
        <Media as='li'>
          <Image className={'img'} filename={'sample2.jpg'} alt={''} />
          <Media.Body className='ml-5'>
            <h4>布施で一番【笑顔】が多い整骨院を目指します！</h4>
            <p>この業界に勤めて約10年。有難いことに、これまでたくさんの方々に支えられ「布施　ゑびす整骨院」を開院することができました。</p>
            <p>地域の皆様が元気な体で、笑顔あふれる生活をお送りできますよう、精一杯サポートさせていただきます。</p>
            <p>些細なことでも構いません。体に気になることがございましたら、何なりとご相談ください。</p>
          </Media.Body>
        </Media>
        <Media as='li'>
          <Media.Body className='mr-5'>
            <h4>ホッと一息つける温かみのある院内です</h4>
            <p>院内は、白と緑を基調とした清潔感あふれる空間となっています。また、開放感のある広々とした院内ですので、初めてご来院される方も女性の方もリラックスしてお過ごしいただけます。</p>
            <p>心も体も落ち着ける環境を整えていますので、気を楽にしてお越しください。</p>
          </Media.Body>
          <Image className={'img'} filename={'sample2.jpg'} alt={''} />
        </Media>
      </ul>
    </div>

    <div className='menu-contents'>
      <CardGroup>
        <Card className='rounded'>
          <Image className={'card-img rounded'} filename={'sample2.jpg'} alt={''} />
          <Card.Body>
            <Card.Title className='text-center'>骨盤矯正</Card.Title>
            <Card.Text className='small'>
              長い間歪んだ体、昔からある体の悩みは、
              お任せください！！！
              根本的に体の芯から整えて本来の身体に戻していきましょう！
              また今後の正しい体の使い方をお伝えします！
            </Card.Text>
          </Card.Body>
          <Card.Footer bsPrefix className='text-center p-md-3'>
            <Link className='btn btn-outline-info w-100' to='#'>骨盤矯正について</Link>
          </Card.Footer>
        </Card>
        <Card className='rounded'>
          <Image className={'card-img rounded'} filename={'sample2.jpg'} alt={''} />
          <Card.Body>
            <Card.Title className='text-center'>小顔矯正</Card.Title>
            <Card.Text className='small'>
              ソフトな施術でエステを受けているような感覚！！
              お得な回数券もご用意しています！
            </Card.Text>
          </Card.Body>
          <Card.Footer bsPrefix className='text-center p-md-3'>
            <Link className='btn btn-outline-info w-100' to='#'>骨盤矯正について</Link>
          </Card.Footer>
        </Card>
        <Card className='rounded'>
          <Image className={'card-img rounded'} filename={'sample2.jpg'} alt={''} />
          <Card.Body>
            <Card.Title className='text-center'>Eトレ</Card.Title>
            <Card.Text className='small'>
              ベッドに20分横になっているだけで腹筋運動6,000回！！
              普通では鍛えることが出来ないインナーマッスルを
              ピンポイントで鍛えることが出来る！
              ほかにもシェイプアップモードや筋トレモードも
              ご準備しています！
            </Card.Text>
          </Card.Body>
          <Card.Footer bsPrefix className='text-center p-md-3'>
            <Link className='btn btn-outline-info w-100' to='#'>骨盤矯正について</Link>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>

    <News />

  </Layout>
)

export default IndexPage
