import React, { useEffect } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import image from '../images/happy-3d-cartoon-man-using-laptop-siting-transparent-white-background_973886-51-removebg.png';

function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fadeIn');
    elements.forEach(element => {
      element.classList.add('fadeIn');
    });
  }, []);

  const handleDownload = () => {
    const downloadUrl = '/Amal Dev T S Resume.pdf';
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'My_CV.pdf';
    link.click();
  };

  return (
    <div className='mb-5 mt-2 background' style={{ width: "100%", height: "80%", borderRadius: '25% 10% ' }}>
      <div className='container-fluid rounded'>
        <Row className='align-items-center p-5'>
          <Col sm={12} md={6} lg={6}>
            <h2 className=' mb-3 text-fadeIn' style={{ fontSize: "50px", fontWeight: "200", color: "yellow", fontFamily: "Anton, sans-serif" }}>Hi,
              <span> I am Amal Dev</span></h2>
            <p className="text-fadeIn" style={{ color: "black", fontSize: "20px" }}>Full Stack Developer</p>
            <p className="text-fadeIn">As a dedicated learner and aspiring MERN Stack
              Developer Intern,I am deeply committed about
              crafting innovative web solutions. Currently
              honing my skills in MERN (MongoDB, Express.js,
              React.js, Node.js) development, I thrive on
              challenges and am committed to continuous
              growth. Seeking opportunities in the field to apply
              and expand my skills while contributing to
              impactful projects. </p>
            <button onClick={handleDownload} className='btn rounded button1 fadeIn'>Download C V</button>
            <Link to='/contacts' className="fadeIn" style={{ textDecoration: "none", color: "black", borderRadius: "25px" }}><button className='btn rounded button1 ms-3'>Hire Me</button></Link>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <img className='images image-fadeIn' src={image} alt="" height={"300px"} style={{ marginTop: "50px", borderRadius: "8px" }} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
