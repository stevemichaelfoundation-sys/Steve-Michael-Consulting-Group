"use client";

import Link from "next/link";
import "./impact-stories.css";

export default function ImpactStoriesPage() {
  return (
    <div className="impact-stories-canvas">
    
      <section className="impact-hero-viewport">
        <div className="impact-hero-overlay-card">
          <p className="impact-hero-eyebrow">GRANTS AND SPONSORED PROGRAMS</p>
          <h1 className="impact-hero-main-title">WELL-RESPECTED THOUGHT LEADERS</h1>
          
          <p className="impact-hero-lead-text">
            Mental health is not a luxury topic — it's foundational to every other outcome we care about for young people: 
            staying in school, building healthy relationships, and thriving into adulthood.
          </p>

          <div className="impact-hero-actions-stack">
            <button onClick={() => alert("Opening Information Request Panel...")} className="impact-btn-dark">
              Request Info
            </button>
          </div>
        </div>

        <div className="impact-hero-visual-frame">
          <div className="visual-frame-placeholder-inner">
            <span>📷</span>
            <p>Thought leaders collaborating on youth wellness programming</p>
          </div>
        </div>
      </section>

      <section className="impact-editorial-content-section">
        
        <div className="editorial-text-block">
          <p className="editorial-paragraph-node font-lead">
            Across low-resource settings, adolescents face real and growing mental health pressures: 
            academic stress, economic hardship, family instability, social media pressures, and for many — 
            the weight of trauma that goes unspoken. Yet mental health support remains one of the most 
            under-resourced parts of youth programming, often overshadowed by more visible health priorities.
          </p>
          
          <p className="editorial-paragraph-node">
            At Steve & Michael Consulting Group, we believe mental health deserves the same seriousness, 
            investment, and stigma-free conversation as physical health.
          </p>
        </div>

        <div className="editorial-sub-projects-block">
          <h2 className="editorial-section-subtitle">Our Strategic Implementation</h2>
          <p className="editorial-paragraph-node text-muted">
            To build a robust, judgment-free support framework around vulnerable youth populations, our 
            current field development mandates emphasize four key operational mechanisms:
          </p>

          <div className="action-checkmark-grid">
            <div className="checkmark-node-item">
              <span className="checkmark-icon">✅</span>
              <p className="checkmark-text">Creating safe spaces where young people can talk without judgment</p>
            </div>
            <div className="checkmark-node-item">
              <span className="checkmark-icon">✅</span>
              <p className="checkmark-text">Training community health workers and educators to recognize early warning signs</p>
            </div>
            <div className="checkmark-node-item">
              <span className="checkmark-icon">✅</span>
              <p className="checkmark-text">Connecting youth to real referral pathways — not just awareness campaigns</p>
            </div>
            <div className="checkmark-node-item">
              <span className="checkmark-icon">✅</span>
              <p className="checkmark-text">Involving parents and community leaders as allies, not obstacles</p>
            </div>
          </div>

          <div className="editorial-concluding-keynote-box">
            <p className="keynote-quote-text">
              "A young person who feels heard is a young person who can heal, grow, and lead."
            </p>
          </div>
        </div>

      </section>

      <div style={{ maxWidth: "1140px", margin: "4rem auto 0 auto", padding: "0 2rem", textAlign: "center" }}>
        <Link href="/" className="btn-secondary" style={{ display: "inline-block", textDecoration: "none" }}>
          ← Return to Main Management Board
        </Link>
      </div>

    </div>
  );
}
