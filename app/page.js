"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "What we do", id: "what-we-do" },
  { label: "Our purpose", id: "our-purpose" },
  { label: "About us", id: "about-us" },
  { label: "Our research", id: "our-research" },
  { label: "Events", id: "events" },
];

function Header({ activeTab, setActiveTab }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <button 

          className="logo-btn" 
          aria-label="Go to Home"
        >
          <img
              src="/logo-img.jpg"
              alt="Steve & Michael consutlutation logo"
              style={{ width: "130px", height: "110px", borderRadius: "8px", objectFit: "cover", background: "#fff" }}
            />
        </button>

        <nav className="nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`nav-item${activeTab === item.id ? " active" : ""}`}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <a 
            href="https://www.linkedin.com/company/steve-michael-consulting-group/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="header-linkedin-link"
            aria-label="Visit our LinkedIn Profile"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
}

function PlaceholderImage({ label, tone = "white" }) {
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecondImage((prev) => !prev);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`card-image-container placeholder-${tone} floating-anim`} style={{ position: 'relative' }}>
      {/* First Image */}
      <img
        src="/anim.png"
        alt={label}
        className="card-image-element"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: showSecondImage ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />
      <img
        src="/anim2.png"
        alt={label}
        className="card-image-element"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          opacity: showSecondImage ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />

      <span className="placeholder-label">
        {label}
        <br />
        <span className="placeholder-sub"> </span>
      </span>
    </div>
  );
}

function ImageTextRow({ eyebrow, title, body, imageLabel, tone = "white", reverse = false }) {
  return (
    <div className={`image-text-row${reverse ? " reverse" : ""}`}>
      <PlaceholderImage label={imageLabel} tone={tone} />
      <div>
        <p className={`eyebrow eyebrow-${tone}`}>{eyebrow}</p>
        <h2 className="row-title">{title}</h2>
        <p className="row-body">{body}</p>
      </div>
    </div>
  );
}

function FolderCard({ title, description, href, tone = "purple" }) {
  return (
    <Link href={href || "#"} className="folder-card">
      <span className={`folder-tab folder-tab-${tone}`} aria-hidden="true" />
      <div className="folder-body">
        <h3 className="folder-title">{title}</h3>
        <p className="folder-desc">{description}</p>
        <span className="folder-link">more info →</span>
      </div>
    </Link>
  );
}


function HeroSection({ setActiveTab }) {
  return (
    <section className="main-hero-section">
      <div className="main-hero-inner">
        <div className="hero-tag-badge">
          <span className="badge-dot" />
          PUBLIC HEALTH • SOCIAL ENTERPRISE • EST. 2023
        </div>
        <h1 className="main-hero-title">
          Building <span className="highlight-text">resilient</span> health systems for the future
        </h1>
        <p className="main-hero-description">
          We collaborate with governments, NGOs, and academic institutions to design 
          sustainable public health solutions — powered by research, technology, and measurable impact.
        </p>
        <div className="hero-action-buttons">
          <button 
            onClick={() => setActiveTab("what-we-do")} 
            className="btn-primary"
            style={{ border: "none", cursor: "pointer", textAlign: "center" }}
          >
            Explore our services →
          </button>
          <button 
            onClick={() => setActiveTab("our-research")} 
            className="btn-secondary"
            style={{ cursor: "pointer", textAlign: "center" }}
            colour="navy blue"
          >
            See our impact
          </button>
        </div>
      </div>
    </section>
  );
}

function CounterItem({ config }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = config.target;
    if (start === end) return;
    const duration = 1500;
    const incrementTime = Math.max(Math.floor(duration / end), 15);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, incrementTime);
    return () => clearInterval(timer);
  }, [config.target]);

  return (
    <div className="scope-stat-item">
      <span className="scope-stat-number">
        {config.prefix || ""}{count}{config.suffix}
      </span>
      <span className="scope-stat-label">{config.label}</span>
    </div>
  );
}

