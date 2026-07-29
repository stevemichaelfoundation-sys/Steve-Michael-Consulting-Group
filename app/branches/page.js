import Link from "next/link";
import "./branches.css";
import Image from "next/image";

const DEPARTMENTS = [
  {
    key: "Matenal & child health",
    label: "Matenal & child health",
    description: "We explore maternal and infant mental health to help families live better lives. We use science and data to find new ways to support mothers and babies. Our team works hard to discover what helps parents and infants feel good. We share our facts with doctors and the public.",
    tone: "#3B1F5C",
  },
  {
    key: "Mental health",
    label: "Mental health",
    description: "We explore mental health to help people live better lives. We use science and data to find new ways to support the mind. Our team works hard to discover what helps people feel good. We share our facts with doctors and the public.",
    tone: "#3F9B6C",
  },
  {
    key: "Adolscent sexual & Reproductive",
    label: "Adolscent sexual & Reproductive",
    description: "A short description of what the Ad department focuses on and who it serves.",
    tone: "#E8628A",
  },
  {
    key: "Child Education & Development Skills",
    label: "Ch",
    description: "A short description of what the Ch department focuses on and who it serves.",
    tone: "#5B3A82",
  },
];

const STATS = [
  { num: "4", label: "Programs" },
  { num: "2", label: "Countries covered" },
  { num: "12+", label: "Active programs" },
  { num: "30+", label: "Staff on the ground" },
];

