import React from 'react'
import {Col,Row, Card} from 'react-bootstrap'

function LandingPage() {
  return (
    <>
      <Row className='mt-5 mb-5 align-items-center justify-content-between w-100'>
      <Col></Col>
        <Col lg={5}>
            
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cum animi nemo, ea laudantium accusantium mollitia, consequatur necessitatibus blanditiis adipisci cupiditate. Quod aliquam modi laudantium quaerat doloremque officia ab reiciendis.</p>
        <button className='mt-5 btn btn-info'>Get Started</button>
        </Col>
        <Col lg={5}> 
        <img className='img-fluid' src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
        </Col>
      </Row>

      <div className='container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column'>
            <h3>Features</h3>
            <div className='cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100 '>

            <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
            </div>

      </div>
    
    </>
  )
}

export default LandingPage