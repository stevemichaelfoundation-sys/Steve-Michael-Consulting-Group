import Link from "next/link";

export default function FocusArea() {
  const areas = [
    { title: "Health & nutrition", body: "Maternal health, child nutrition programs, and access to primary care." },
    { title: "Education", body: "Early childhood literacy and support for girls staying in secondary school." },
    { title: "Livelihoods", body: "Vocational training and small-business support for underserved communities." },
    { title: "Climate resilience", body: "Helping farming communities adapt to shifting rainfall and extreme weather." },
  ];

  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px" }}>
      <p style={{ fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#2E7550" }}>
        Focus area
      </p>
      <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#241633", marginTop: "10px", marginBottom: "20px" }}>
        Where we concentrate our work
      </h2>
      <p style={{ fontSize: "15px", color: "#241633", lineHeight: "1.6", maxWidth: "640px", marginBottom: "40px" }}>
        We deliberately work across a small number of issues, so our programs build depth over time.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
        {areas.map((a) => (
          <div key={a.title} style={{ borderTop: "4px solid #E8628A", padding: "24px", background: "#FAF7F5", borderRadius: "0 0 10px 10px" }}>
            <h3 style={{ fontWeight: "bold", fontSize: "17px", marginBottom: "10px", color: "#241633" }}>{a.title}</h3>
            <p style={{ fontSize: "13.5px", color: "#4a3a5c", lineHeight: "1.55" }}>{a.body}</p>
          </div>
        ))}
      </div>

      <section style={{ marginTop: "50px" }}>
        <div style={{ backgroundColor: "#C94A70", color: "#fff", padding: "36px", borderRadius: "16px", textAlign: "center" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "10px" }}>See it in the field</h2>
          <Link href="/impact-stories" style={{ display: "inline-block", backgroundColor: "#3B1F5C", color: "#fff", padding: "10px 22px", borderRadius: "8px", fontWeight: 600, fontSize: "14px" }}>
            Read impact stories →
          </Link>
        </div>
      </section>
    </main>
  );
}
