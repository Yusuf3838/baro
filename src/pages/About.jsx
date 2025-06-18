import React from 'react';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero somali-gradient sand-texture">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title star-accent">About BARO</h1>
            <p className="hero-subtitle">
              Bridging cultures through language, one translation at a time
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="section-title somali-blue">Our Mission</h2>
              <p className="mission-description">
                BARO was born from a simple yet powerful vision: to break down language barriers 
                between English and Somali speakers. We understand that language is more than words, it's 
                culture, identity, and connection.
              </p>
              <p className="mission-description">
                Our name "BARO" means "to learn" in Somali, reflecting our commitment to continuous 
                learning and improvement in serving the global Somali community and those who want 
                to connect with Somali culture and language.
              </p>
            </div>
            <div className="mission-visual">
              <div className="visual-element">
                <div className="flag-inspired">
                  <div className="flag-blue"></div>
                  <div className="flag-star star-accent">★</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story">
        <div className="container">
          <h2 className="section-title somali-blue">Our Story</h2>
          <div className="story-timeline">
            <div className="timeline-item card">
              <div className="timeline-icon somali-blue">💡</div>
              <h3>The Idea</h3>
              <p>
                Recognizing the need for accurate, culturally-aware translation between English and Somali, 
                our team set out to create something special a translator that understands context and 
                culture.
              </p>
            </div>
            <div className="timeline-item card">
              <div className="timeline-icon star-accent">🔬</div>
              <h3>Research & Development</h3>
              <p>
                We partnered with Somali linguists, cultural experts, and software specialists to develop 
                our proprietary translation engine. Months of training data collection and algorithm 
                refinement followed.
              </p>
            </div>
            <div className="timeline-item card">
              <div className="timeline-icon somali-blue">🚀</div>
              <h3>Launch</h3>
              <p>
                BARO launched with the goal of serving diaspora communities, students, business professionals, 
                and anyone interested in connecting with Somali language and culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="features-deep somali-gradient sand-texture">
        <div className="container">
          <h2 className="section-title star-accent">What Makes BARO Special</h2>
          <div className="features-list">
            <div className="feature-item card">
              <h3 className="feature-title">Cultural Intelligence</h3>
              <p>
                Beyond literal translation, BARO understands cultural contexts, idioms, and 
                appropriate usage in different social situations.
              </p>
            </div>
            <div className="feature-item card">
              <h3 className="feature-title">Dialectal Awareness</h3>
              <p>
                Recognizing that Somali has regional variations, our app accounts for different 
                dialects and provides contextually appropriate translations.
              </p>
            </div>
            <div className="feature-item card">
              <h3 className="feature-title">Community-Driven</h3>
              <p>
                We continuously improve through feedback from our user community, ensuring 
                our translations remain accurate and relevant.
              </p>
            </div>
            <div className="feature-item card">
              <h3 className="feature-title">Educational Focus</h3>
              <p>
                Not just translation, but learning. BARO helps users understand grammar patterns, 
                pronunciation, and language structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2 className="section-title somali-blue">Our Commitment</h2>
          <div className="commitment-grid">
            <div className="commitment-item">
              <div className="commitment-icon star-accent">🎯</div>
              <h3>Accuracy</h3>
              <p>Every translation is crafted with precision and cultural sensitivity</p>
            </div>
            <div className="commitment-item">
              <div className="commitment-icon somali-blue">🔒</div>
              <h3>Privacy</h3>
              <p>Your conversations and translations remain private and secure</p>
            </div>
            <div className="commitment-item">
              <div className="commitment-icon star-accent">🌍</div>
              <h3>Community</h3>
              <p>Building bridges between cultures and fostering understanding</p>
            </div>
            <div className="commitment-item">
              <div className="commitment-icon somali-blue">📈</div>
              <h3>Growth</h3>
              <p>Continuously evolving with user feedback and technological advances</p>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          .about-hero {
            padding: 80px 0;
            text-align: center;
          }
          
          .hero-title {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 20px;
            color: rgba(0, 112, 247, 0.9);
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
            color: rgba(0, 112, 247, 0.9);
            max-width: 600px;
            margin: 0 auto;
          }
          
          .mission {
            padding: 80px 0;
            background: linear-gradient(135deg, #f8f9fa, #ffffff);
          }
          
          .mission-content {
            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 60px;
            align-items: center;
          }
          
          .section-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 20px;
            border-bottom: 2px solid #4189DD;
            padding-bottom: 10px;
          }
          
          .mission-description {
            font-size: 1.1rem;
            line-height: 1.8;
            margin-bottom: 20px;
            color: #555;
          }
          
          .visual-element {
            display: flex;
            justify-content: center;
          }
          
          .flag-inspired {
            width: 200px;
            height: 200px;
            position: relative;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(65, 137, 221, 0.3);
          }
          
          .flag-blue {
            width: 100%;
            height: 100%;
            background: #4189DD;
          }
          
          .flag-star {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3rem;
          }
          
          .story {
            padding: 80px 0;
            background: #ffffff;
          }
          
          .story-timeline {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-top: 40px;
          }
          
          .timeline-item {
            text-align: center;
            transition: transform 0.3s ease;
          }
          
          .timeline-item:hover {
            transform: translateY(-10px);
          }
          
          .timeline-icon {
            font-size: 2.5rem;
            margin-bottom: 20px;
          }
          
          .timeline-item h3 {
            color: #333;
            margin-bottom: 15px;
            font-size: 1.3rem;
          }
          
          .timeline-item p {
            color: #666;
            line-height: 1.6;
          }
          
          .features-deep {
            padding: 80px 0;
            text-align: center;
          }
          
          .features-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-top: 40px;
          }
          
          .feature-item {
            transition: transform 0.3s ease;
          }
          
          .feature-item:hover {
            transform: translateY(-5px);
          }
          
          .feature-title {
            color: #333;
            margin-bottom: 15px;
            font-size: 1.3rem;
          }
          
          .feature-item p {
            color: #666;
            line-height: 1.6;
          }
          
          .team {
            padding: 80px 0;
            background: linear-gradient(135deg, #f8f9fa, #ffffff);
          }
          
          .commitment-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 30px;
            margin-top: 40px;
          }
          
          .commitment-item {
            text-align: center;
          }
          
          .commitment-icon {
            font-size: 2.5rem;
            margin-bottom: 20px;
          }
          
          .commitment-item h3 {
            color: #333;
            margin-bottom: 15px;
            font-size: 1.3rem;
          }
          
          .commitment-item p {
            color: #666;
            line-height: 1.6;
          }
          
          @media (max-width: 768px) {
            .hero-title {
              font-size: 2.5rem;
            }
            
            .mission-content {
              grid-template-columns: 1fr;
              gap: 40px;
              text-align: center;
            }
            
            .flag-inspired {
              width: 150px;
              height: 150px;
              margin: 0 auto;
            }
            
            .story-timeline {
              grid-template-columns: 1fr;
            }
            
            .features-list {
              grid-template-columns: 1fr;
            }
            
            .commitment-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;