import React from 'react'

import Table from 'react-bootstrap/Table'

const Footer = () => (
  <footer className='navbar-fixed-bottom'>
    <div className='container'>
      <Table responsive>
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9:30-13:00</td>
            <td>○</td>
            <td>○</td>
            <td>○</td>
            <td>-</td>
            <td>○</td>
            <td>○</td>
            <td>-</td>
          </tr>
          <tr>
            <td>14:00-18:30</td>
            <td>○</td>
            <td>○</td>
            <td>○</td>
            <td>-</td>
            <td>○</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className='text-center'>
        <p>© {new Date().getFullYear()}, Built with<a href='www.devbutze.com'>DevButze</a> </p>
      </div>
  </footer>
)

export default Footer
