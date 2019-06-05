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
            <p>長年の痛みや不調もお任せください</p>
            <p>当院では、小顔リフト矯正をはじめ、身体の土台や軸となる部分を矯正する施術も行っております。</p>
            <p>身体の軸や土台となる箇所の矯正施術</p>
            <p>歪んだ体・お顔に徹底アプローチ！</p>
            <p>長年の痛みや不調もお任せください</p>
            <p>当院では、小顔リフト矯正をはじめ、身体の土台や軸となる部分を矯正する施術も行っております。</p>
          </div>
        </div>

        <div className='concept-contents'>
          <div className='concept'>
            <figure>
              <Image className={'img'} filename={'sample2.jpg'} alt={''} />
            </figure>
            <div className='caption'>
                <h3>布施で一番【笑顔】が多い整骨院を目指します！</h3>
                <p>この業界に勤めて約10年。有難いことに、これまでたくさんの方々に支えられ「布施　ゑびす整骨院」を開院することができました。</p>
                <p>地域の皆様が元気な体で、笑顔あふれる生活をお送りできますよう、精一杯サポートさせていただきます。</p>
                <p>些細なことでも構いません。体に気になることがございましたら、何なりとご相談ください。</p>
            </div>
          </div>
          <div className='concept'>
            <figure>
              <Image className={'img'} filename={'sample2.jpg'} alt={''} />
            </figure>
            <div className='caption'>
                <h3>ホッと一息つける温かみのある院内です</h3>
                <p>院内は、白と緑を基調とした清潔感あふれる空間となっています。また、開放感のある広々とした院内ですので、初めてご来院される方も女性の方もリラックスしてお過ごしいただけます。</p>
                <p>心も体も落ち着ける環境を整えていますので、気を楽にしてお越しください。</p>
            </div>
          </div>
        </div>

      </div>

    </Container>

  </Layout>
)

export default IndexPage
