import React from 'react'
import { Link } from 'gatsby'

import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import GoogleMap from '../components/GoogleMap'

const IndexPage = () => (
  <Layout>

    <SEO title='ホーム' keywords={[`gatsby`, `application`, `react`]} />

    <Jumbotron fluid>
      <Image className={'img'} filename={'img-point004.jpg'} alt={''} />
    </Jumbotron>

    <Container>
      <div className='main-contents'>
        <figure className='main-img mb-5'>
          <Image className={'img'} filename={'img-point005.jpg'} alt={''} />
        </figure>
        <div className='description'>
          <h3 className='mb-5'>患者様一人ひとりのお気持ちに寄り添います。</h3>
          <p className='mb-0'>ゑびす整骨院では、</p>
          <p>痛みの原因を追求します。</p>
          <p>どれだけ効果的な施術しても、アプローチの場所が違えば、施術の意味がなくなり、また再発の可能性も高まってしまいます。</p>
          <p>施術の効果を最大限に引き出すために、患者様のお悩みやお望みをしっかりとヒヤリングいたします。</p>
          <p>解剖・運動学の観点から、関節の動きなどを確かめ、根本的に悪くなっている場所を見つけ、患者さんひとりひとりに最適な施術を行います。</p>
        </div>
      </div>

      <div className='sub-contents'>
        <div className='content'>
          <figure>
            <Image className={'img'} filename={'service004.jpg'} alt={''} />
          </figure>
          <div className='description'>
            <h4 className='mb-5'>すぐに効果を実感</h4>
            <p>長い時間をかけて生じたカラダの歪みの原因を究明し、独自のメソッドで矯正し改善いたします。</p>
            <p>歪んだ骨格を瞬時に矯正するという、当院院長が考案の【ゑびす式骨格矯正】</p>
            <p>一番の特徴は「即効性」が高く、施術後にすぐ体感が変わります。</p>
          </div>
        </div>
        <div className='content'>
          <figure>
            <Image className={'img'} filename={'img-point001.jpg'} alt={''} />
          </figure>
          <div className='description'>
            <h4 className='mb-5'>長年続いた痛みが、再発しない身体づくり</h4>
            <p>施術して、一旦は快適な身体を手に入れても、生活習慣や姿勢・カラダの使い方など、これまでと同じサイクルで生活していくと、</p>
            <p>いずれまた身体の不調・痛みや歪みの症状が再発する可能性が高まってしまいます。</p>
            <p>当院ではそうした「再発防止」のために、一つ一つ丁寧な生活習慣の指導や運動法など事細かにお伝えし、</p>
            <p>施術後も患者さんに快適なカラダでの快適生活を提供しています。</p>
          </div>
        </div>
      </div> {/* sub-contents */}

      <div className='menu-contents'>
        <CardGroup>
          <Card className='rounded'>
            <Image className={'card-img rounded'} filename={'service001.jpg'} alt={''} />
            <Card.Body>
              <Card.Title className='text-center mb-4'>ゑびす式骨格矯正</Card.Title>
              <Card.Text className='small'>
                長い間歪んだ体、昔からある体の悩みは、
                お任せください。
                根本的に体の芯から整えて本来の身体に戻していきましょう。
                また今後の正しい体の使い方をお伝えします。
            </Card.Text>
            </Card.Body>
            <Card.Footer bsPrefix className='text-center p-md-3'>
              <Link className='btn btn-outline-info w-100' to='service#skeletal_correction'>ゑびす式骨格矯正について</Link>
            </Card.Footer>
          </Card>

          <Card className='rounded'>
            <Image className={'card-img rounded'} filename={'service005.jpg'} alt={''} />
            <Card.Body>
              <Card.Title className='text-center mb-4'>小顔矯正</Card.Title>
              <Card.Text className='small'>
                ソフトな施術でエステを受けているような感覚。
                お得な回数券もご用意しています。
            </Card.Text>
            </Card.Body>
            <Card.Footer bsPrefix className='text-center p-md-3'>
              <Link className='btn btn-outline-info w-100' to='service#small_face_correction'>小顔矯正について</Link>
            </Card.Footer>
          </Card>

          <Card className='rounded'>
            <Image className={'card-img rounded'} filename={'service006.jpg'} alt={''} />
            <Card.Body>
              <Card.Title className='text-center mb-4'>腹筋運動「Eトレ」</Card.Title>
              <Card.Text className='small'>
                ベッドに20分横になっているだけで腹筋運動6,000回。
                普通では鍛えることが出来ないインナーマッスルを
                ピンポイントで鍛えることができます。
                ほかにもシェイプアップモードや筋トレモードも
                ご準備しています。
            </Card.Text>
            </Card.Body>
            <Card.Footer bsPrefix className='text-center p-md-3'>
              <Link className='btn btn-outline-info w-100' to='service#e_training'>Eトレについて</Link>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div> {/* menu-contents */}

      <div className='point-contents'>
        <CardGroup>
          <Card className='rounded mb-3'>
            <Image className={'card-img rounded'} filename={'img-point002.jpg'} alt={''} />
            <Card.Body>
              <Card.Title className='text-center mb-4'>交通事故治療の豊富な実績</Card.Title>
              <Card.Text className='small'>
                交通事故治療対応の整骨院で自賠責保険による交通事故の治療を行っています。
                治療費も、基本「<span className='text-color'>負担金なし</span>」でできます。
                むち打ち症・腰痛をはじめ、軽度だと思う怪我や痛みや違和感など、事故から起因すると思われる諸症状に対応します。
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='rounded mb-3'>
            <Image className={'card-img rounded'} filename={'img-point003.jpg'} alt={''} />
            <Card.Body>
              <Card.Title className='text-center mb-4'>業界歴10年の豊富な施術実績</Card.Title>
              <Card.Text className='small'>
                スタッフ全員が<span className='text-color'>国家資格を保有</span>しております。
                これまで延べ10万人を超える患者さんの施術実績があり経験も豊富です。
              </Card.Text>
              <Card.Text className='small'>
                中にはご来院いただいた時、原因がわからなかった症状なども、しっかり患者さんと向き合い、
                適切な施術を見出し、数え切れないほどたくさんの方々のお悩みを改善してきました。
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='rounded mb-3'>
            <Image className={'card-img rounded'} filename={'img-point004.jpg'} alt={''} />
            <Card.Body>
              <Card.Title className='text-center mb-4'>お子様づれでもOK</Card.Title>
              <Card.Text className='small'>
                「小さな子どもがいてなかなか整骨院に通いづらい」という方のお話も時々お聞きします。
              </Card.Text>
              <Card.Text className='small'>
                当院のスタッフも子を持つ親。子育てでお疲れになったカラダをしっかり癒し、
                お子様のために元気なお母さんであることは、当院スタッフみんなの願いでもあります！
                どうぞお気軽にお連れください。
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div> {/* point-contents */}

      <GoogleMap />
    </Container>

  </Layout>
)

export default IndexPage
