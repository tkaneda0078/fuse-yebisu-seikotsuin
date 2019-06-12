import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
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

        <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
        <Jumbotron fluid />

        <Container>

          <div className='faq-contents'>

            <div className='caption'>
              <h1 className='mb-5 text-muted title'>よくある質問</h1>
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