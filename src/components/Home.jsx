import React, { useEffect, useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import image from '../images/happy-3d-cartoon-man-using-laptop-siting-transparent-white-background_973886-51-removebg-transformed.png';

function Home() {
  const [text, setText] = useState('');
  const [blink, setBlink] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);
  const introText = "Hi, I am Amal Dev";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= introText.length) {
        setText(introText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust typing speed as needed

    // Blink effect
    const blinkInterval = setInterval(() => {
      setBlink(prevBlink => !prevBlink);
    }, 500); // Adjust blinking speed as needed

    // Set content loaded after a delay
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 500); // Adjust delay as needed

    return () => {
      clearInterval(interval);
      clearInterval(blinkInterval);
      clearTimeout(timer);
    };
  }, []);

  const handleDownload = () => {
    const downloadUrl = '/Amal Dev T S Resume.pdf';
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'My_CV.pdf';
    link.click();
  };

  return (
    <div className='mb-5 mt-2 background' style={{ width: "100%", height: "auto", padding: '20px', borderRadius: '25px' }}>
      <div className={`container rounded ${contentLoaded ? 'contentLoaded' : ''}`}>
        <Row className='align-items-center'>
          <Col xs={12} md={6}>
            <h1 className='mb-3 text-fadeIn' style={{ fontSize: "40px", fontWeight: "200", color: "yellow", fontFamily: "Anton, sans-serif" }}>
              {text}
              <span style={{ opacity: blink ? 1 : 0, color: "black" }}> |</span>
            </h1>
            <p className="text-fadeIn" style={{ color: "black", fontSize: "clamp(1rem, 3vw, 1.5rem)" }}>Full Stack Developer</p>
            <p className="text-fadeIn" style={{ fontSize: "clamp(0.8rem, 2vw, 1rem)" }}>As a dedicated learner and aspiring MERN Full Stack 
              Developer ,I am deeply committed about
              crafting innovative web solutions. Currently
              honing my skills in MERN (MongoDB, Express.js,
              React.js, Node.js) development, I thrive on
              challenges and am committed to continuous
              growth. Seeking opportunities in the field to apply
              and expand my skills while contributing to
              impactful projects. </p>
            <div>
              <button onClick={handleDownload} className='btn rounded button1 fadeIn me-3 mt-3'>Download CV</button>
              <Link to='/contacts' className="fadeIn" style={{ textDecoration: "none", color: "black", borderRadius: "25px" }}><button className='btn rounded button1 mt-3'>Hire Me</button></Link>
            </div>
          </Col>
          <Col xs={12} md={6} className="d-none d-md-block">
            <img className='images image-fadeIn' src={image} alt="" style={{ width: "100%", borderRadius: "8px" }} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
