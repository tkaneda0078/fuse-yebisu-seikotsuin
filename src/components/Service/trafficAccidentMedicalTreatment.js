import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from '../image'

/**
 * 交通事故治療
 */
const TrafficAccidentMedicalTreatment = () => (
  <div id='traffic_accident_medical_treatment' className='service'>
    <h2 className='mb-5 caption'><i className='icon fas fa-car-crash mr-2' />交通事故治療</h2>
    <div className='description mb-4'>
      <p className='text-color'>交通事故に合ったら…</p>
      <Row className='mb-5'>
        <Col sm={6}>
          <ListGroup variant='flush'>
            <ListGroup.Item>負傷者の救護、安全確保をしてください。</ListGroup.Item>
            <ListGroup.Item>110番通報してください。(※24時間以内）</ListGroup.Item>
            <ListGroup.Item>相手の免許証、名前(名刺・車種・色・ナンバーなどもメモ)、電話番号(自宅電話番号・携帯番号)を確認してください。</ListGroup.Item>
            <ListGroup.Item>自分でも写真(壊れたところ、ブレーキ跡など)をとるなど、事故直後の状況を記録してください。</ListGroup.Item>
            <ListGroup.Item>任意保険の有無、保険会社など、<span className='text-color'>できるかぎり詳しい情報を控えておいてください。</span></ListGroup.Item>
            <ListGroup.Item>
              からだに違和感・痛み等が発症しましたら、整形外科を受診するか、当院を受診してください
              (※<span className='text-color'>軽いけがだと思っても、油断せずに</span>信頼のおける病院でレントゲン・CT、MRIなどの精密検査を受けましょう)
            </ListGroup.Item>
            <ListGroup.Item>ご自分の加入されている任意保険会社にも、後日事故に遭ったことを連絡してください。</ListGroup.Item>
            <ListGroup.Item>当院を受診された場合は、<span className='text-color'>施術費は全額保険会社に後程請求致します。</span></ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={6}>
          <figure>
            <Image className={'img mb-4'} filename={'img-point008.jpg'} alt={''} />
            <Image className={'img'} filename={'img-point002.jpg'} alt={''} />
          </figure>
        </Col>
      </Row>
    </div>    
  </div>
)

export default TrafficAccidentMedicalTreatment