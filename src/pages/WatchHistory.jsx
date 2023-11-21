import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllHistory } from '../services/allAPI'


function WatchHistory() {
  const [history,setHistory]= useState([])
  const handleHistory = async ()=>{
    const {data} = await getAllHistory()
    setHistory(data)
  }


  useEffect(()=>{
    handleHistory()
  },[])
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
         { 
           history?history?.map((item,index)=>(
          
         <tr key={index}>
            <td>{index+1}</td>
            <td>{item?.caption}</td>
            <td> <a href={item?.embedLink} target='_blank'>{item?.embedLink}</a> </td>
            <td>{item?.timeStamp}</td>
          </tr> )):<p className='fw-bolder fs-5 text-danger'> Nothing to display!!!</p>
          }
        </tbody>
    </table>
    </>
  )
}

export default WatchHistory