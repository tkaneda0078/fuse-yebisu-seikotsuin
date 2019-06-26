import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from '../image'

/**
 * 小顔矯正
 */
const SmallFaceCorrection = () => (
  <div id='small_face_correction' className='service'>
    <h2 className='mb-4 caption'><i className='icon fas fa-bullseye mr-2' />小顔リフト矯正</h2>
    <div className='description mt-4'>
      <p className='text-color'>骨格を知り尽くしたプロが行う"小顔"になる為のメニュー</p>
      <p>整骨院ならではのアプローチ</p>
      <p>メイクは表面的な美しさ。</p>
      <p>「美容に整骨って…」</p>
      <p>と思われるかもしれませんが、<span className='text-color'>土台となるお顔の骨格を矯正することで、お顔の印象が格段に変わります。</span></p>
      <p>見た目マイナス5歳！</p>
    </div>
    <Row className='my-5'>
      <Col sm={6}>
        <div className='description mt-4'>
          <h5 className='text-color mb-4'>体験者の声</h5>
          <div className='ml-3'>
            <ul>
              <li>一回の施術で頬の高さがそろった</li>
              <li>フェイスラインがきれいになった</li>
              <li>友だちに痩せたといわれた</li>
              <li>朝起きた時の顔のむくみがなくなった</li>
            </ul>
            <p>というお声を、これまで多数頂いています。</p>
          </div>
        </div>
      </Col>
      <Col sm={6}>
        <Image className={'img'} filename={'service005.jpg'} alt={''} />
      </Col>
    </Row>
    <Row className='mb-5'>
      <Col sm={6}>
        <div className='description mt-4'>
          <p className='mb-5'>当院では頬とフェイスラインのリフトアップに力を入れています。</p>
          <p className='m-0 '>頬の位置が低い方が高い方よりも老け顔に見られることが多く、</p>
          <p>お顔の重心が下がってみえ、たるんで締まりやハリのない顔に見えてしまいます。</p>
        </div>
      </Col>
      <Col sm={6}>
        <Image className={'img'} filename={'service009.jpg'} alt={''} />
      </Col>
    </Row>
    <div className='fee text-right text-muted'>
      <p className='small'>通常1回 2,700円</p>
      <p className='small'>トライアル(3回券) 7,500円</p>
      <p className='small'>5回券 12,000円</p>
      <p className='small'>10回券 23,000円　※約2回分もお得に！</p>
    </div>
  </div>
)

export default SmallFaceCorrection