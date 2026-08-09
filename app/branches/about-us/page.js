"use client";

import Link from "next/link";
import "./about-us.css"; 

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Etienne Niyokuri",
      position: "Founder & CEO",
      description: ".",
      imgPlaceholder: "👤",
    },
    {
      name: "",
      position: "Maternal & Child Health coordinator",
      description: "Oversight of clinical outreach workflows, prenatal workshops, and mother care networks.",
      imgPlaceholder: "👤",
    },
    {
      name: "",
      position: "ASRHR & Peer Education coordinator",
      description: "Coordinates community-based ASRHR programs.",
      imgPlaceholder: "👤",
    },
    {
      name: "",
      position: "Mental Health Coordinator",
      description: "Develops emotional wellbeing structures and family resilience initiatives.",
      imgPlaceholder: "👤",
    },

      {
      name: "",
      position: "Early Childhood Education & Development Skills coordinator",
      description: "",
      imgPlaceholder: "👤",
    },
      {
      name: "",
      position: "Monitoring & Evaluation Officer",
      description: "",
      imgPlaceholder: "👤",
    },

      {
      name: "",
      position: "Finance & Administration Officer",
      description: "",
      imgPlaceholder: "👤",
    },
       {
      name: "",
      position: "Volunteers & Interns",
      description: "",
      imgPlaceholder: "👤",
    },
  ];

  return (
    <div className="aboutPageWrapper">

      <section className="aboutHeroGrid">
        <div className="heroLeftColumn">
          <p className="eyebrowLabel">HOW WE HELP</p>
          <h1 className="mainHeroTitle">
            About Steve Foundation, <span className="highlightText fontItalic">bridging the gap in maternal health and youth reproductive rights.</span>
          </h1>
        </div>
        <div className="heroRightColumn">
          <p className="heroDescriptionText">
            Steve Foundation is a non-profit organization dedicated to connecting care, knowledge, and opportunity to build a healthy, empowered generation. We work at the intersection of maternal health, mental wellness, adolescent sexual and reproductive health, and child education — because lasting change happens when these areas are addressed together, not in isolation.
          </p>
          <div className="visionCallout">
            <strong>Our Vision:</strong> Empowered mothers, informed youth, stronger communities, and a brighter future.
          </div>
        </div>
      </section>

      <section className="pillarsSection">
        <h2 className="sectionMainHeader">What We Do</h2>
        <p className="sectionSubtitle">We focus on four interconnected pillars:</p>
        
        <div className="pillarsResponsiveGrid">
          <div className="pillarCard cardTealBg">
            <span className="indicatorBar barTeal"></span>
            <h3>Maternal & Child Health</h3>
            <p>Supporting mothers and children through every stage — from pregnancy and birth through early childhood — with access to quality care, education, and resources that give every family a strong start.</p>
          </div>

          <div className="pillarCard cardAmberBg">
            <span className="indicatorBar barAmber"></span>
            <h3>Mental Health</h3>
            <p>Recognizing that emotional and psychological wellbeing is as vital as physical health, we provide support and awareness programs that help individuals and families navigate life's challenges with resilience.</p>
          </div>

          <div className="pillarCard cardCoralBg">
            <span className="indicatorBar barCoral"></span>
            <h3>Adolescent Sexual & Reproductive Health</h3>
            <p>Equipping young people with accurate information, resources, and rights-based education so they can make informed decisions about their bodies and futures — free from stigma and misinformation.</p>
          </div>

          <div className="pillarCard cardGreenBg">
            <span className="indicatorBar barGreen"></span>
            <h3>Child Education & Developmental Skills</h3>
            <p>Investing in the next generation through programs that nurture learning, growth, and the practical skills children need to thrive.</p>
          </div>
        </div>
      </section>
      <section className="approachSection">
        <div className="approachContainer">
          <h2 className="sectionMainHeader">Our Approach</h2>
          <p className="approachBodyText">
            Steve Foundation exists to close gaps — between mothers and the care they deserve, between young people and the knowledge that protects them, and between communities and the resources that help them flourish. We believe that when maternal health, mental health, reproductive rights, and education are addressed as a connected whole, entire communities rise stronger.
          </p>
        </div>
      </section>

      <section className="teamSection">
        <h2 className="sectionMainHeader">Meet Our Team</h2>
        <p className="sectionSubtitle">The dedicated individuals guiding our mission on the ground.</p>
        
        <div className="teamGrid">
          {teamMembers.map((member, index) => (
            <div key={index} className="teamCard">
              <div className="imagePlaceholderBox">
                <span className="avatarSymbol">{member.imgPlaceholder}</span>
              </div>
              <div className="teamInfoDetails">
                <h3 className="memberName">{member.name}</h3>
                <span className="memberTitlePosition">{member.position}</span>
                <p className="memberShortDescription">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
