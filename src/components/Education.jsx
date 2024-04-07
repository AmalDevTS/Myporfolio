import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './education.css';
import bg1 from '../images/IMG_20240226_154109.jpg';
import bg2 from '../images/IMG_20240226_154304.jpg';

function Education() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='education-container'>
      <div className='mb-5 mt-2 background1'>
      <section id="education" className="py-5" style={{ width: "100%", padding: '20px', borderRadius: '25px' }}>
        <Container>
          <h2 className="text-center mb-4 section-title">Education</h2>
          <div className="education-line"></div>
          <Row className="justify-content-center align-items-center">
            <Col md={6} lg={4}>
              <div className="education-item" style={{ height: '350px' }}>
                <img src={bg1} alt="Tharananellur Arts & Science College" className="img-fluid" />
                <div className="education-details">
                  <h3>Tharananellur Arts & Science College</h3>
                  <p className="text-muted">Bachelor of Computer Applications (BCA)</p>
                  <p className="duration">2020 - 2023</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="education-item" style={{ height: '350px' }}>
                <img src={bg2} alt="Luminar Technolab" className="img-fluid" />
                <div className="education-details">
                  <h3>Luminar Technolab</h3>
                  <p className="text-muted">MERN Stack Development</p>
                  <p className="duration">Sept 2023 - Present</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>

    </div>
    
  );
}

export default Education;
