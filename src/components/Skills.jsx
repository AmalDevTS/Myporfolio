import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './skills.css'

function Skills() {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Card className='card2' style={{ width: '100%', marginBottom: '15px' }}>
            <Card.Img
              variant="top"
              src="https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png"
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
              src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-512.png"
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
              src='https://blogs.powercode.id/wp-content/uploads/2022/02/Bootstrap-Logo-Vector-_SVG-Free-Download.jpg'
              style={{ height: '200px', objectFit: 'cover' }}
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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
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
              src="https://initialcommit.com/img/initialcommit/beginners-guide-to-using-express-js-and-node-js-framework.png"
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
              src="https://cdn-clekk.nitrocdn.com/tkvYXMZryjYrSVhxKeFTeXElceKUYHeV/assets/images/optimized/rev-49e2c5e/litslink.com/wp-content/uploads/2020/12/node.js-logo-image.png"
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
              src="https://www.gartner.com/pi/vendorimages/mongodb_cloud-database-management-systems_1697586469294.png"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>MongoDB</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
