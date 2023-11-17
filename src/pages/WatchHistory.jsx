import React from 'react'
import { Link } from 'react-router-dom'


function WatchHistory() {
  return (
    <>
    <div className="container mb-5 mt-5 d-flex justify-content-between">
      <h3>Watch History</h3>
      <Link className='d-flex align-items-center' style={{textDecoration:'none', color:'white',fontSize:'20px'}} to={'/home'}>Back to Home</Link>
    </div>
    <table className='table mt-5 mb-5 contaier'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Kanban</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
    </table>
    </>
  )
}

export default WatchHistory