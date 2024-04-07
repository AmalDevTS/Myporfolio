import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { TextField } from '@mui/material';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import whatsapplogo from '../images/whatsapp.png';
import linkedinlogo from '../images/linkedin.png';
import githublogo from '../images/github.png';
import gmaillogo from '../images/gmail.png';

import '../components/contact.css';

function Contact() {
  const [isName, setIsName] = useState('');
  const [isEmail, setIsEmail] = useState('');
  const [isMessage, setIsMessage] = useState('');

  const handleInputChange1 = (e) => {
    setIsName(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setIsEmail(e.target.value);
  };

  const handleInputChange3 = (e) => {
    setIsMessage(e.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    toast.success('Successfully completed!');
    emailjs
      .sendForm('service_bi162ra', 'template_a1rr0ff', form.current, 'LUmjhQENdbPc6fTce')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
    <div className='contact-container'>
    <div className='mb-5 mt-2 background5' style={{ width: '100%', height: '100%', padding: '20px', borderRadius: '25px' }}>
        <section id='contact' className='contact-section' style={{ padding: '20px' }}>
          <Container>
            <h2 className='ms-3' style={{ color: 'white' }}>
              Contact Me
            </h2>
            <Row>
              <Col md={6} className='contact-form'>
                <Form ref={form} onSubmit={sendEmail}>
                  <TextField
                    className='w-100'
                    id='outlined-basic'
                    label='Name'
                    variant='outlined'
                    name='from_name'
                    value={isName}
                    onChange={handleInputChange1}
                    InputProps={{
                      style: { backgroundColor: 'white', borderRadius: '25px' },
                    }}
                  />
                  <TextField
                    className='w-100 mt-3'
                    id='outlined-basic'
                    label='Email ID'
                    variant='outlined'
                    name='from_email'
                    value={isEmail}
                    onChange={handleInputChange2}
                    InputProps={{
                      style: { backgroundColor: 'white', borderRadius: '25px' },
                    }}
                  />
                  <TextField
                    className='w-100 mt-3'
                    id='outlined-basic'
                    label='Message'
                    variant='outlined'
                    name='message'
                    value={isMessage}
                    onChange={handleInputChange3}
                    InputProps={{
                      style: { backgroundColor: 'white', height: '100px', borderRadius: '25px' },
                    }}
                  />
                  <Button
                    disabled={isName && isEmail && isMessage ? false : true}
                    className='mt-3'
                    style={{ borderRadius: '25px', width: '100%', backgroundColor: '#17e1a4', border: '#17e1a4' }}
                    type='submit'
                  >
                    Send
                  </Button>
                </Form>
              </Col>
              <Col md={6} className='contact-icons mt-3'>
                <h3 style={{ color: 'white' }}>Connect with me:</h3>
                <div className='mt-4'>
                  <a href='https://wa.me/+917306258420' style={{ textDecoration: 'none', color: 'white' }}>
                    <img src={whatsapplogo} style={{ width: '30px' }} alt='' />
                    <span style={{ fontSize: '14px' }}> +91 7306258420</span>
                  </a>
                </div>
                <div className='mt-4'>
                  <a href='mailto:amal60266@gmail.com' style={{ textDecoration: 'none', color: 'white' }}>
                    <img src={gmaillogo} style={{ width: '30px' }} alt='' />
                    <span style={{ fontSize: '14px' }}> amal60266@gmail.com</span>
                  </a>
                </div>
                <div className='mt-4'>
                  <a href='https://www.linkedin.com/in/amal-dev-t-s-7b746a1a7 ' style={{ textDecoration: 'none', color: 'white' }}>
                    <img src={linkedinlogo} alt='' style={{ width: '30px' }} />
                    <span style={{ fontSize: '14px' }}> https://www.linkedin.com/in/amal-dev-t-s-7b746a1a7</span>
                  </a>
                </div>
                <div className='mt-4'>
                  <a href='https://github.com/AmalDevTS' className='contact-link' style={{ textDecoration: 'none', color: 'white' }}>
                    <img src={githublogo} style={{ width: '30px' }} alt='' />
                    <span style={{ fontSize: '14px' }}> https://github.com/AmalDevTS</span>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <ToastContainer />

    </div>
      
    </>
  );
}

export default Contact;
