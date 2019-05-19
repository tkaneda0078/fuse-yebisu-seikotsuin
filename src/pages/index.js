import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <div className='main-contents'>
      <figure className='main-img'>
        <Image className={'img'} filename={'sample2.jpg'} alt={''} />
      </figure>
      <div className='main-txt'>
        <h2>title</h2>
        <p>This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
