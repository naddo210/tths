import { useState, useEffect } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import Reviews from '../components/Reviews';
import Services from './Services';
import Contact from './Contact';
import Packages from './Packages';
import VideoGallery from '../components/VideoGallery';
import About from './About';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1558261537-8fcffa3479c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhhamp8ZW58MHx8MHx8fDA%3D",
      alt: "Kaaba"
    },
    {
      image: "https://images.pexels.com/photos/18996539/pexels-photo-18996539/free-photo-of-pilgrims-praying-in-front-of-kaaba-in-the-great-mosque-of-mecca.jpeg",
      alt: "Mecca"
    },
    {
      image: "https://images.unsplash.com/photo-1720195899208-d5555176d1d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhhamp8ZW58MHx8MHx8fDA%3D",
      alt: "Medina"
    },
    {
      image: "https://images.unsplash.com/photo-1676607186575-45f0b8afde74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGhhamp8ZW58MHx8MHx8fDA%3D",
      alt: "Medina"
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1661964206630-6f0e8b767348?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhhamp8ZW58MHx8MHx8fDA%3D",
      alt: "Medina"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="home">
      <div className="hero">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-label={slide.alt}
          />
        ))}

        <div className="hero-content">
          <Container maxWidth="md">
            <Typography variant="h1" component="h1" className="hero-title">
              <span className="awal">Embark</span> on Your Sacred <span className="awal">Journey</span>
            </Typography>
            <Typography variant="h5" className="hero-subtitle">
              Let us guide you through a transformative spiritual experience with our premium <span className="awal">Hajj</span> and <span className="awal">Umrah</span> services.
            </Typography>
            <Box mt={4}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className="cta-button"
              >
                Start Your Journey Today
              </Button>
            </Box>
          </Container>
        </div>
      </div>

      <Box id="packages" sx={{ py: 8 }}>
        <Packages />
      </Box>
      <Box id="about" sx={{ py: 8 }}>
        <About />
      </Box>

      <Box id="services" sx={{ py: 8 }}>
        <Services />
      </Box>

      <Box id="reviews" sx={{ py: 8 }}>
        <Reviews />
      </Box>

      <Box id="videos" sx={{ py: 8 }}>
        <VideoGallery />
      </Box>

      <Box id="contact" sx={{ py: 8 }}>
        <Contact />
      </Box>
    </div>
  );
};

export default Home;
