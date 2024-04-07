import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './skills.css'
import htmlimg from '../images/5352-html5_102567 (1).png'
import cssimg from '../images/css3-512.webp'
import bootstrapimg from '../images/bootstrap-5-logo-icon.png'
import jsimg from '../images/pngegg (2).png'
import reactimg from '../images/pngwing.com (10).png'
import expressimg from '../images/beginners-guide-to-using-express-js-and-node-js-framework.png'
import nodejsimg from '../images/node.js-logo-image.webp'
import mongodbimg from '../images/mongodb_cloud-database-management-systems_1697586469294.png'

function Skills() {
  return (
    <div className="skills-container me-5">
      <Container fluid>
      <Row>
        <Col md={3}>
          <Card className='card2' style={{ width: '100%', marginBottom: '15px' }}>
            <Card.Img
              variant="top"
              src={htmlimg}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>HTML 5</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className='card2' style={{ width: '100%', marginBottom: '15px' }}>
            <Card.Img
              variant="top"
              src={cssimg}
              style={{ height: '200px', objectFit: 'contain' }}
            />
            <Card.Body>
              <Card.Title>CSS</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className='card2' style={{ width: '100%', marginBottom: '15px' }}>
            <Card.Img
              variant="top"
              src={bootstrapimg}
              style={{ height: '200px' }}
            />
            <Card.Body>
              <Card.Title>Bootstrap</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className='card2' style={{ width: '100%', marginBottom: '15px' }}>
            <Card.Img
              variant="top"
              src={jsimg}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>JavaScript</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <Card className='card2' style={{ width: '100%', marginBottom: '15px' }}>
            <Card.Img
              variant="top"
              src={reactimg}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>React</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className='card2' card2 style={{ width: '100%', marginBottom: '15px' }}>
            <Card.Img
              variant="top"
              src={expressimg}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>Express</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className='card2' style={{ width: '100%', marginBottom: '15px' }}>
            <Card.Img
              variant="top"
              src={nodejsimg}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>Node</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className='card2' style={{ width: '100%', marginBottom: '15px' }}>
            <Card.Img
              variant="top"
              src={mongodbimg}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>MongoDB</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    </div>
    
  );
}

export default Skills;
