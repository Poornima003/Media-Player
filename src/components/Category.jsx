import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="d-grid ms-3">
      <button onClick={handleShow} className='btn btn-info'>Add New Category</button>
    </div>
    
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
         <p>
            Please Fill The Following Details!!!
         </p>
         <Form className='border border-secondary rounded p-3'>
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Category ID" />
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Category Name" />
             </Form.Group>
            
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="btn btn-info">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category