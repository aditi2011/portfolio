import AE from '../../assets/icons/ae.png';
import PS from '../../assets/icons/ps.png';
import AI from '../../assets/icons/ai.png';
import PR from '../../assets/icons/pr.png';
import Figma from '../../assets/icons/figma.png';
import Framer from '../../assets/icons/f.png';
import XD from '../../assets/icons/xd.png';
import Webflow from '../../assets/icons/w.png';

import './AboutMe.css';

const AboutMe = () => {
  const skills = [
    { name: 'Figma', icon: Figma },
    { name: 'Adobe XD', icon: XD },
    { name: 'Photoshop', icon: PS },
    { name: 'Illustrator', icon: AI },
    // { name: 'After Effects', icon: AE },
    { name: 'Premiere Pro', icon: PR },
    { name: 'Framer', icon: Framer },
    { name: 'Webflow', icon: Webflow },
  ];

  return (
    <section className="about-me-section" id="about-me">
      <div className="about-me-container">
        <div className="about-me-content">
          <div className="about-me-text">
            <h2 className="about-me-heading">About Me</h2>
            <p className="about-me-description">
              I'm a passionate Product Designer with a keen eye for detail and a love for creating 
              seamless user experiences. I've worked on 
              projects ranging from mobile apps to enterprise dashboards, always striving to balance 
              aesthetics with functionality.
            </p>
            <p className="about-me-description">
              I believe the best solutions come from truly understanding people; their struggles, motivations, and the context of their lives. Whether I'm sketching ideas, diving into user research, or prototyping solutions, I'm driven by the possibility of creating something that genuinely makes someone's day a little easier.
              {/* Today, as the Lead Product Designer at SWC IITG, I believe the best solutions come from truly understanding people; their struggles, motivations, and the context of their lives. */}
               {/* Whether I'm sketching ideas, diving into user research, or prototyping solutions, I'm driven by the possibility of creating something that genuinely makes someone's day a little easier */}
            </p>
            
            <div className="skills-section">
              {/* <h3 className="skills-heading">Tools & Skills</h3> */}
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    {/* <span className="skill-icon">{skill.icon}</span> */}
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="about-me-image">
            <div className="image-placeholder">
              <span>Your Photo Here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
