import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Mic, Globe, Heart } from 'lucide-react';

// Import images from src/assets/
import learn1 from '../assets/learn1.png';
import learn2 from '../assets/learn2.png';
import translate from '../assets/translate.png';
import tts1 from '../assets/tts1.png';
import tts2 from '../assets/tts2.png';
import phrases1 from '../assets/phrases1.png';
import phrases2 from '../assets/phrases2.png';
import appStoreLogo from '../assets/app-store-logo.png';
import playStoreLogo from '../assets/play-store-logo.png';
import appHeader from '../assets/app_header1.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const appScreenshots = [
    { id: 1, title: 'Learn Interface', image: learn1, alt: 'Learn interface showing Somali lessons' },
    { id: 2, title: 'Learn Modes', image: learn2, alt: 'Learn modes with interactive exercises' },
    { id: 3, title: 'Translation', image: translate, alt: 'Translation screen showing English to Somali' },
    { id: 4, title: 'Text-to-Speech', image: tts1, alt: 'TTS screen with Somali speech generation' },
    { id: 5, title: 'Text-to-Speech', image: tts2, alt: 'TTS screen with voice selection' },
    { id: 6, title: 'Dictionary', image: phrases1, alt: 'Dictionary with common Somali phrases' },
    { id: 7, title: 'Dictionary', image: phrases2, alt: 'Dictionary with phrase details' },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % appScreenshots.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + appScreenshots.length) % appScreenshots.length);

  return (
    <div className="home somali-gradient">
      {/* Hero Section */}
      <section className="hero somali-gradient">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Welcome to <img src={appHeader} alt="App Header" className="app-header-image" />
              </h1>
              <p className="hero-subtitle">Your bridge between English and Somali languages</p>
              <p className="hero-description">
                Experience seamless translation with our AI-powered app designed specifically for the Somali community.
                Break language barriers and connect cultures with precision and ease.
              </p>
              <div className="hero-buttons">
                <a href="#download" className="btn btn-primary">
                  Download Now
                </a>
                <Link to="/about" className="btn btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hero-phone">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <img
                    src={appScreenshots[currentSlide].image}
                    alt={appScreenshots[currentSlide].alt}
                    className="screenshot"
                  />
                  <div className="carousel-controls">
                    <button onClick={prevSlide} aria-label="Previous slide" className="carousel-btn">
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={nextSlide} aria-label="Next slide" className="carousel-btn">
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features somali-gradient">
        <div className="container">
          <h2 className="section-title somali-blue">Why Choose Our App?</h2>
          <div className="features-grid">
            <div className="feature-card card">
              <div className="feature-icon star-accent">
                <Star className="w-12 h-12" />
              </div>
              <h3>Accurate Translation</h3>
              <p>AI-powered translation engine specifically trained for Somali language and cultural context.</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon somali-blue">
                <Mic className="w-12 h-12" />
              </div>
              <h3>Voice Support</h3>
              <p>Speak naturally and hear translations with authentic Somali pronunciation.</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon star-accent">
                <Globe className="w-12 h-12" />
              </div>
              <h3>Feature-Rich Content</h3>
              <p>Feature-rich, curated by Somali linguistics experts with deep cultural insights and tailored language resources.</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon somali-blue">
                <Heart className="w-12 h-12" />
              </div>
              <h3>Cultural Context</h3>
              <p>Understanding beyond words, includes cultural meanings and appropriate usage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="download-section somali-gradient">
        <div className="container">
          <div className="download-content">
            <h2 className="download-title star-accent">Download Our App Today</h2>
            <p className="download-subtitle">Join thousands of users connecting English and Somali languages</p>
            <div className="download-buttons">
              <a href="#" className="download-btn">
                <img src={appStoreLogo} alt="Download on App Store" />
              </a>
              <a href="#" className="download-btn">
                <img src={playStoreLogo} alt="Get it on Google Play" />
              </a>
            </div>
            <p className="download-note">Available for iOS and Android devices</p>
          </div>
        </div>
      </section>

      <style>
        {`
          .home {
            background: linear-gradient(135deg, #4189DD, #ffffff);
          }
          
          .somali-gradient {
            background: linear-gradient(135deg, #4189DD, #ffffff);
          }
          
          .hero {
            min-height: 0; /* Remove fixed min-height to allow flexibility */
            height: auto; /* Allow height to adjust based on content */
            display: flex;
            align-items: center;
            padding: 60px 0;
          }
          
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .hero-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
          }
          
          .hero-title {
            font-size: 3.5rem;
            font-weight: 800;
            color: white;
            margin-bottom: 20px;
            line-height: 1.2;
            display: flex;
            align-items: center;
            gap: 10px;
            word-break: break-word; /* Allow text to break and wrap */
          }
          
          .app-header-image {
            height: 200px;
            width: auto;
            max-width: 100%; /* Ensure image scales down on smaller screens */
            object-fit: contain; /* Prevent cropping */
          }
          
          .hero-subtitle {
            font-size: 1.5rem;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 20px;
            font-weight: 300;
          }
          
          .hero-description {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 40px;
            line-height: 1.6;
          }
          
          .hero-buttons {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
          }
          
          .btn {
            padding: 12px 24px;
            border-radius: 30px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
          }
          
          .btn-primary {
            background: #4189DD;
            color: white;
          }
          
          .btn-primary:hover {
            background: #3a7ac9;
            transform: scale(1.05);
          }
          
          .btn-secondary {
            background: transparent;
            border: 2px solid #4189DD;
            color: #4189DD;
          }
          
          .btn-secondary:hover {
            background: #4189DD;
            color: white;
          }
          
          .hero-phone {
            display: flex;
            justify-content: center;
          }
          
          .phone-mockup {
            background: white;
            border-radius: 40px;
            padding: 12px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
            position: relative;
            width: 320px;
            height: 700px;
            max-height: 70vh; /* Limit height on mobile to prevent overflow */
            overflow: hidden;
          }
          
          .phone-screen {
            border-radius: 28px;
            overflow: hidden;
            height: 100%;
            position: relative;
            background: #f0f0f0;
          }
          
          .screenshot {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          
          .carousel-controls {
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-between;
            transform: translateY(-50%);
          }
          
          .carousel-btn {
            background: rgba(255, 255, 255, 0.8);
            border: none;
            border-radius: 50%;
            padding: 10px;
            cursor: pointer;
            transition: background 0.3s ease;
          }
          
          .carousel-btn:hover {
            background: white;
          }
          
          .features {
            padding: 100px 0;
          }
          
          .section-title {
            text-align: center;
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 60px;
          }
          
          .somali-blue {
            color: #4189DD;
          }
          
          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
          }
          
          .feature-card {
            text-align: center;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
          }
          
          .feature-card:hover {
            transform: translateY(-10px);
          }
          
          .feature-icon {
            margin-bottom: 20px;
          }
          
          .star-accent {
            color: #4189DD;
          }
          
          .feature-card h3 {
            color: #333;
            margin-bottom: 15px;
            font-size: 1.3rem;
          }
          
          .feature-card p {
            color: #666;
            line-height: 1.6;
          }
          
          .download-section {
            padding: 80px 0;
          }
          
          .download-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 20px;
            color: white;
          }
          
          .download-subtitle {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 40px;
          }
          
          .download-buttons {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 20px;
            flex-wrap: wrap;
          }
          
          .download-btn img {
            height: 80px;
            transition: transform 0.3s ease;
          }
          
          .download-btn:hover img {
            transform: scale(1.05);
          }
          
          .download-note {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.9rem;
          }
          
          @media (max-width: 768px) {
            .hero-content {
              grid-template-columns: 1fr;
              gap: 40px;
              text-align: center;
            }
            
            .hero-title {
              font-size: 2rem; /* Reduced for mobile */
              flex-wrap: wrap; /* Allow wrapping */
            }
            
            .app-header-image {
              height: 120px; /* Reduced height for mobile */
              max-width: 80%; /* Scale down further */
            }
            
            .hero-subtitle {
              font-size: 1.2rem;
            }
            
            .hero-description {
              font-size: 1rem;
            }
            
            .phone-mockup {
              width: 260px;
              height: 570px;
              max-height: 60vh; /* Further limit height on mobile */
            }
            
            .features-grid {
              grid-template-columns: 1fr;
            }
            
            .download-buttons {
              flex-direction: column;
              align-items: center;
            }
            
            .download-btn img {
              height: 60px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;