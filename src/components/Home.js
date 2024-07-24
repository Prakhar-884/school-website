import React, { useState } from 'react';
import { Carousel, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="bg-light text-center py-4">
        <div className="header-content">
          <img src="/logo.png" alt="Springdale Public School" width="150" />
          <h1>Welcome to Springdale Public School</h1>
          <p>Where we nurture young minds for a brighter future.</p>
          <div className="menu-icon" onClick={toggleMenu}>
            &#9776; {/* Unicode character for the hamburger menu icon */}
          </div>
        </div>
        <div className={`quick-links ${menuOpen ? 'open' : ''}`}>
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/faculty">Faculty</Link></li>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>
      </header>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/sports_day.jpg"
              alt="Sports Day"
            />
            <Carousel.Caption>
              <h3>Annual Sports Day</h3>
              <p>Celebrating Excellence in Sports</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/science_exhibition.jpg"
              alt="Science Exhibition"
            />
            <Carousel.Caption>
              <h3>Science Exhibition</h3>
              <p>Showcasing Student Innovations</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/cultural_fest.jpg"
              alt="Cultural Fest"
            />
            <Carousel.Caption>
              <h3>Cultural Fest</h3>
              <p>Embracing Diversity and Creativity</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Button href="/about-us" variant="primary" className="mt-4">Learn More</Button>
      </Container>
    </div>
  );
}

export default Home;
