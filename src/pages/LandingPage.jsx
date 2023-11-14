import React from 'react'
import {Col,Row, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
      <Row className='mt-5 mb-5 align-items-center justify-content-between w-100'>
      <Col></Col>
        <Col lg={5}>
            
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cum animi nemo, ea laudantium accusantium mollitia, consequatur necessitatibus blanditiis adipisci cupiditate. Quod aliquam modi laudantium quaerat doloremque officia ab reiciendis.</p>
        <button onClick={()=>navigateByUrl('/home')} className='mt-5 btn btn-info'>Get Started <i className="fa-solid fa-arrow-right fa-beat ms-2"></i></button>
        </Col>
        <Col lg={5}> 
        <img className='img-fluid' src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
        </Col>
      </Row>

      <div className='container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column'>
            <h3>Features</h3>
            <div className='cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100 '>

            <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://prabinparajuli.com.np/wp-content/uploads/2016/11/habibar-rahman-gear.gif" />
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://media.tenor.com/yq8IKNARilEAAAAi/musical-notes.gif" />
      <Card.Body>
        <Card.Title>Categorise videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://downloadwap.com/thumbs3/screensavers/d/new/music/music_bars-256774.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
            </div>

            <div className="container border rounded p-5 border-secondary mb-5 mt-5 d-flex align-items-center justify-content-between w-100 b-5">
                  <div className="col-lg-5">
                        <h3 className='mb-5 text-warning'>Simple, Fast and Powerful</h3>
                        <h6 className='mb-3'><span className='fs-5 fw-bolder'>Play everything:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, distinctio. Ut unde, tenetur atque.</h6>
                        <h6 className='mb-3'><span className='fs-5 fw-bolder'>Categorise Vidoes:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, distinctio. Ut unde, tenetur atque.</h6>
                        <h6 className='mb-3'><span className='fs-5 fw-bolder'>Managing Hisory:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, distinctio. Ut unde, tenetur atque.</h6>
                        
                  </div>
                  <div className="video col-lg-6">
                    
                  <iframe width="100%" height="315" src="https://www.youtube.com/embed/IqwIOlhfCak?si=nXgw8HNtAL89t60N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                  </div>
            </div>

      </div>
    
    </>
  )
}

export default LandingPage