export default function BranchHomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="branch-hero">
        <h1>Coordinating our work across the World</h1>
        <p>A short overview of this branch's mission and reach goes here.</p>
      </section>

      {/* Feature Grid */}
      <div className="branch-feature-grid">
        <div className="branch-feature-card tone-green">
          <h3>Meet our departments</h3>
          <p> teams working together to deliver programs on the ground.</p>
          <Link href="/branches/guidelines" className="branch-feature-btn">Explore →</Link>
        </div>
        <div className="branch-feature-card tone-cream">
          <h3>Get in touch</h3>
          <p>Reach the branch team directly for partnerships or program questions.</p>
          <Link href="/branches/about-us" className="branch-feature-btn">Learn more →</Link>
        </div>
      </div>

      {/* Branch Intro */}
      <section className="branch-intro">
        <h2>About this branch</h2>
        <p>
          A couple of paragraphs about the branch's history, mandate, and role within the wider
          organization go here — replace this with real copy describing what makes this office's
          work distinct and how it fits into the broader strategy.
        </p>
      </section>

      {/* Stats Bar */}
      <section className="branch-stats">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="branch-stat-num">{s.num}</div>
            <div className="branch-stat-label">{s.label}</div>
          </div>
        ))}
      </section>

      {/* --- BOX-CONTAINERED VALUE JOURNEY TIMELINE (CENTERED) --- */}
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
                Adolescent Sexual and Reproductive Health and Rights (ASRHR) isn't a niche issue, 
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

      {/* --- INSIGHTS SECTION STRUCTURALLY CONVERTED INTO Z-SHAPE MOTION FLOW --- */}
      <section className="insights-z-motion-section">
        <div className="insights-header-block">
          <h2>Key Structural Pillars & Insights</h2>
          <p>Our specialized pillars serve as academic and operational intersections. We provide evidence-based, stigma-free frameworks to guide community educators, health workers, and youth leaders.</p>
        </div>

        <div className="z-motion-stack">
          
          {/* ITEM 1: DEBUNKING MYTHS (Left content, right space) */}
          <div className="z-motion-row">
            <div className="z-motion-card border-accent-pink">
              <h3 className="z-card-title">🔴 Debunking the Myths: Fact-Based ASRHR</h3>
              <p className="z-card-intro">Misinformation is the greatest barrier to youth health. When myths dictate choices, young people lose. We must replace rumors with evidence-based facts.</p>
              
              <div className="z-grid-myths">
                <div className="z-sub-box">
                  <span className="badge-myth-label">❌ The Common Myth</span>
                  <p>&ldquo;A girl cannot get pregnant during her first encounter.&rdquo;</p>
                  <span className="badge-fact-label">🎯 The Proven Fact</span>
                  <p>Pregnancy can happen anytime unprotected intercourse occurs after ovulation begins.</p>
                </div>
                <div className="z-sub-box">
                  <span className="badge-myth-label">❌ The Common Myth</span>
                  <p>&ldquo;Talking about sex encourages early activity.&rdquo;</p>
                  <span className="badge-fact-label">🎯 The Proven Fact</span>
                  <p>Education delays sexual debut and increases protective, responsible behaviors.</p>
                </div>
                <div className="z-sub-box">
                  <span className="badge-myth-label">❌ The Common Myth</span>
                  <p>&ldquo;Using contraception leads to long-term infertility.&rdquo;</p>
                  <span className="badge-fact-label">🎯 The Proven Fact</span>
                  <p>Modern methods do not cause infertility; fertility returns after stopping use.</p>
                </div>
                <div className="z-sub-box">
                  <span className="badge-myth-label">❌ The Common Myth</span>
                  <p>&ldquo;You can tell if someone has an STI just by looking.&rdquo;</p>
                  <span className="badge-fact-label">🎯 The Proven Fact</span>
                  <p>Most STIs show no visible signs; confidential testing is the only reliable way.</p>
                </div>
              </div>
            </div>
            <div className="z-motion-spacer"></div>
          </div>

          {/* ITEM 2: ADVANCING ASRHR (Right content, left space - Z REVERSE) */}
          <div className="z-motion-row row-zigzag-reversed">
            <div className="z-motion-card border-accent-blue">
              <h3 className="z-card-title">🌐 Advancing ASRHR: Stronger Communities</h3>
              <p className="z-card-intro">Access to accurate information and confidential care creates massive community ripple effects across social and economic lines.</p>
              <ul className="z-bullet-list">
                <li><strong>Fewer unintended pregnancies:</strong> Empowering youth with accurate contraceptive knowledge.</li>
                <li><strong>Reduced unsafe abortions:</strong> Protecting lives through preventative education and care.</li>
                <li><strong>Lower STI transmission:</strong> Promoting safe practices, screening, and active prevention.</li>
                <li><strong>Higher graduation rates:</strong> Keeping girls in school to secure their futures.</li>
                <li><strong>Economic independence:</strong> Driving long-term financial stability and community growth.</li>
              </ul>
            </div>
            <div className="z-motion-spacer"></div>
          </div>

          {/* ITEM 3: MENTAL HEALTH (Left content, right space) */}
          <div className="z-motion-row">
            <div className="z-motion-card border-accent-purple">
              <h3 className="z-card-title">🧠 Youth Mental Health: Core of Adolescent Thriving</h3>
              <p className="z-card-intro">Mental health is an absolute foundational necessity. Adolescents in low-resource settings face immense pressures without adequate support systems.</p>
              <ul className="z-bullet-list">
                <li><strong>Safe spaces:</strong> Creating non-judgmental environments for youth to express feelings.</li>
                <li><strong>Early detection:</strong> Training community workers to spot early warning signs.</li>
                <li><strong>Real referrals:</strong> Building actionable pathways to professional care, not just awareness.</li>
                <li><strong>Community allies:</strong> Engaging parents and leaders to actively break the stigma.</li>
              </ul>
            </div>
            <div className="z-motion-spacer"></div>
          </div>

        </div>
      </section>
     
    <section className="sustainability-section">
      <div className="container-inner">

        {/* SECTION 1 */}
        <div className="content-row">
          <div className="image-column">
          <div className="image-wrapper relative w-full h-[300px]">
                           <Image 
                        src="/h1.jpg"
                            alt="Herbs" 
                                    fill 
                                  className="object-cover" 
                                       priority 
                                   />
                                   </div>
          </div>
          <div className="text-column">
            <h1>Maternal and child Health.</h1>
            <p>Maternal and Child Health (MCH) is a critical public health framework dedicated to optimizing the health, development, and well-being of women, neonates, and children. By addressing systemic health disparities and advancing clinical interventions during vital life stages, MCH initiatives directly reduce preventable mortality, improve birth outcomes, and establish life-long foundations for community health.</p>
    
          </div>
        </div>

        {/* TRANSITION */}
        <div className="transition-banner">
          <p>everaging Artificial Intelligence (AI) represents a transformative frontier in public health. This approach integrates predictive analytics, machine learning, and automated clinical tools into the traditional MCH framework. By converting complex biomatic data into actionable clinical insights, this intersection directly targets the reduction of maternal and infant mortality, addresses systemic health disparities, and optimizes global healthcare delivery.</p>
        </div>

        {/* SECTION 2 */}
        <div>
          <h2 className="heading-title">SOURCING</h2>
          <div className="content-row">
            <div className="image-column">
              <div className="image-wrapper relative w-full h-[300px]">
                           <Image 
                        src="/used.jpg"
                            alt="Herbs" 
                                    fill 
                                  className="object-cover" 
                                       priority 
                                   />
                                   </div>
            </div>
            <div className="text-column">
              <h3 className="subheading-title">Mental Health</h3>
              <p>Mental health encompasses cognitive, behavioral, and emotional well-being. It determines how individuals navigate stress, engage with their communities, and make decisions. In the landscape of modern research and grant development, the field focuses on understanding neurobiological mechanisms, optimizing early interventions, and ensuring equitable access to care</p>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="sourcing-footer-block">
          <h1 className="heading-title"> Child Education and development skills</h1>
          <p className="supplier-code-text"> We believe that early childhood education and development skills are the cornerstones of lifelong success and community resilience. This department focuses on nurturing young minds by bridging academic fundamentals with essential life skills. By implementing evidence-based learning strategies and engaging directly with families, we cultivate environments where children can develop critical thinking, emotional resilience, and practical capabilities. Our targeted programs work to eliminate educational barriers, ensure cognitive milestones are met, and equip the next generation with the foundational tools they need to navigate school, discover their unique potential, and thrive healthily into adulthood.</p>
         
        </div>

          <div>
          <h2 className="heading-title">Education for all</h2>
          <div className="content-row">
            <div className="image-column">
              <div className="image-wrapper relative w-full h-[300px]">
                           <Image 
                        src="/h3.jpg"
                            alt="Herbs" 
                                    fill 
                                  className="object-cover" 
                                       priority 
                                   />
                                   </div>
            </div>
            <div className="text-column">
              <h3 className="subheading-title"></h3>
              <p>Mental health encompasses cognitive, behavioral, and emotional well-being. It determines how individuals navigate stress, engage with their communities, and make decisions. In the landscape of modern research and grant development, the field focuses on understanding neurobiological mechanisms, optimizing early interventions, and ensuring equitable access to care</p>
            </div>
          </div>
        </div>


        {/* BOTTOM SECTION */}
        <div className="bottom-divider">
          <h3>Empowering communities to thrive in good health and live life to its happiest, healthiest potential.</h3>
        </div>

      </div>
    </section>
</>
  );

}