import React, { useEffect, useState } from 'react'
import { Button, Form, Modal, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAVideo, getAllCategory, updateCategory } from '../services/allAPI';
import { all } from 'axios';
import VideoCard from './VideoCard';

function Category() {
  const [allCategories,setAllCategories] = useState([])
  const [categoryName,setCategoryName]= useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory = async () =>{
    if(categoryName){
      let body ={
        categoryName,allVideos:[]
      }
          const response = await addCategory(body)
          if(response.status>=200 && response.status<300){
            handleClose()
            setCategoryName("")
            getCategories()
          }else{
            toast.error("Operation failed...Please try after some time")
          }
    }else{
        toast.warning("Please provide category name")
    }
  }

  const getCategories = async ()=>{
    const {data} = await getAllCategory()
    setAllCategories(data)
  }

  useEffect(()=>{
    getCategories()
  },[])

  const handleDelete = async (id)=>{
    await deleteCategory(id)
    getCategories()
  }

  const dragOver = (e)=>{
    e.preventDefault()
  }

  const videoDrop = async (e,categoryId)=>{
     const videoId = e.dataTransfer.getData("videoId")
     //get video details
      const {data} = await getAVideo(videoId)
      //get category details
      const selectedCategory = allCategories?.find(item=>item.id===categoryId)
      selectedCategory.allVideos.push(data)
      console.log(selectedCategory);
      //make api call to update category
      
      await updateCategory(categoryId,selectedCategory)
      getCategories()
  }

  return (
    <>
    <div className="d-grid ms-3">
      <button onClick={handleShow} className='btn btn-info'>Add New Category</button>
    </div>

    {
      allCategories.length>0?allCategories?.map(item=>(
        <div className='mt-3 ms-3 border rounded p-3' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
          <div className='d-flex justify-content-between align-items-center'>
            <h6>{item?.categoryName}</h6>
            <button onClick={()=>handleDelete(item?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>

          </div>
          <Row>
            {
              item?.allVideos &&
              item?.allVideos.map(card=>(
                <Col sm={12}>
                  <VideoCard displayData={card} insideCategory={true}/>
                </Col>
              ))
            }
          </Row>
        </div>
  
      )): <p className='fw-bolder fs-5 ms-3 mt-3 text-danger'>No categories are added</p>
    }
    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
         <Form className='border border-secondary rounded p-3'>
             <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Category Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)}/>
             </Form.Group>
            
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} className="btn btn-info">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer 
      position='top-center'
      autoClose={2000}
      theme='colored'
      />
    </>
  )
}

export default Category