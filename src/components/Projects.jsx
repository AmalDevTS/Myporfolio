import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './projects.css';
import project1 from '../images/Screenshot (191).png'; // Import project images
import project2 from '../images/Screenshot (192).png';
import project3 from '../images/Screenshot (193).png';
import project4 from '../images/Screenshot (194).png';
import project5 from '../images/Screenshot 2024-01-30 110147.png';
import project6 from '../images/Screenshot (196).png';
import project7 from '../images/Screenshot (197).png';
import project8 from '../images/Screenshot (198).png';

const projectsData = [
  { name: 'E Kart', image: project1, url: 'https://ekart-virid.vercel.app/' },
  { name: 'Restaurant', image: project2, url: 'https://restaurant-react-chi.vercel.app/' },
  { name: 'Counter App', image: project3, url: 'https://counterapp-kappa-three.vercel.app/' },
  { name: 'Netflix Clone', image: project4, url: 'https://netflixindiasample.netlify.app/' },
  { name: 'Media Player', image: project5, url: 'https://media-player-nu.vercel.app/' },
  { name: 'Find Weather', image: project6, url: 'https://amaldevts.github.io/FindWeather/' },
  { name: 'Simple Interest', image: project7, url: 'https://amaldevts.github.io/simple-interest/' },
  { name: 'Country Details', image: project8, url: 'https://amaldevts.github.io/CountryDetails/' },
];

function Projects() {
  return (
    <div className='project-container'>
      <div className='mb-5 mt-2 background4' style={{ width: "100%", padding: '20px', borderRadius: '25px' }}>
      <Container>
        <Row >
          <Col xs={12} >
            <h1 className='mt-3 text-center' style={{ color: "black", fontFamily:"-moz-initial"}}>Projects</h1>
          </Col>
          {projectsData.map((project, index) => (
            <Col key={index} md={3} sm={6} xs={12} className='mb-3'>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                <Card className="project-card">
                  <div className="image-container">
                    <Card.Img variant="top" src={project.image} alt={project.name} />
                  </div>
                  <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>

    </div>
    
  );
}

export default Projects;