function ScopeSection() {
  const statsConfig = [
    { target: 40, suffix: "+", label: "Projects delivered" },
    { target: 3, suffix: "", label: "Countries reached" },
    { target: 30, suffix: "K+", prefix: "$", label: "Grants secured" },
  ];
  const tags = ["Digital Health", "AI in Healthcare", "Capacity Building of Health care professionals", "Consulting", "Social Impact Enterprise/Health", "Grant & proposal Writing", "Nutrition & food Systems"];

  return (
    <section className="scope-section">
      <div className="scope-card">
        <div className="scope-bg-circle-top" />
        <div className="scope-bg-circle-bottom" />
        <p className="scope-eyebrow">OUR SCOPE OF WORK</p>
        <h2 className="scope-title">From research <br /> to real-world impact</h2>
        <div className="scope-stats-grid">
          {statsConfig.map((config, index) => (
            <CounterItem key={index} config={config} />
          ))}
        </div>
        <div className="scope-tags-flex">
          {tags.map((tag, index) => (
            <span key={index} className="scope-tag">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner-grid">
        <div className="footer-brand-col">
          <div className="footer-logo-wrapper">
            <h3 className="footer-brand-title">Steve & Michael<br />Consulting Group</h3>
          </div>
          <p className="footer-brand-desc">A public health–focused social enterprise committed to advancing health practice through innovation, research, and strategic capacity building.</p>
        </div>
        <div className="footer-links-wrapper">
          <div className="footer-link-group">
            <span className="footer-group-heading">Contact</span>
            <Link href="/contact" className="footer-nav-link">Get in touch</Link>
           <Link href="mailto:steve.michael@consultant.com" className="footer-nav-link">
  steve.michael@consultant.com
</Link>

          </div>
        </div>
      </div>
      <div className="footer-bottom-bar">
        <p>© {new Date().getFullYear()} Steve & Michael Consulting Group. All rights reserved.</p>
      </div>
    </footer>
  );
}

function WhatWeDoView() {
  const foldersData = [
    { title: "AI and Digital Healthcare", description: "Integrating next-generation intelligence mechanisms, machine learning diagnostics, and advanced secure database workflows directly into local healthcare clinic operations.", tone: "purple" },
    { title: "Grant & Proposal Writing", description: "Securing capital requirements through competitive research, pipeline tracking, structural proposal design, and metric verification frameworks for international NGOs.", tone: "green" },
    { title: "Healthcare Professional Capacity Building", description: "Empowering frontline physicians, operational clinic leaders, and technicians with systemic on-site educational workshops and modern medical handling frameworks.", tone: "pink" },
    { title: "Nutrition & Food Systems", description: "Designing regional dietary defense programs, community monitoring pipelines, and nutritional supply chains to combat regional resource scarcity.", tone: "purple" },
  { title: "Consulting", description: "Our consulting service helps health systems modernize their workforce, improve care quality, and integrate cultural competency. We deliver targeted technical assistance and training to help your organization thrive", tone: "green" },
  { title: "Social Impact Enterprise/Health", description: "Advancing public health through innovative social enterprise models and community-driven health initiatives.", tone: "purple" }
  ];

    return (
    <div style={{ backgroundColor: "#dad9d9", animation: "fadeIn 0.4s ease" }}>
      <div className="home-marquee-container">
        <div className="home-marquee-track">
          <span>WE PROVIDE CONSULTING ON PUBLIC HEALTH • WE PROVIDE CONSULTING ON PUBLIC HEALTH • </span>
          <span>WE PROVIDE CONSULTING ON PUBLIC HEALTH • WE PROVIDE CONSULTING ON PUBLIC HEALTH • </span>
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "5rem auto", padding: "0 2rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          {foldersData.map((folder, index) => (
            <div 
              key={index} 
              className="home-vertical-row" 
              style={{ display: "flex", gap: "3rem", alignItems: "center", flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
            >
              <div style={{ flex: 1, minHeight: "220px" }}>
                <FolderCard title={folder.title} description={folder.description} href="#" tone={folder.tone} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.75rem", color: "#0cc81f", marginBottom: "1rem", fontWeight: "700" }}>{folder.title}</h3>
                <p style={{ color: "#4a5568", lineHeight: "1.6", fontSize: "1.05rem" }}>{folder.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OurPurpose() {
  return (

    <div className="about-container" style={{ padding: "80px 20px", backgroundColor: "#f4eeee", color: "#111827", minHeight: "100vh" }}>
      <div className="about-content-wrapper" style={{ maxWidth: "1000px", margin: "0 auto" }}>
        

        <div style={{ textAlign: "center", marginBottom: "50px" }}>

          <span className="about-eyebrow" style={{ color: "#00C334", fontWeight: "600", letterSpacing: "1.5px" }}>
            OUR PURPOSE & PHILOSOPHY
          </span>
          <h1 className="about-main-title" style={{ fontSize: "2.5rem", marginTop: "10px", fontWeight: "700", color: "#0f172a" }}>
            Why Social Impact Matters — <span style={{ color: "#00C334", fontStyle: "italic" }}>Now More Than Ever</span>
          </h1>
          <p className="about-card-text" style={{ fontSize: "1.15rem", opacity: 0.85, maxWidth: "700px", margin: "20px auto 0", color: "#334155" }}>
            In today’s rapidly evolving world, social impact is no longer optional — it’s essential.
          </p>
        </div>
        <div className="about-glass-card" style={{ padding: "30px", marginBottom: "40px", backgroundColor: "rgba(0, 0, 0, 0.02)", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "12px" }}>
          <p className="about-card-text" style={{ fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "20px", color: "#334155" }}>
            Health systems are under pressure. Communities face widening inequities. Technology is advancing faster than many institutions can adapt. In this environment, organizations have a responsibility to go beyond service delivery and focus on sustainable, measurable change.
          </p>
          <div style={{ borderTop: "1px solid rgba(0, 0, 0, 0.1)", margin: "20px 0" }} />
          <p className="about-card-text" style={{ fontSize: "1.1rem", fontWeight: "500", color: "#0f172a" }}>
            At <span style={{ color: "#00C334", fontWeight: "700" }}>Steve & Michael Consulting Group</span>, we believe social impact means strengthening the foundations of public health — not just responding to crises, but building resilient systems that prevent them.
          </p>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "25px", borderBottom: "1px solid rgba(0, 0, 0, 0.1)", paddingBottom: "10px", color: "#0f172a" }}>
          Social impact matters because:
        </h2>
        
        <div className="about-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "40px" }}>
          
          <div className="about-glass-card" style={{ padding: "24px", margin: "0", backgroundColor: "rgba(0, 0, 0, 0.02)", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <span style={{ fontSize: "1.5rem" }}>🏥</span>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "600", margin: "0", color: "#0f172a" }}>Stronger Health Systems Save Lives</h3>
            </div>
            <p className="about-card-text" style={{ fontSize: "0.95rem", opacity: 0.85, lineHeight: "1.5", color: "#475569" }}>
              When we invest in capacity building, digital health solutions, and AI-driven decision support, we empower health professionals and institutions to deliver better, faster, and more equitable care.
            </p>
          </div>

          <div className="about-glass-card" style={{ padding: "24px", margin: "0", backgroundColor: "rgba(0, 0, 0, 0.02)", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <span style={{ fontSize: "1.5rem" }}>⚡</span>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "600", margin: "0", color: "#0f172a" }}>Innovation Must Be Equitable</h3>
            </div>
            <p className="about-card-text" style={{ fontSize: "0.95rem", opacity: 0.85, lineHeight: "1.5", color: "#475569" }}>
              Technology in healthcare is powerful — but only if it’s accessible. Bridging the gap between research and practice ensures that innovation benefits all communities, not just a few.
            </p>
          </div>

          <div className="about-glass-card" style={{ padding: "24px", margin: "0", backgroundColor: "rgba(0, 0, 0, 0.02)", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <span style={{ fontSize: "1.5rem" }}>📊</span>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "600", margin: "0", color: "#0f172a" }}>Evidence Drives Sustainable Change</h3>
            </div>
            <p className="about-card-text" style={{ fontSize: "0.95rem", opacity: 0.85, lineHeight: "1.5", color: "#475569" }}>
              Data-driven strategies and rigorous research allow organizations to design programs that are not only effective, but scalable and sustainable.
            </p>
          </div>
          <div className="about-glass-card" style={{ padding: "24px", margin: "0", backgroundColor: "rgba(0, 0, 0, 0.02)", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <span style={{ fontSize: "1.5rem" }}>🤝</span>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "600", margin: "0", color: "#0f172a" }}>Collaboration Multiplies Impact</h3>
            </div>
            <p className="about-card-text" style={{ fontSize: "0.95rem", opacity: 0.85, lineHeight: "1.5", color: "#475569" }}>
              Working alongside governments, NGOs, academic institutions, and health organizations creates shared ownership — and shared progress.
            </p>
          </div>

        </div>

        <div className="about-glass-card" style={{ padding: "30px", borderLeft: "4px solid #086f55", marginBottom: "40px", backgroundColor: "rgba(8, 111, 85, 0.04)" }}>
          <p className="about-card-text" style={{ fontSize: "1.05rem", lineHeight: "1.6", margin: "0", color: "#1e293b" }}>
            As a public health–focused social enterprise, we reinvest our expertise into initiatives that expand access to health innovation and strengthen population well-being. For us, social impact isn’t a side initiative — it’s embedded in every research project, grant proposal, digital solution, and partnership we build.
          </p>
        </div>

        <div style={{ textAlign: "center", paddingTop: "20px", borderTop: "1px solid rgba(0, 0, 0, 0.1)" }}>
          <p className="about-card-text" style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "10px", color: "#334155" }}>
            The future of public health depends on organizations willing to combine innovation with purpose.
          </p>
          <p style={{ color: "#00C334", fontWeight: "700", fontSize: "0.95rem", letterSpacing: "1px" }}>
            SOCIAL IMPACT MATTERS BECAUSE HEALTHIER COMMUNITIES CREATE STRONGER SOCIETIES.
          </p>
        </div>

      </div>
    </div>
  );
}

function AboutUsView() {
  return (
    <div className="about-container">
      <style>{`
        @keyframes scrollLeftToRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>

      <div className="about-hero-backdrop">
        <div className="about-dark-overlay" />
        
        <div className="about-content-wrapper">
          <span className="about-eyebrow">ABOUT OUR FIRM</span>
          <h1 className="about-main-title">Welcome to Steve & Michael Consulting Group</h1>
          
          <div className="about-cards-grid">
            <div className="about-glass-card">
              <div className="about-card-badge">Who We Are</div>
              <p className="about-card-text">
                Steve & Michael Consulting Group is a public health–focused social enterprise 
                committed to advancing the practice of public health through innovation, research, 
                and strategic capacity building. We collaborate with government agencies, NGOs, 
                health organizations, and academic institutions to design and implement sustainable 
                solutions that strengthen health systems and improve population well-being.
              </p>
              <p className="about-card-text">
                Our expertise spans digital health, AI in healthcare, capacity building of health 
                professionals, nutrition and food systems, and evidence-based public health practice. 
                We support clients in developing and managing research and development projects, 
                crafting competitive grants and proposals, and integrating technology-driven approaches 
                to enhance health service delivery and decision-making.
              </p>
            </div>

            <div className="about-glass-card">
              <div className="about-card-badge">OUR MISSION & SOCIAL IMPACT</div>
              <p className="about-card-text">
                As a mission-driven organization, we reinvest our expertise and resources into 
                initiatives that empower communities and promote equitable access to health innovation. 
                Through our work, we bridge the gap between research and practice—helping organizations 
                adopt data-driven strategies, leverage digital innovations, and build resilient health systems.
              </p>
              <p className="about-card-text highlighted-mission">
                At Steve & Michael Consulting Group, our mission is to harness technology, research, 
                and collaboration to build healthier, more resilient communities—advancing public health 
                practice while driving measurable social impact.
              </p>
            </div>
          </div>

          <section className="founding-team-section" style={{ marginTop: "60px", color: "#ffffff", overflow: "hidden", width: "100%", position: "relative" }}>
            <h2 className="founding-team-title" style={{ fontSize: "2rem", marginBottom: "30px", fontWeight: "bold", borderBottom: "2px solid rgba(255,255,255,0.1)", paddingBottom: "10px" }}>Founding Team</h2>
            
            <div style={{ width: "100%", overflow: "hidden", display: "flex" }}>

              <div style={{ display: "flex", width: "max-content", animation: "scrollLeftToRight 25s linear infinite", gap: "20px" }}>
                
                {/* Track 1 */}
                <div style={{ display: "flex", gap: "20px", flexShrink: 0 }}>
                  <div className="about-glass-card" style={{ padding: "24px", margin: "0", width: "320px", flexShrink: 0 }}>
                    <h3 style={{ fontSize: "1.25rem", color: "#4dadff", marginBottom: "8px", fontWeight: "600" }}>Managing Partner — Business & Partnerships</h3>
                    <p style={{ fontSize: "0.9rem", opacity: 0.8, marginBottom: "12px", fontStyle: "italic" }}><strong>Focus Area:</strong> Strategy, BD, external relations</p>
                    <p className="about-card-text" style={{ fontSize: "0.95rem", lineHeight: "1.5", margin: "0" }}><strong>Key Responsibilities:</strong> Client relationships, partnership development, overall strategic direction, early-stage proposal input.</p>
                  </div>

                  <div className="about-glass-card" style={{ padding: "24px", margin: "0", width: "320px", flexShrink: 0 }}>
                    <h3 style={{ fontSize: "1.25rem", color: "#4dadff", marginBottom: "12px", fontWeight: "600" }}>Managing Partner — Technical Delivery</h3>
                    <p className="about-card-text" style={{ fontSize: "0.95rem", lineHeight: "1.5", margin: "0" }}><strong>Key Responsibilities:</strong> Project delivery standards, technical quality assurance, methodology, staff/consultant oversight.</p>
                  </div>

                  <div className="about-glass-card" style={{ padding: "24px", margin: "0", width: "320px", flexShrink: 0 }}>
                    <h3 style={{ fontSize: "1.25rem", color: "#4dadff", marginBottom: "12px", fontWeight: "600" }}>Public Health Consultant</h3>
                    <p className="about-card-text" style={{ fontSize: "0.95rem", lineHeight: "1.5", margin: "0" }}><strong>Key ResponsResponsibilities:</strong> Research design, evidence synthesis, and project execution across digital health, nutrition, and capacity-building contracts.</p>
                  </div>

                  <div className="about-glass-card" style={{ padding: "24px", margin: "0", width: "320px", flexShrink: 0 }}>
                    <h3 style={{ fontSize: "1.25rem", color: "#4dadff", marginBottom: "12px", fontWeight: "600" }}>Grants & Proposals Associate</h3>
                    <p className="about-card-text" style={{ fontSize: "0.95rem", lineHeight: "1.5", margin: "0" }}><strong>Key Responsibilities:</strong> Donor research, LOIs and concept notes, budget narratives, compliance formatting and submission.</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "20px", flexShrink: 0 }}>
                  <div className="about-glass-card" style={{ padding: "24px", margin: "0", width: "320px", flexShrink: 0 }}>
                    <h3 style={{ fontSize: "1.25rem", color: "#4dadff", marginBottom: "8px", fontWeight: "600" }}>Managing Partner — Business & Partnerships</h3>
                    <p style={{ fontSize: "0.9rem", opacity: 0.8, marginBottom: "12px", fontStyle: "italic" }}><strong>Focus Area:</strong> Strategy, BD, external relations</p>
                    <p className="about-card-text" style={{ fontSize: "0.95rem", lineHeight: "1.5", margin: "0" }}><strong>Key Responsibilities:</strong> Client relationships, partnership development, overall strategic direction, early-stage proposal input.</p>
                  </div>

                  <div className="about-glass-card" style={{ padding: "24px", margin: "0", width: "320px", flexShrink: 0 }}>
                    <h3 style={{ fontSize: "1.25rem", color: "#4dadff", marginBottom: "12px", fontWeight: "600" }}>Managing Partner — Technical Delivery</h3>
                    <p className="about-card-text" style={{ fontSize: "0.95rem", lineHeight: "1.5", margin: "0" }}><strong>Key Responsibilities:</strong> Project delivery standards, technical quality assurance, methodology, staff/consultant oversight.</p>
                  </div>

                  <div className="about-glass-card" style={{ padding: "24px", margin: "0", width: "320px", flexShrink: 0 }}>
                    <h3 style={{ fontSize: "1.25rem", color: "#4dadff", marginBottom: "12px", fontWeight: "600" }}>Public Health Consultant</h3>
                    <p className="about-card-text" style={{ fontSize: "0.95rem", lineHeight: "1.5", margin: "0" }}><strong>Key Responsibilities:</strong> Research design, evidence synthesis, and project execution across digital health, nutrition, and capacity-building contracts.</p>
                  </div>

                  <div className="about-glass-card" style={{ padding: "24px", margin: "0", width: "320px", flexShrink: 0 }}>
                    <h3 style={{ fontSize: "1.25rem", color: "#4dadff", marginBottom: "12px", fontWeight: "600" }}>Grants & Proposals Associate</h3>
                    <p className="about-card-text" style={{ fontSize: "0.95rem", lineHeight: "1.5", margin: "0" }}><strong>Key Responsibilities:</strong> Donor research, LOIs and concept notes, budget narratives, compliance formatting and submission.</p>
                  </div>
                </div>

              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}


function OurResearchView() {
  const roadmapData = [
    {
      period: "2026–2028",
      title: "Digital Health Acceleration",
      description: "Telemedicine, wearables, AI intensive battery analysis, personalized AI diagnostics (2026–2028)",
      milestoneYear: "2028",
      colorTheme: "#117a85",
      iconPath: "M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-5 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 18c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5-4H7V6h10v11z"
    },
    {
      period: "2027–2031",
      title: "Preventive Health Revolution",
      description: "Predictive analysis, further personalization, harnessing experience concepts, and promoting available health innovations.",
      milestoneYear: "2031",
      colorTheme: "#e6a120",
      iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"
    },
    {
      period: "2029–2034",
      title: "Preventive Health Revolution II",
      description: "Predictive analytics / personalized wellness based on social determinants.",
      milestoneYear: "2034",
      colorTheme: "#ef7e22",
      iconPath: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    },
    {
      period: "2032–2034",
      title: "Community Health Resilience",
      description: "For well-adapted utilization, touch the added inclusive health consortium innovate.",
      milestoneYear: "2035",
      colorTheme: "#b81d24",
      iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
    },
    {
      period: "2035–2036",
      title: "Global Health Renaissance",
      description: "This further fast acceleration medicine replete with outcome edens using basic agility, actual failure.",
      milestoneYear: "2036",
      colorTheme: "#401342",
      iconPath: "M12 22c5.523 0 10-4.577 10-10.222C22 6.133 17.523 1.5 12 1.5S2 6.133 2 11.778C2 17.423 6.423 22 12 22zm1-14.778h-2v4.444h4v-1.481h-2V7.222z"
    }
  ];

  const attachedDocuments = [
    { title: "2026 Digital Health Acceleration Framework.pdf", filename: "digital-health-acceleration-2026.pdf", type: "PDF Report", size: "2.4 MB" },
    { title: "Preventive Health Infrastructure & Social Determinants Analysis.docx", filename: "preventive-health-determinants.docx", type: "Word Document", size: "1.8 MB" },
    { title: "Strategic Roadmap: Imaginary on the Future of Health.pdf", filename: "future-of-health-roadmap.pdf", type: "PDF Brief", size: "4.1 MB" }
  ];

  return (
    <div className="research-page-container">
      <section className="research-hero-banner">
        <h1 className="research-main-title">IMAGINARY ON THE FUTURE OF HEALTH 2026-2036</h1>
        <p className="research-subtext">Mapping actionable healthcare horizons, trend matrices, and policy recommendations over the upcoming decade.</p>
      </section>

      <section className="timeline-block-section">
        <div className="timeline-horizontal-grid">
          {roadmapData.map((node, index) => (
            <div key={index} className="timeline-node-column" style={{ '--node-accent': node.colorTheme }}>
              <div className="node-text-panel">
                <span className="node-period-tag">{node.period}</span>
                <h3 className="node-headline">{node.title}</h3>
                <p className="node-body-summary">{node.description}</p>
              </div>
              <div className="node-milestone-marker">
                <span className="milestone-year-text">{node.milestoneYear}</span>
                <div className="milestone-arrow-pointer" />
              </div>
              <div className="node-graphics-card">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="node-icon-svg">
                  <path d={node.iconPath} />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="research-documents-section">
        <div className="documents-panel-inner">
          <div className="docs-header-row">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="docs-section-icon">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
            </svg>
            <h2>Attached Laptop Research & Strategy Documents</h2>
          </div>
          <p className="docs-intro-text">Click the link options below to securely view, inspect, or download the baseline data sheets, analysis documentation briefs, and analytical logs transferred directly from our local workstation server storage pipelines:</p>
          
          <div className="documents-download-grid">
            {attachedDocuments.map((doc, idx) => (
              <div key={idx} className="document-download-card">
                <div className="doc-meta-left">
                  <div className="doc-icon-badge">{doc.type.includes("PDF") ? "PDF" : "DOCX"}</div>
                  <div className="doc-details-stack">
                    <span className="doc-card-title">{doc.title}</span>
                    <span className="doc-card-subinfo">{doc.type} • {doc.size}</span>
                  </div>
                </div>
                <a href={`/${doc.filename}`} download={doc.filename} className="doc-action-download-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download File
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function BranchesView() {


  return (
    
    <div className="tab-view-container" style={{ animation: "fadeIn 0.4s ease" }}>
      <button 
            onClick={() => setActiveTab("branches")} 
            className="btn-primary"
            style={{ border: "none", cursor: "pointer", textAlign: "center" }}
          >
            Our programs →
          </button>
    </div>
  );
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main>
        {/* State Conditional View Routing Matrix */}
        {activeTab === "what-we-do" && <WhatWeDoView />}
        {activeTab === "about-us" && <AboutUsView />}
        {activeTab === "our-research" && <OurResearchView />}
        {activeTab === "our-purpose" && <OurPurpose />}

        {activeTab === "events" && (
          <div className="tab-view-container">
            <h2>Upcoming Events</h2>
            <p>Join our scheduled virtual capacity building workshops, global symposia, and local clinic support summits.</p>
          </div>
        )}

        {activeTab === "home" && (
          <>
            <HeroSection setActiveTab={setActiveTab} />
            
            <section className="rows-section">
              <ImageTextRow eyebrow="What we do" title="Programs built with for communities" body="We design and deliver programs in partnership with local leaders." imageLabel="/h1.jpg" tone="purple" />
              <ImageTextRow eyebrow="Our program" title="We work with different people on different aspects" body="Our teams are embedded on the ground across multiple continents." href="/impact-stories" tone="green" reverse />
              <ImageTextRow eyebrow="Our research" title="Evidence that shapes every decision" body="Our research division studies the long-term effects of our programs." imageLabel="/h3.jpg" tone="pink" />
            </section>
            
            <section className="deeper-section">
              <div className="deeper-inner">
                <h2 className="deeper-title">Go deeper</h2>
                <div className="folder-grid">
                  {/* <FolderCard title="Our strategy" description="The multi-year plan guiding where and how we invest." href="/our-strategy" tone="purple" /> */}
                  <FolderCard title="Steve Foundation" description="Regional and country offices, and the teams that lead them." href="/branches" tone="green" />
                  <FolderCard title="Focus area" description="The core issues we concentrate our work around." href="/focus-area" tone="pink" />
                  <FolderCard title="Impact stories" description="First-hand accounts from the people we work with." href="/impact-stories" tone="purple" />
                </div>
              </div>
            </section>
            
            <ScopeSection />
          </>
        )}
      </main>
<Footer /> 
</> );
}