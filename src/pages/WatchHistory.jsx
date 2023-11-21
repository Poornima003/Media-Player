import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allAPI'


function WatchHistory() {
  const [history,setHistory]= useState([])
  const handleHistory = async ()=>{
    const {data} = await getAllHistory()
    setHistory(data)
  }


  useEffect(()=>{
    handleHistory()
  },[])

const handleDeleteHistory = async (id)=>{
  await deleteHistory(id)
  handleHistory()
}

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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         { 
           history.length>0?history?.map((item,index)=>(
          
         <tr key={index}>
            <td>{index+1}</td>
            <td>{item?.caption}</td>
            <td> <a href={item?.embedLink} target='_blank'>{item?.embedLink}</a> </td>
            <td>{item?.timeStamp}</td>
            <td><button onClick={()=>handleDeleteHistory(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i> </button></td>
          </tr> )):<p className='fw-bolder fs-5 text-danger'> Nothing to display!!!</p>
          }
        </tbody>
    </table>
    </>
  )
}

export default WatchHistory