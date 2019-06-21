import React from 'react'

/**
 * 公式LINEお知らせ
 */
const LineNews = () => (
  <div className='line-contents'>
    <div className='description'>
      <h5 className='text-color mb-4'>★公式LINE＠やってます！</h5>
      <div className='ml-3'>
        <p>当院公式のLINE＠では、<span className='text-color font-weight-bold'>お友だち限定割引クーポン</span>や健康に関するさまざまな情報をお届けしています。</p>
        <p>また、こちらからもご来院予約可能です。</p>
        <p>以下の内容をメッセージしてください。</p>
        <ul>
          <li>お名前(フルネーム)</li>
          <li>生年月日</li>
          <li>次回ご希望のお時間</li>
        </ul>
        <div className='social-contents mb-4'>
          <div className='btn-line text-left'>
            <a href='https://line.me/R/ti/p/%40zgb4818u'>
              <span>
                <div className='line-icon' />
                友だち追加
            </span>
            </a>
          </div>
        </div>
        <div className='text-color'>
          <p>是非この機会に【友だち追加】してご活用ください！</p>
          <p>よろしくお願いします。</p>
        </div>
      </div>
    </div>
  </div>
)

export default LineNews
