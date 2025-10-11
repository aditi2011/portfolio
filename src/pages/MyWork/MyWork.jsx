import ScrollVelocity from '../../components/effects/ScrollVelocity';
import GridLines from 'react-gridlines';
import './MyWork.css';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const MyWork = () => {
  const projectRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      projectRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress (0 to 1) as element moves through viewport
        const elementMiddle = rect.top + rect.height / 2;
        const screenMiddle = windowHeight / 2;
        const distance = elementMiddle - screenMiddle;
        
        // Same parallax speed for all cards (downward movement like College Cupid)
        const parallaxSpeed = 0.4;
        const translateY = distance * parallaxSpeed;
        
        // Add subtle scale for depth
        const scale = 1 + Math.abs(distance) / windowHeight * 0.05;
        const finalScale = Math.min(scale, 1.05);
        
        // Apply parallax transform without opacity fade
        ref.style.transform = `translateY(${translateY}px) scale(${finalScale})`;
        ref.style.opacity = '1';
      });
    };

    // Initial call
    handleScroll();
    
    // Add scroll listener with throttling for performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', scrollListener, { passive: true });

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  const handleProjectClick = (caseStudyId) => {
    if (caseStudyId) {
      navigate(`/case-study/${caseStudyId}`);
    }
  };

  const myWorkProjects = [
    {
      id: 1,
      title: 'Staged',
      description: 'An app for managers and artists to seamlessly book gigs.',
      details: [
        'For managers: We build a trustworthy ecosystem where managers can book new artist and venture outside of their known list of artists without trust issues.',
        'For Artists: We give them a stage to present themselves, new to the game or old, everyone gets a fair chance.'
      ],
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/9a88f202799e5a5090012930da7f98fc2efea025?width=1230',
      imagePosition: 'left'
    },
    {
      id: 2,
      title: 'College Cupid',
      description: 'An app for managers and artists to seamlessly book gigs through.',
      details: [
        'For managers: We build a trustworthy ecosystem where managers can book new artist and venture outside of their known list of artists without trust issues.',
        'For Artists: We give them a stage to present themselves, new to the game or old, everyone gets a fair chance.'
      ],
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/d99d94e70887ed052f714946c825424758644ebf?width=1150',
      imagePosition: 'right',
      caseStudyId: 'college-cupid'
    },
    {
      id: 3,
      title: 'Hygo',
      description: 'An app for managers and artists to seamlessly book gigs through.',
      details: [
        'For managers: We build a trustworthy ecosystem where managers can book new artist and venture outside of their known list of artists without trust issues.',
        'For Artists: We give them a stage to present themselves, new to the game or old, everyone gets a fair chance.'
      ],
      gradient: 'linear-gradient(135deg, #36238E 0%, #936DC8 33%, #C2B5FF 66%, #BED836 100%)',
      imagePosition: 'left',
      caseStudyId: 'hygo'
    },
    {
      id: 4,
      title: 'RareLink',
      subtitle: '(Ongoing)',
      description: 'An app for managers and artists to seamlessly book gigs through.',
      details: [
        'For managers: We build a trustworthy ecosystem where managers can book new artist and venture outside of their known list of artists without trust issues.',
        'For Artists: We give them a stage to present themselves, new to the game or old, everyone gets a fair chance.'
      ],
      gradient: 'linear-gradient(135deg, #0033FF 0%, white 50%, #0033FF 100%)',
      imagePosition: 'right'
    }
  ];

  const mentorWorkProjects = [
    {
      id: 1,
      title: 'One Stop - App Redesign',
      description: 'An app for managers and artists to seamlessly book gigs through.',
      placeholder: true
    },
    {
      id: 2,
      title: 'Library Token',
      description: 'An app for managers and artists to seamlessly book gigs through.',
      placeholder: true
    },
    {
      id: 3,
      title: 'No Dues - Dashboard',
      description: 'An app for managers and artists to seamlessly book gigs through.',
      placeholder: true
    }
  ];

  return (
    <div className="my-work" id="my-work">
      
      <section className="work-section">
        {/* <GridLines className="grid-lines" lineColor="rgba(255, 255, 255, 0.1)" cellWidth={74} cellHeight={74}>
        </GridLines> */}
        {/* <ScrollVelocity
          texts={['MY PROJECTS \u00A0\u00A0- \u00A0']} 
          velocity={200}
          stiffness={500}
          numCopies={6}
          className="custom-scroll-text"
        /> */}
        <div className="work-container">
          {myWorkProjects.map((project, index) => (
            <div 
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`project-card ${project.imagePosition === 'right' ? 'reverse' : ''} ${project.caseStudyId ? 'clickable' : ''}`}
              onClick={() => handleProjectClick(project.caseStudyId)}
            >
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : project.gradient ? (
                  <div className="gradient-placeholder" style={{ background: project.gradient }}></div>
                ) : null}
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  {project.subtitle && <p className="subtitle">{project.subtitle}</p>}
                </div>
                <div className="project-details">
                  <p className="description">{project.description}</p>
                  {project.details.map((detail, index) => (
                    <p key={index} className="detail">{detail}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* </GridLines> */}
      </section>

      {/* <section className="mentor-section" id="mentor-work">
        <ScrollVelocity
          texts={['Mentor Work \u00A0\u00A0- \u00A0']} 
          velocity={200}
          stiffness={500}
          numCopies={20}
          className="mentor-scroll-text"
        />
        <div className="mentor-container">
          <p className="mentor-intro">
            As the Product Design Lead at Students' Web Committee (SWC) at IITG I had the opportunity to mentor 7+ projects. Most of which have a user base of 10k+ students
          </p>
          <div className="mentor-grid">
            {mentorWorkProjects.map((project) => (
              <div key={project.id} className="mentor-card">
                <div className="mentor-image">
                  {project.placeholder && <div className="placeholder-bg"></div>}
                </div>
                <div className="mentor-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default MyWork;