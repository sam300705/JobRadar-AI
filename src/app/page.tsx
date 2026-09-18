const principles = [
  {
    title: "Source verified",
    description:
      "Prefer original employer and official ATS sources, with provenance instead of copied listings.",
  },
  {
    title: "Eligibility first",
    description:
      "Keep hard eligibility separate from soft relevance so a strong skill match never hides a real constraint.",
  },
  {
    title: "Change aware",
    description:
      "Treat opportunities as changing records with snapshots, meaningful diffs, and verification history.",
  },
] as const;

export default function HomePage() {
  return (
    <main className="shell">
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">Career Intelligence System</p>
        <h1 id="hero-title">
          Stop scrolling through jobs. Understand your opportunity market.
        </h1>
        <p className="lede">
          JobRadar AI is being built to discover public opportunities from their
          source, verify what is known, evaluate eligibility with evidence, and
          track meaningful changes over time.
        </p>
        <div className="status" role="status" aria-label="Product status">
          <span className="statusDot" aria-hidden="true" />
          Engineering foundation in progress
        </div>
      </section>

      <section className="principles" aria-label="Product principles">
        {principles.map((principle) => (
          <article className="principle" key={principle.title}>
            <h2>{principle.title}</h2>
            <p>{principle.description}</p>
          </article>
        ))}
      </section>

      <footer>
        Verified over viral. Evidence over keywords. Truth over artificial AI
        confidence.
      </footer>
    </main>
  );
}
