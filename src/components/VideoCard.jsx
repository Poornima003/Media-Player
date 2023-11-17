import React, { useState } from 'react'
import { Card,Modal } from 'react-bootstrap'

function VideoCard({displayData}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <Card className='mb-3'>
      <Card.Img onClick={handleShow} height={'180px'} variant="top" src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h6>{displayData?.caption}</h6>
          <button className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
        </Card.Title>
        <p></p>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width={'100%'} height="315" src={`${displayData?.embedLink}?autoplay=1`} title={displayData?.caption} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </Modal.Body>
        
      </Modal>
    
    </>
  )
}

export default VideoCard