import React from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const caseStudies = [
    { id: 'cupid', title: 'College Cupid' },
    { id: 'hygo', title: 'Hygo' },
    { id: 'staged', title: 'Staged' }
  ];

  const quickLinks = [
    { id: 'home', title: 'Home', offset: 40 },
    { id: 'my-work', title: 'My Work', offset: 0 },
    // { id: 'mentor-work', title: 'Mentor Work', offset: 0 },
    { id: 'about-me', title: 'About Me', offset: 0 },
  ];

  const handleCaseStudyClick = (caseStudyId) => {
    // Open case study in a new tab
    const baseUrl = window.location.origin + window.location.pathname;
    window.open(`${baseUrl}#/case-study/${caseStudyId}`, '_blank');
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    smooth={true}
                    duration={1500}
                    offset={link.offset}
                    className="footer-link"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Case Studies</h3>
            <ul className="footer-links">
              {caseStudies.map((study) => (
                <li key={study.id}>
                  <button
                    onClick={() => handleCaseStudyClick(study.id)}
                    className="footer-link footer-button"
                  >
                    {study.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Connect</h3>
            <ul className="footer-links">
              <li>
                <a
                  href="https://www.linkedin.com/in/aditiagrawal20/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:aditi2011agrawal@gmail.com"
                  className="footer-link"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Aditi Agrawal. All rights reserved.
          </p>
          <Link
            to="home"
            smooth={true}
            duration={1500}
            offset={40}
            className="footer-back-to-top"
          >
            Back to Top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
