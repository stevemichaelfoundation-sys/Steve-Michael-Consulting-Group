import Link from "next/link";

export default function Branches() {
  const offices = [
    { tag: "Regional", title: "East Africa Regional Office", body: "Coordinates programs across Kenya, Uganda, and Tanzania." },
    { tag: "Regional", title: "South Asia Regional Office", body: "Leads partnerships and field teams across the subcontinent." },
    { tag: "Country", title: "Andean Country Office", body: "Manages programs in Peru, Ecuador, and Bolivia." },
    { tag: "Country", title: "Southeast Asia Country Office", body: "Runs day-to-day operations in Vietnam and Cambodia." },
  ];

  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px" }}>
      <p style={{ fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#2E7550" }}>
        Branches
      </p>
      <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#241633", marginTop: "10px", marginBottom: "20px" }}>
        Our regional and country offices
      </h2>
      <p style={{ fontSize: "15px", color: "#241633", lineHeight: "1.6", maxWidth: "640px", marginBottom: "40px" }}>
        Each branch is staffed by people from the region it serves.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
        {offices.map((o) => (
          <div key={o.title} style={{ borderTop: "4px solid #3F9B6C", padding: "24px", background: "#FAF7F5", borderRadius: "0 0 10px 10px" }}>
            <span style={{ backgroundColor: "#E3F0E9", color: "#2E7550", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "999px", textTransform: "uppercase" }}>
              {o.tag}
            </span>
            <h3 style={{ fontWeight: "bold", fontSize: "17px", margin: "14px 0 10px", color: "#241633" }}>{o.title}</h3>
            <p style={{ fontSize: "13.5px", color: "#4a3a5c", lineHeight: "1.55" }}>{o.body}</p>
          </div>
        ))}
      </div>

      <section style={{ marginTop: "50px" }}>
        <div style={{ backgroundColor: "#2E7550", color: "#fff", padding: "36px", borderRadius: "16px", textAlign: "center" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "10px" }}>Curious what we work on there?</h2>
          <Link href="/focus-area" style={{ display: "inline-block", backgroundColor: "#E8628A", color: "#fff", padding: "10px 22px", borderRadius: "8px", fontWeight: 600, fontSize: "14px" }}>
            See focus areas →
          </Link>
        </div>
      </section>
    </main>
  );
}
