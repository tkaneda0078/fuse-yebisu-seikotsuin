import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from '../image'

/**
 * Eトレ
 */
const ETraining = () => (
  <div id='e_training' className='service'>
    <h2 className='mb-5 caption'><i className='icon fas fa-bullseye mr-2 mb-4' />腹筋運動「Eトレ」</h2>
    <div className='description mt-4 ml-md-4'>
      <h5 className='text-color'>Ｅトレのメリット</h5>
      <p className='text-color m-0'>狙ったところをピンポイントに！</p>
      <p>運動させたい場所にパットを貼って効率的に筋肉を刺激</p>
      <p className='text-color m-0'>疲労やケガの心配なし！</p>
      <p>狙ったポイントのみのトレーニングなので、全身の疲労感はなく、少ない疲労でトレーニングが可能</p>
      <p className='text-color m-0'>らくらくトレーニング！</p>
      <p>20分でワンセット！　横に寝ているだけ！　運動が苦手な方でもOK！</p>
      <p className='text-color m-0'>効果が出にくいインナーマッスルに刺激が届く</p>
      <p>プロのアスリートでも体幹を鍛えるのが難しいトレーニングを、お手軽に行うことができます。</p>
    </div>
    <Row className='my-5'>
      <Col sm={6}>
        <div className='description'>
          <h5 className='text-color mb-4'>そもそも筋肉の役割とは？</h5>
          <p>身体を動かす・関節を動かすなど最もよく知られていることで、<span className='text-color'>身体を支え姿勢を維持することが主な役割</span>です。</p>
          <p>腹部の腹横筋などは、動きを生み出す筋肉ではなく、<span className='text-color'>身体を支える役割</span>もあります。</p>
          <p>体を表面から覆っているため、見た目のプロポーションを作っていく上で、その量や張り具合が見た目を決めます。</p>
          <p><span className='text-color'>全身の体液を循環させる役目</span>もあり、筋肉を動かすことで血液やリンパをめぐらせます。</p>
          <p>また、筋肉は体の中で<span className='text-color'>最大のエネルギー消費器官</span>で、最大の発熱器官でもあります。</p>
        </div>
      </Col>
      <Col sm={6}>
        <Image className={'img'} filename={'service010.jpg'} alt={''} />
      </Col>
    </Row>
    <figure>
      <Image className={'img'} filename={'service011.jpg'} alt={''} />
    </figure>
    <Row className='my-5'>
      <Col sm={9}>
        <div className='description'>
          <h5 className='text-color mb-4'>EMSという医療機器をご存知ですか??</h5>
          <p>一般の方が知っていたら、体のことにとてもマニアックな方々だと思います（笑）</p>
          <p>実際、知らない方のほうが多いと思うので、当院で扱っているEMSについて簡単に紹介させて頂きたいと思います。</p>
        </div>
      </Col>
      <Col sm={3}>
        <Image className={'img'} filename={'service012.jpg'} alt={''} />
      </Col>
    </Row>
    <Row className='my-5'>
      <Col sm={9}>
        <div className='description'>
          <h5 className='text-color mb-4'>このような方にオススメです！！</h5>
          <ul>
            <li>猫背の方</li>
            <li>姿勢不良の方</li>
            <li>冷え、低体温の方</li>
          </ul>
          <p>体を動かさないで引き締めたい方</p>
          <p>1秒間に5回、30分間では9,000回もの筋収縮を実現！</p>
          <p>EトレEMSの「<span className='text-color'>貼るだけトレーニング</span>」は、低周波(0.1Hz)から高周波(50万Hz)までの、幅広い周波数帯を網羅しています。</p>
          <p>50万Hzの高周波は20cmもの深部まで届きますので、表皮に近いアウターマッスルと、深層にあるインナーマッスルを同時に刺激します。</p>
        </div>
      </Col>
      <Col sm={3}>
        <Image className={'img'} filename={'service013.jpg'} alt={''} />
      </Col>
    </Row>
    <div className='description mt-4'>
      <p className='text-muted'>1秒間に5回、30分間では9,000回もの筋収縮が起こりますので、貼るだけで筋力トレーニング効果が得られます(※)。</p>
      <p className='text-muted'>業務用器機には、刺激が一定化しないように「インターバル機能」が付いていますので、より早く結果に結びつきます。</p>
    </div>
    <Row className='my-5'>
      <Col sm={9}>
        <div className='description'>
          <p><span className='text-color'>専用のパッドをお腹に約20分間横になっていただくだけ</span>です。</p>
          <p>20分間の中で3回くらいに分けて、少しずつ負荷を上げていきます。</p>
        </div>
      </Col>
      <Col sm={3}>
        <Image className={'img'} filename={'service014.jpg'} alt={''} />
      </Col>
    </Row>
    <div className='fee text-right'>
      <p className='small'>通常1回 2,700円</p>
      <p className='small'>トライアル(3回券) 5,400円</p>
      <p className='small'>24回券 39,800円</p>
      <p className='small'>36回券 59,700円</p>
      <p className='small'>48回券 79,600円</p>
    </div>
  </div>
)

export default ETraining