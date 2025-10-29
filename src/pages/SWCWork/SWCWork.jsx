import React from 'react';
import HoverImageReveal from '../../components/HoverImageReveal/HoverImageReveal';
import ScrollVelocity from '../../components/effects/ScrollVelocity';
import OneStop from "../../assets/mentor_thumbs/one_stop.png";
import LibToken from "../../assets/mentor_thumbs/lib_token.png";
import DesignSys from "../../assets/mentor_thumbs/design_sys.png";
import NoDues from "../../assets/mentor_thumbs/no_dues.png";
import SAportal from "../../assets/mentor_thumbs/sa_portal.png";

import './SWCWork.css';

const SWCWork = () => {
  const portfolioItems = [
    {
      title: "OneStop",
      description: ["4000+ DAU", "Full App Redesign", "4 new features integrated", "250+ screens"],
      tags: ["2 Mentees", "8 Months"],
      image: OneStop
    },
    {
      title: "Library Token",
      description: ["1000+ DAU", "New Feature", "Digitalization of library tokens"],
      tags: ["2 Mentees", "3 Weeks"],
      image: LibToken
    },
    {
      title: "No Dues",
      description: ["~2000 Users", "Portal integration", "New feature", "For graduating students"],
      tags: ["2 Mentees", "6 Months"],
      image: NoDues
    },
    {
      title: "Design System",
      description: ["Increased recognition", "Faster design hand-offs", "20+ portals and websites integration"],
      tags: ["6 Mentees", "4 Months"],
      image: DesignSys
    },
    {
      title: "SA Portal",
      description: ["4000+ MAU", "Student Affairs Website", "Website Redesign", "50+ screens"],
      tags: ["4 Mentees", "2 Weeks"],
      image: SAportal
    }
  ];

  return (
    <section className="swc-work-section">
      <ScrollVelocity
        texts={['MENTOR PROJECTS \u00A0\u00A0- \u00A0']} 
          velocity={200}
          stiffness={500}
          numCopies={20}
          className="custom-scroll-text"
        />
      <div className="swc-work-container">
        <div className="swc-work-section-description">
          <p>As the Product Design Lead at Students’ Web Committee (SWC) at IITG, I mentored 7+ projects, serving a user base of ~10k students.</p>
        </div>

        <p className="hover-image-reveal-header">Glimpse of the work mentored by me:</p>

        <HoverImageReveal items={portfolioItems} />

      </div>
    </section>
  );
};

export default SWCWork;