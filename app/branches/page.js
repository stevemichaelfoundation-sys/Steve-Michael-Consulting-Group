import Link from "next/link";

const DEPARTMENTS = [
  {
    key: "Matenal & child health",
    label: "Matenal & child health",
    description: "A short description of what the Mm department focuses on and who it serves.",
    tone: "#3B1F5C",
  },
  {
    key: "Mental health",
    label: "Mental health",
    description: "A short description of what the Mg department focuses on and who it serves.",
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
      <section className="branch-hero">
        <h1>Coordinating our work across the World</h1>
        <p>A short overview of this branch's mission and reach goes here.</p>
      </section>

      <div className="branch-feature-grid">
        <div className="branch-feature-card tone-green">
          <h3>Meet our departments</h3>
          <p> teams working together to deliver programs on the ground.</p>
          <Link href="/branches/mm" className="branch-feature-btn">Explore →</Link>
        </div>
        <div className="branch-feature-card tone-cream">
          <h3>Get in touch</h3>
          <p>Reach the branch team directly for partnerships or program questions.</p>
          <Link href="/branches/about-us" className="branch-feature-btn">Learn more →</Link>
        </div>
      </div>

      <section className="branch-intro">
        <h2>About this branch</h2>
        <p>
          A couple of paragraphs about the branch's history, mandate, and role within the wider
          organization go here — replace this with real copy describing what makes this office's
          work distinct and how it fits into the broader strategy.
        </p>
      </section>

      <section className="branch-stats">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="branch-stat-num">{s.num}</div>
            <div className="branch-stat-label">{s.label}</div>
          </div>
        ))}
      </section>

      <section className="dept-section">
        <h2>Departments</h2>
        <div className="dept-grid">
          {DEPARTMENTS.map((d) => (
            <Link key={d.key} href={`/branches/${d.key}`} className="dept-card">
              <div className="dept-card-image" style={{ backgroundColor: d.tone }}>
                {d.label} department photo
              </div>
              <div className="dept-card-body">
                <span className="dept-card-label">{d.label}</span>
                <p className="dept-card-desc">{d.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
