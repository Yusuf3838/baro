import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppLogo from '../assets/app_logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar somali-blue-bg">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            <div className="logo-container">
              <img src={AppLogo} alt="BARO Logo" className="logo-image" />
              <span className="logo-text">BARO</span>
            </div>
          </Link>
          
          <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/privacy" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Privacy
            </Link>
            <Link to="/terms" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Terms
            </Link>
          </div>
          
          <button 
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .navbar {
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 15px 0;
        }
        
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .nav-logo {
          text-decoration: none;
        }
        
        .logo-container {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .logo-image {
          height: 60px;
          width: auto;
          object-fit: contain;
        }
        
        .logo-text {
          font-size: 28px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 2px;
        }
        
        .nav-menu {
          display: flex;
          gap: 30px;
          align-items: center;
        }
        
        .nav-link {
          text-decoration: none;
          color: #ffffff;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }
        
        .nav-link:hover {
          color: #ffffff;
          opacity: 0.8;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #ffffff;
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .nav-toggle {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px;
        }
        
        .nav-toggle span {
          width: 25px;
          height: 3px;
          background: #ffffff;
          margin: 3px 0;
          transition: 0.3s;
          border-radius: 2px;
        }
        
        @media (max-width: 768px) {
          .nav-menu {
            position: fixed;
            top: 80px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 80px);
            background: #4189DD;
            flex-direction: column;
            justify-content: flex-start;
            padding-top: 50px;
            transition: left 0.3s ease;
          }
          
          .nav-menu-open {
            left: 0;
          }
          
          .nav-toggle {
            display: flex;
          }
          
          .nav-link {
            font-size: 18px;
            padding: 15px 0;
          }
          
          .logo-image {
            height: 50px;
          }
          
          .logo-text {
            font-size: 24px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;