import React from 'react'
import { Container,Row, Col, Card } from 'react-bootstrap'
import './education.css'
import bg1 from '../images/IMG_20240226_154109.jpg'
import bg2 from '../images/IMG_20240226_154304.jpg'

function Education() {
  return (
    <>

<div className='mb-5 mt-2 background1' style={{ width: "100%", height: "90%", borderRadius: '25% 10% ' }}>
      <section id="education" className="py-5">
        <Container>
          <h2 className="text-center mb-4 section-title">Education</h2>
          <div className="education-line"></div>
          <Row className="mt-4 justify-content-center">
            <Col md={4}>
              <Card className="education-item">
                <Card.Img variant="top" src={bg2} style={{width:"150px", height:"200px"}} />
                <Card.Body>
                  <Card.Title>Luminar Technolab</Card.Title>
                  <Card.Text className="text-muted">MERN Stack Development (6 months course)</Card.Text>
                  <Card.Text className="duration">Sept 2023 - Present</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="education-item">
                <Card.Img variant="top" src={bg1} style={{width:"150px", height:"200px"}}  />
                <Card.Body>
                  <Card.Title>Tharananellur Arts & Science College</Card.Title>
                  <Card.Text className="text-muted">Bachelor of Computer Applications (BCA)</Card.Text>
                  <Card.Text className="duration">2020 - 2023</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div> 
   
    
    </>
  )
}

export default Education