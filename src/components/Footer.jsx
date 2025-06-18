import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer somali-gradient sand-texture">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/" className="logo-link">
              <span className="logo-text">BARO</span>
              <span className="star-accent">★</span>
            </Link>
            <p className="logo-description">
              Bridging English and Somali through AI-powered translation
            </p>
          </div>

          <div className="footer-links">
            <h3 className="footer-title somali-blue">Quick Links</h3>
            <ul className="links-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-title somali-blue">Contact Us</h3>
            <p className="contact-info">
              Email: <a href="mailto:support@baroapp.com" className="somali-blue">baroengtosom@gmail.com</a>
            </p>
            <p className="contact-note">
              We're here to help with any questions or feedback!
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} BARO. All rights reserved.
          </p>
        </div>
      </div>

      <style>
        {`
          .footer {
            padding: 60px 0 30px;
            background: linear-gradient(
              180deg,
              #ffffff 0%,
              rgba(65, 137, 221, 0.1) 100%
            );
          }

          .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            margin-bottom: 40px;
          }

          .footer-logo {
            text-align: left;
          }

          .logo-link {
            display: flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            margin-bottom: 15px;
          }

          .logo-text {
            font-size: 24px;
            font-weight: 800;
            color: #4189DD;
          }

          .logo-description {
            color: #666;
            font-size: 0.9rem;
            line-height: 1.6;
          }

          .footer-title {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 20px;
            border-bottom: 2px solid #4189DD;
            padding-bottom: 10px;
          }

          .links-list {
            list-style: none;
            padding: 0;
          }

          .footer-link {
            display: block;
            color: #555;
            text-decoration: none;
            margin-bottom: 10px;
            transition: color 0.3s ease;
          }

          .footer-link:hover {
            color: #4189DD;
          }

          .contact-info {
            color: #555;
            margin-bottom: 10px;
            font-size: 0.9rem;
          }

          .contact-info a {
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .contact-info a:hover {
            color: #5a9de8;
          }

          .contact-note {
            color: #666;
            font-size: 0.9rem;
            font-style: italic;
          }

          .footer-bottom {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid rgba(65, 137, 221, 0.2);
          }

          .copyright {
            color: #666;
            font-size: 0.85rem;
          }

          @media (max-width: 768px) {
            .footer-content {
              grid-template-columns: 1fr;
              text-align: center;
            }

            .footer-logo {
              text-align: center;
            }

            .logo-link {
              justify-content: center;
            }

            .links-list {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;