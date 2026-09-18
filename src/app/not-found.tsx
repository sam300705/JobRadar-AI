export default function NotFound() {
  return (
    <main className="errorShell">
      <section className="errorCard" aria-labelledby="not-found-title">
        <p className="eyebrow">404</p>
        <h1 id="not-found-title">That JobRadar page does not exist.</h1>
        <p className="lede">
          The requested route is unavailable. No placeholder or fabricated
          result has been substituted.
        </p>
      </section>
    </main>
  );
}
