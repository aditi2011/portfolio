import ScrollVelocity from '../../components/effects/ScrollVelocity';
import GridLines from 'react-gridlines';
import StagedThumb from '../../assets/project_thumbs/staged_thumb.jpg';
import CupidThumb from '../../assets/project_thumbs/cupid_thumb.jpg';
import HygoThumb from '../../assets/project_thumbs/hygo_thumb.jpg';
import RarelinkThumb from '../../assets/project_thumbs/rarelink_thumb.jpg';
import CupidVideo from '../../assets/project_thumbs/vids/cupid.mp4';
// import RarelinkThumb from '../../assets/project_thumbs/rarelink_thumb.jpg';
import './MyWork.css';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { image } from 'framer-motion/client';

const MyWork = () => {
  const projectRefs = useRef([]);
  const videoRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Trigger when 30% of the video is visible
      rootMargin: '0px'
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        
        if (entry.isIntersecting) {
          // Reset video to beginning and play when it comes into view
          video.currentTime = 0;
          video.play().catch(err => console.log('Video play error:', err));
        } else {
          // Pause video when out of view
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all video elements
    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  const handleProjectClick = (caseStudyId, externalLink) => {
    if (externalLink) {
      // Open external link in a new tab
      window.open(externalLink, '_blank');
    } else if (caseStudyId) {
      // Open case study in a new tab
      const baseUrl = window.location.origin + window.location.pathname;
      window.open(`${baseUrl}#/case-study/${caseStudyId}`, '_blank');
    }
  };

  const myWorkProjects = [
    {
      id: 1,
      idName: 'staged',
      title: 'Staged',
      // description: 'An app for managers and artists to seamlessly book gigs.',
      details: [
        // 'For managers: We build a trustworthy ecosystem where managers can book new artist and venture outside of their known list of artists without trust issues.',
        // 'For Artists: We give them a stage to present themselves, new to the game or old, everyone gets a fair chance.'
        "An artist gig booking platform designed for Guwahati's live music scene, where 85% of independent artists struggle with irregular gigs while venue managers can't trust unknown talent. The app builds verified profiles and automatic scheduling to transform a fragmented ecosystem into a thriving creative community."
      ],
      // image: 'https://api.builder.io/api/v1/image/assets/TEMP/9a88f202799e5a5090012930da7f98fc2efea025?width=1230',
      image: StagedThumb,
      imagePosition: 'left',
      caseStudyId: 'staged'
    },
    {
      id: 2,
      idName: 'cupid',
      title: 'College Cupid',
      // description: 'An app for managers and artists to seamlessly book gigs through.',
      details: [
        // 'For managers: We build a trustworthy ecosystem where managers can book new artist and venture outside of their known list of artists without trust issues.',
        // 'For Artists: We give them a stage to present themselves, new to the game or old, everyone gets a fair chance.'
        "Redesigned College Cupid, a campus-only dating app that opens during events like Valentine's Day and prom to help students connect meaningfully. The initial rushed version saw poor engagement; my redesign improved experience, authenticity, and usability, increasing monthly active users to over 4,000."
      ],
      // image: 'https://api.builder.io/api/v1/image/assets/TEMP/d99d94e70887ed052f714946c825424758644ebf?width=1150',
      image: CupidThumb,
      video: CupidVideo,
      imagePosition: 'right',
      caseStudyId: 'cupid'
    },
    {
      id: 3,
      idName: 'hygo',
      title: 'Hygo',
      // description: 'An app for managers and artists to seamlessly book gigs through.',
      details: [
        // 'For managers: We build a trustworthy ecosystem where managers can book new artist and venture outside of their known list of artists without trust issues.',
        // 'For Artists: We give them a stage to present themselves, new to the game or old, everyone gets a fair chance.'
        "Designed HyGo’s landing website to educate users and enable online sales through clean, trust-driven UI. HyGo is a sustainable hygiene startup offering one-time-use, flushable toilet seat covers made from biodegradable waste like cotton residue and water hyacinth, addressing poor public washroom hygiene across India’s ₹200 Cr market."
      ],
      gradient: 'linear-gradient(135deg, #36238E 0%, #936DC8 33%, #C2B5FF 66%, #BED836 100%)',
      image: HygoThumb,
      imagePosition: 'left',
      caseStudyId: 'hygo'
    },
    {
      id: 4,
      idName: 'rarelink',
      title: 'RareLink',
      subtitle: '(Ongoing)',
      // description: 'An app for managers and artists to seamlessly book gigs through.',
      details: [
        // 'For managers: We build a trustworthy ecosystem where managers can book new artist and venture outside of their known list of artists without trust issues.',
        // 'For Artists: We give them a stage to present themselves, new to the game or old, everyone gets a fair chance.'
        "Designed a community platform for people with rare diseases, addressing the lack of peer support, verified information, and accessible specialists. Through research, surveys, and user interviews, I defined features like peer-led forums, symptom tracking, and AI-assisted support to foster trust, connection, and mental well-being among patients and caregivers."
      ],
      gradient: 'linear-gradient(135deg, #0033FF 0%, white 50%, #0033FF 100%)',
      image: RarelinkThumb,
      imagePosition: 'right',
      externalLink: 'https://drive.google.com/drive/folders/162huQ2yjEcXI7U3GDOkH5pKjtKb67wgH?usp=drive_link'
    }
  ];

  // const mentorWorkProjects = [
  //   {
  //     id: 1,
  //     title: 'One Stop - App Redesign',
  //     description: 'An app for managers and artists to seamlessly book gigs through.',
  //     placeholder: true
  //   },
  //   {
  //     id: 2,
  //     title: 'Library Token',
  //     description: 'An app for managers and artists to seamlessly book gigs through.',
  //     placeholder: true
  //   },
  //   {
  //     id: 3,
  //     title: 'No Dues - Dashboard',
  //     description: 'An app for managers and artists to seamlessly book gigs through.',
  //     placeholder: true
  //   }
  // ];

  return (
    <div className="my-work" id="my-work">
      
      <section className="work-section">
        <GridLines className="grid-lines" lineColor="rgba(255, 255, 255, 0.1)" cellWidth={168} cellHeight={167}>
        </GridLines>
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
              id={project.idName}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`project-card ${project.imagePosition === 'right' ? 'reverse' : ''} ${project.caseStudyId || project.externalLink ? 'clickable' : ''}`}
              onClick={() => handleProjectClick(project.caseStudyId, project.externalLink)}
            >
              <div className="project-image">
                {project.video ? (
                  <video 
                    ref={(el) => {
                      if (el && !videoRefs.current.includes(el)) {
                        videoRefs.current.push(el);
                      }
                    }}
                    muted 
                    loop 
                    playsInline
                    className="project-video"
                    poster={project.image}
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                ) : project.image ? (
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