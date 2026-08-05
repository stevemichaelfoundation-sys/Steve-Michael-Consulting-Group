import Link from "next/link";
import "./branches.css";
import Image from "next/image";
// 1. IMPORT THE WIDGET FROM ITS ISOLATED LOCATION
import FundraisingWidget from "./support/support";

const DEPARTMENTS = [
  {
    key: "Maternal & child health",
    label: "Maternal & Child Health",
    description: "We explore maternal and infant mental health to help families live better lives. We use science and data to find new ways to support mothers and babies. Our team works hard to discover what helps parents and infants feel good. We share our facts with doctors and the public.",
    tone: "#3B1F5C",
  },
  {
    key: "Mental health",
    label: "Mental Health",
    description: "We explore mental health to help people live better lives. We use science and data to find new ways to support the mind. Our team works hard to discover what helps people feel good. We share our facts with doctors and the public.",
    tone: "#3F9B6C",
  },
  {
    key: "Adolescent sexual & Reproductive",
    label: "Adolescent Sexual & Reproductive Health",
    description: "A specialized research focus delivering crucial data, community toolkits, and evidence-based frameworks to directly improve adolescent well-being and health rights.",
    tone: "#E8628A",
  },
  {
    key: "Child Education & Development Skills",
    label: "Child Education & Development Skills",
    description: "Nurturing young minds by bridging academic fundamentals with essential life skills, ensuring early milestones are met through rigorous evidence-based learning strategies.",
    tone: "#5B3A82",
  },
];

const STATS = [
  { num: "4", label: "Core Programs" },
  { num: "2", label: "Countries Covered" },
  { num: "12+", label: "Active Frameworks" },
  { num: "30+", label: "Researchers on the Ground" },
];

export default function BranchHomePage() {
  return (
    <div className="homepage-wrapper">
      {/* Premium Hero Section with Two-Column Side Spacing Layout */}
      <section className="branch-hero" style={{ position: 'relative', width: '100%' }}>
        <div className="hero-overlay"></div>
        
        {/* Responsive internal flex layout boundary alignment anchor */}
        <div className="hero-content" style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
          width: '100%',
          padding: '0 20px',
          boxSizing: 'border-box'
        }}>
          
          {/* Left Block Side: Your original text headings and clickable buttons */}
          <div style={{ flex: '1', minWidth: '320px', maxWidth: '650px', textAlign: 'left' }}>
            <span className="hero-eyebrow">Global Research & Impact Alliance</span>
            <h1>Coordinating our work across the World</h1>
            <p>Advancing public health, mental well-being, and educational frameworks through rigorous data-driven science and community partnerships.</p>
            <div className="hero-actions">
              <Link href="#departments" className="btn-primary">Explore Research</Link>
              <Link href="/branches/about-us" className="btn-secondary">Partner With Us</Link>
            </div>
          </div>

          {/* Right Block Side: Injected Fundraising Widget Card Component Node */}
          <div style={{ flexShrink: 0, width: '100%', maxWidth: '380px', margin: '0 auto' }}>
            <FundraisingWidget />
          </div>

        </div>
      </section>

      {/* Stats Bar (Inspiration Aligned) */}
      <section className="branch-stats">
        <div className="stats-inner">
          {STATS.map((s) => (
            <div key={s.label} className="stat-item">
              <div className="branch-stat-num">{s.num}</div>
              <div className="branch-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Department Interactive Hub */}
      <section id="departments" className="departments-hub">
        <div className="section-header-centered">
          <span className="journey-eyebrow"># SCIENTIFIC PILLARS</span>
          <h2>Our Specialized Research Departments</h2>
          <p>Discover how our dedicated teams work together to conduct vital research and deliver programs directly on the ground.</p>
        </div>
        <div className="departments-grid">
          {DEPARTMENTS.map((dept) => (
            <div key={dept.key} className="dept-card" style={{ '--dept-accent': dept.tone }}>
              <div className="dept-card-accent-bar"></div>
              <h3>{dept.label}</h3>
              <p>{dept.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Double Feature Callout Cards */}
      <section className="branch-feature-grid">
        <div className="branch-feature-card tone-green">
          <h3>Access Guidelines & Toolkits</h3>
          <p>Equipping medical professionals, community health workers, and educators with peer-reviewed resources.</p>
          <Link href="/branches/guidelines" className="branch-feature-btn">Explore Guidelines →</Link>
        </div>
        <div className="branch-feature-card tone-cream">
          <h3>Corporate & Academic Sponsorship</h3>
          <p>Reach out to our global coordination team for strategic funding partnerships or institutional data inquiries.</p>
          <Link href="/branches/about-us" className="branch-feature-btn">Get In Touch →</Link>
        </div>
      </section>

      {/* Core Mandate Intro */}
      <section className="branch-intro">
        <div className="intro-container">
          <div className="intro-text">
            <h2>Our Approach</h2>
            <p>
              Our foundation serve as an essential strategic intersection, bridging institutional data with real-world implementation. Our work is distinct in its cross-disciplinary approach—combining mental health insights, maternal frameworks, and technological innovations to support sustainable development.
            </p>
            <p>
              By translating complex neurobiological and public health facts into scalable field methodologies, we empower communities globally to thrive in good health and live to their happiest potential.
            </p>
          </div>
        </div>
      </section>

      {/* Value Journey Timeline (Refined Box Layout) */}
      <section className="value-journey-centered-section">
        <div className="journey-header">
          <span className="journey-eyebrow"># ADDING VALUE WITH EDUCATION</span>
          <h2 className="journey-title">
            Strengthening Minds across <span className="title-accent-green">the journey.</span>
          </h2>
        </div>

        <div className="timeline-centered-cards-stack">
          {/* Card 1: ASRHR Outreach */}
          <div className="centered-folder-box border-teal">
            <div className="folder-box-top">
              <span className="folder-box-badge">01 / ASRHR OUTREACH</span>
              <span className="folder-box-icon">⚧️</span>
            </div>
            <div className="folder-box-body">
              <p>
                Adolescent Sexual and Reproductive Health and Rights (ASRHR) isn't a niche issue; 
                it's a foundation for healthier communities and stronger economies.
              </p>
            </div>
          </div>

          {/* Card 2: Mental Wellbeing */}
          <div className="centered-folder-box border-amber">
            <div className="folder-box-top">
              <span className="folder-box-badge">02 / MENTAL WELLBEING</span>
              <span className="folder-box-icon">🧠</span>
            </div>
            <div className="folder-box-body">
              <p>
                Mental health is not a luxury topic — it's foundational to every other outcome 
                we care about for young people: staying in school, building healthy relationships, 
                and thriving into adulthood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Z-Shape Flow */}
      <section className="insights-z-motion-section">
        <div className="insights-header-block">
          <h2>Key Structural Pillars & Insights</h2>
          <p>Our specialized pillars serve as academic and operational intersections. We provide evidence-based, stigma-free frameworks to guide community educators, health workers, and youth leaders.</p>
        </div>

        <div className="z-motion-stack">
          {/* ITEM 1: DEBUNKING MYTHS */}
          <div className="z-motion-row">
            <div className="z-motion-card border-accent-pink">
              <h3 className="z-card-title">🔴 Debunking the Myths: Fact-Based ASRHR</h3>
              <p className="z-card-intro">Misinformation is the greatest barrier to youth health. When myths dictate choices, young people lose. We must replace rumors with evidence-based facts.</p>
            </div>
            <div className="z-grid-myths">
              <div className="z-sub-box">
                <span className="badge-myth-label">❌ The Common Myth</span>
                <p>Myths block critical, safe health progress among younger community lines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
