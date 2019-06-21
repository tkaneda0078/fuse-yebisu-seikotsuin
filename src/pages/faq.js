import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from '../components/image'
import Container from 'react-bootstrap/Container'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Faq from '../components/Faq'
import FaqData from '../faq-data.json'

class FaqPage extends Component {
  constructor() {
    super()
    this.state = {
      faqData: this.getFaqData()
    }
  }

  // TODO: DBから取得
  getFaqData() {
    // 仮
    return FaqData
  }

  render() {
    return (
      <Layout>

        <SEO title='よくある質問' keywords={[`gatsby`, `application`, `react`]} />

        <Jumbotron fluid className='mb-5'>
          <Image className={'img'} filename={'img-point007.jpg'} alt={''} />
        </Jumbotron>


        <Container>

          <div className='faq-contents'>

            <h1 className='h1 mb-5 text-color'>よくある質問</h1>

            <div className='caption'>
              <p className='m-0'>普段、患者さんよりお問い合わせの多い質問についてまとめてみました。</p>
              <p>ご参考までにご覧ください。</p>
              <p>また、当てはまるものがない場合はお気軽にお問い合わせください。</p>
            </div>

            <Faq faqData={this.state.faqData} />

          </div> {/* faq-contents */}

        </Container>

      </Layout>
    )
  }

}

export default FaqPage