import React from 'react'
import Image from '../image'

/**
 * ゑびす式骨格矯正
 */
const SkeletalCorrection = () => (
  <div id='skeletal_correction' className='service'>
    <h2 className='mb-5 caption'><i className='icon fas fa-bullseye mr-2' />ゑびす式骨格矯正</h2>
    <div className='description mb-4'>
      <p className=''>ゑびす式骨格矯正のメリット</p>
      <ul>
        <li>当院の骨盤矯正は<span className='text-color'>即効性のある矯正です。</span></li>
        <li><span className='text-color'>たった一度の施術で驚くほどの効果を実感</span>することができます。</li>
        <li>ダイナミックな矯正スタイルですが、当院では80歳の方でも矯正を受けています。</li>
        <li><span className='text-color'>産後の骨盤矯正にも絶大な効果を発揮</span>します。</li>
      </ul>
    </div>
    <figure>
      <Image className={'img mb-5'} filename={'service001.jpg'} alt={''} />
    </figure>
    <h4 className='mb-4 caption text-color'>なぜ矯正をしなければいけないのか？</h4>
    <div className='description mb-4'>
      <p>骨盤と背骨は人間の根本的な土台です。</p>
      <p>この骨盤や背骨に歪みが生じることによりと全身に悪影響を及ぼし、症状となって出現します。</p>
      <p>また、骨盤は内臓の受け皿でもあるので、ゆがみを生じていれば、内臓の活動が落ち、免疫力や代謝の低下に繋がります。</p>
    </div>
    <figure>
      <Image className={'img mb-5'} filename={'service002.jpg'} alt={''} />
    </figure>
    <div className='description mb-4'>
      <p>逆に骨盤が正しい位置で安定すれば、内臓の活動が活発になり、免疫力や代謝が上がるので、</p>
      <p>それだけでダイエット効果もあり、健康な身体を手に入れることができます。</p>
      <p>また骨盤を直す前に、姿勢だけを正そうとして背筋を伸ばして胸を張り、</p>
      <p>腰が反り返ってしまう状態になっている人が多く、筋肉の痛みにつながっていることが多いのです。</p>
    </div>
    <figure>
      <Image className={'img'} filename={'service003.jpg'} alt={''} />
    </figure>
  </div>
)

export default SkeletalCorrection