import React from 'react'

import Table from 'react-bootstrap/Table'

const Schedule = () => (
  <>
    <Table responsive className='schedule'>
      <thead>
        <tr>
          <th>診療時間</th>
          <th>月</th>
          <th>火</th>
          <th>水</th>
          <th>木</th>
          <th>金</th>
          <th>土</th>
          <th>日</th>
          <th className='text-color'>祝</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>9:00-14:00</td>
          <td>○</td>
          <td>○</td>
          <td>○</td>
          <td>-</td>
          <td>○</td>
          <td>○</td>
          <td>○</td>
          <td>○</td>
        </tr>
        <tr>
          <td>15:30-19:30</td>
          <td>○</td>
          <td>○</td>
          <td>○</td>
          <td>-</td>
          <td>○</td>
          <td>○</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
    <small className='text-muted'>
      <p className='m-0'>受付は以下の時間まで可能です。</p>
      <p>午前の部　〜14:00／午後の部　〜19:30</p>
    </small>
  </>
)

export default Schedule;