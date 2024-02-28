import React, { useState } from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
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
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div className='mb-5 mt-2 background4' style={{ width: "100%", height: "95%", borderRadius: '25% 10% ' }}>

      <Container>
        <Row>
          <Col md={4}>
            <h2 className='mt-3' style={{textAlign:"center",marginLeft:'450px',color:"white"}}>Projects</h2>
            <ListGroup style={{marginTop:"30px",marginLeft:"50px"}}>
              {projectsData.map((project, index) => (
                <ListGroup.Item
                  key={index}
                  className="project-item"
                  onMouseEnter={() => handleMouseEnter(project.image)}
                  onMouseLeave={handleMouseLeave}
                  style={{width:"400px"}}
                >
                  <a href={project.url} target="_blank"  style={{textDecoration:"none",color:"black"}} rel="noopener noreferrer" className="project-link">{project.name}</a>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={8}>
            <Image src={hoveredImage ? hoveredImage :'https://i.pinimg.com/originals/15/bc/1a/15bc1a87577971e7b031a7d7c7140af6.gif'} fluid style={{marginTop:"80px",marginLeft:"100px",borderRadius:"25px", height:"300px",width:"500px"}} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
